import * as fs from 'fs'
import { SAXParser } from 'sax'
import { IDictDoneCb, ISaxNode, SAXStream } from '../../dict-primitive'
import { FixDefinitions } from '../../definition'
import { FieldDefinitionParser } from './field-definition-parser'
import { FieldSetParser } from './field-set-parser'
import { MessageParser } from './message-parser'
import { NodeParser } from './node-parser'
import { FixParser } from '../../fix-parser'
import { FixDefinitionSource, VersionUtil } from '../../fix-versions'
import { GetJsFixLogger } from '../../../config'
import { promisify } from 'util'

enum ParseState {
    Begin = 1,
    FieldDefinitions = 2,
    ComponentsFirstPass = 3,
    ComponentsSecondPass = 4,
    ComponentsThirdPass = 5,
    Messages = 6
}

export class QuickFixXmlFileParser extends FixParser {

  public parseState: ParseState = ParseState.Begin
  public numberPasses: number = 0
  public definitions: FixDefinitions
  private readonly singlePass = promisify(QuickFixXmlFileParser.subscribe)

  constructor (public readonly xmlPath: string, public getLogger: GetJsFixLogger) {
    super()
  }

  private static subscribe (instance: QuickFixXmlFileParser, saxStream: SAXStream, done: IDictDoneCb): void {
    let parser: NodeParser

    instance.numberPasses++
    switch (instance.parseState) {
      case ParseState.Begin: {
        instance.parseState = ParseState.FieldDefinitions
        break
      }
      case ParseState.FieldDefinitions: {
        instance.parseState = ParseState.ComponentsFirstPass
        break
      }
      case ParseState.ComponentsFirstPass: {
        instance.parseState = ParseState.ComponentsSecondPass
        break
      }
      case ParseState.ComponentsSecondPass: {
        instance.parseState = ParseState.ComponentsThirdPass
        break
      }
      case ParseState.ComponentsThirdPass: {
        instance.parseState = ParseState.Messages
        break
      }
    }

    const saxParser: SAXParser = saxStream._parser

    saxStream.on('error', (e: Error) => {
      done(e, null)
    })

    saxStream.on('closetag', (name) => {
      if (parser != null) {
        parser.close(saxParser.line, name)
      }
      switch (name) {
        case 'repository':
        case 'messages':
        case 'components':
        case 'header':
        case 'trailer': {
          parser = null
          break
        }
      }
    })

    saxStream.on('opentag', (node) => {
      const saxNode: ISaxNode = node as ISaxNode

      switch (saxNode.name) {

        case 'fix': {
          switch (instance.parseState) {
            case ParseState.FieldDefinitions: {
              const major = saxNode.attributes.major
              const minor = saxNode.attributes.major
              const description: string = `FIX.${major}.${minor}`
              instance.definitions = new FixDefinitions(FixDefinitionSource.QuickFix, VersionUtil.resolve(description))
              break
            }
          }
          break
        }

        case 'fields': {
          switch (instance.parseState) {
            case ParseState.FieldDefinitions: {
              parser = new FieldDefinitionParser(instance)
              break
            }
            default: {
              parser = null
            }
          }
          break
        }

        case 'messages': {
          switch (instance.parseState) {
            case ParseState.Messages: {
              parser = new MessageParser(instance)
              break
            }

            default:
              break
          }
          break
        }

        case 'components': {
                    // can have a group containing components which contain themselves components of groups
                    // each step will build forward references to a deeper level to ensure final messages
                    // have all dependencies correctly defined.
          switch (instance.parseState) {
            case ParseState.ComponentsFirstPass:
            case ParseState.ComponentsSecondPass:
            case ParseState.ComponentsThirdPass:
              parser = new FieldSetParser(instance)
              break
          }
          break
        }

        case 'field':
        case 'value':
        case 'component':
        case 'group': {
          if (parser != null) {
            parser.open(saxParser.line, saxNode)
          }
          break
        }

        case 'message': {
          switch (instance.parseState) {
            case ParseState.Messages: {
              if (parser != null) {
                parser.open(saxParser.line, saxNode)
              }
              break
            }

            default:
              break
          }
          break
        }

        case 'header':
        case 'trailer': {
          switch (instance.parseState) {
            case ParseState.Messages: {
              parser = new FieldSetParser(instance)
              parser.open(saxParser.line, node)
              break
            }
          }
          break
        }
      }
    })

    saxStream.on('ready', () => {
      if (done) {
        parser = null
        done(null, instance.definitions)
      }
    })
  }

  public parse (): Promise<FixDefinitions> {
    return new Promise<FixDefinitions>(async (accept, reject) => {
      try {
        await this.onePass() // first fetch all field definitions
        await this.onePass() // first pass of components, will not know about forward components.
        await this.onePass() // second pass of components top level with forward references replace
        await this.onePass() // third pass of components all fully resolved i.e. pick up versions from pass above
        await this.onePass() // lastly messages with all dependencies
        accept(this.definitions)
      } catch (e) {
        reject(e)
      }
    })
  }

  private async onePass (): Promise<FixDefinitions> {
    const pass: fs.ReadStream = fs.createReadStream(this.xmlPath)
    const saxStream: SAXStream = require('sax').createStream(true, {})
    pass.pipe(saxStream)
    return this.singlePass(this, saxStream)
  }
}

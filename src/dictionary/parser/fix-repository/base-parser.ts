import { ILooseObject } from '../../../collections/collection'
import { ISaxNode } from '../../dict-primitive'
import { RepositoryXmlParser } from './repository-xml-parser'

export abstract class BaseParser {
  public data: ILooseObject[] = []
  public current: ILooseObject

  protected constructor (public readonly parser: RepositoryXmlParser, public readonly name: string) {
  }

  public value (line: number, n: string, v: string): void {
    this.current[n] = v
  }

  public close (line: number, node: string): void {
    if (node !== this.name) {
      return
    }

    this.data[this.data.length] = this.current
  }

  public open (line: number, node: ISaxNode): void {
    if (node.name !== this.name) {
      return
    }
    this.current = {}
  }
}

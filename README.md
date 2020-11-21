> This is a custom fork to remove a conflicting dependency. Please use https://www.npmjs.com/package/jspurefix instead.

[![Build status](https://ci.appveyor.com/api/projects/status/2w2eag4trnijg5d3?svg=true)](https://ci.appveyor.com/project/TimelordUK/jsfix)
[![Build Status](https://travis-ci.org/TimelordUK/jspurefix.svg?branch=master)](https://travis-ci.org/TimelordUK/jspurefix)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# jspurefix

1. fast 100% native clean fix engine for Node JS
1. represent data dictionary as quickfix or repo notation 
1. compile interface types against definitions
1. ascii / fixml supported
1. parses repeat groups, components and raw data fields
1. views make convinient ways of accessing data
1. complete trade capture sample to get started
1. a skeleton example shows connection, login and session only
1. parse fix logs into human readable format - JSON, tokens
1. socket session management for login, heartbeat etc
1. implement httpInitiator or acceptor

## Typescript FIX Engine for Node JS

This fix engine provides a fast easy API to parse or send finacial protocol FIX messages. It is implemented entirely in typescript and runs in Node JS. Messages of any complexity can be handled providing they are backed by a suitable data dictionary. All structures within a message will be resolved for easy access - groups of components containing groups etc. 

### extensive documentation coming soon.

## Installing

compiled typescript is now included. Install the package from npm:

```shell
  npm install jspurefix
  npm run unzip-repo
```

see our [demo application](https://github.com/TimelordUK/jspf-demo/) 

```shell
  https://github.com/TimelordUK/jspf-demo.git
```

import types for usage with a client

```typescript

import {
  AsciiSession,
  MsgView,
  IJsFixConfig,
  IJsFixLogger,
  Dictionary,
  MsgType,
  IJsFixConfig, 
  initiator,
  acceptor,
  makeConfig 
} from 'jspurefix'
// types for the specific FIX dialect
import {
  ITradeCaptureReport,
  ITradeCaptureReportRequest,
  ITradeCaptureReportRequestAck
} from 'jspurefix/dist/types/FIX4.4/repo'

```

see example trade-capture-client - use 


### getting started

clone from git

unix

```shell
  git clone https://github.com/TimelordUK/jspurefix.git
  cd jspurefix
  script/build.sh
```

```shell
  npm install
  npm run unzip-repo
  ./node_modules/.bin/tsc --version
  ./node_modules/.bin/tsc
  npm run tcp-tc
```

windows

```shell
  git clone https://github.com/TimelordUK/jspurefix.git
  cd jspurefix
  script\build.cmd
```

or

```shell
  git clone https://github.com/TimelordUK/jspurefix.git
  cd jspurefix
  npm install
  npm run unzip-repo
  node_modules/.bin/tsc
  npm run tcp-tc
```

# Run Sample

The code provided in src/sample/tcp/trade_capture is a good place to start in building an application with this library. In this case both client and server are run together communicating over a socket.  In reality a client is more likely connecting to an external acceptor such as CME, ICE.

There is also a skeleton application which shows all application code stripped away to just enough to create a connection, login and see the session.

Both examples will automatically close down after ~1 minute or can be terminated CTRL-C

ensure the repo dictionary has been unpacked above.  This provides the data dictionary
used to parse messages.

run examples such as the trade capture, simple skeleton or http.

```shell
npm run tcp-tc
```

```shell
npm run tcp-sk
```

included is an example fixml over http application where an order is submitted and execution report returned.

```shell
npm run http-oms
```

## Unit Tests

there is a comprehensive suite of tests which can be run

```shell
npm t
```

```bash
PASS  src/test/elastic-buffer.test.ts
RUNS  src/test/session.test.ts
PASS  src/test/encode-proxy.test.tsst.ts
PASS  src/test/execution-report.test.ts
PASS  src/test/view-decode.test.ts
PASS  src/test/ascii-encode.test.ts
PASS  src/test/ascii-parser.test.ts
PASS  src/test/includes.test.ts
PASS  src/test/fixml-alloc-parse.test.ts (9.433s)
PASS  src/test/repo-full-fixml-msg.test.ts (6.025s)
PASS  src/test/fixml-mkt-data-settle-parse.test.ts (6.021s)
PASS  src/test/qf-full-msg.test.ts
PASS  src/test/logon.test.ts
PASS  src/test/fixml-mkt-data-fut-parse.test.ts (7.761s)
PASS  src/test/time-formatter.test.ts
PASS  src/test/ascii-segment.test.ts
PASS  src/test/session-state.test.ts
PASS  src/test/fixml-tc-bi-lateral-parse.test.ts (7.534s)
PASS  src/test/ascii-tag-pos.test.ts
PASS  src/test/fix-log-replay.test.ts
PASS  src/test/repo-full-ascii-msg.test.ts
PASS  src/test/session.test.ts (52.637s)

Test Suites: 21 passed, 21 total
Tests:       204 passed, 204 total
Snapshots:   0 total
Time:        54.606s, estimated 65s
Ran all test suites.
```

## Dictionary Definitions

base definitions on existing template e.g. quickfix format FIX44.xml
create an alias in data/dictionary.json
compile interfaces

```shell
npm run cmd -- --dict=repo42 --compile
```

use the alias in a session file e.g. data/session/test-httpInitiator.json

## sample trade-capture-client.ts

the method onApplicationMsg is called when a message is received.  In this case the client has inherited from AsciiSession which carries out the session management.

```typescript
  constructor (public readonly config: IJsFixConfig) {
    super(config)
    this.logReceivedMsgs = true
    this.reports = new Dictionary<ITradeCaptureReport>()
    this.fixLog = config.logFactory.plain(`jsfix.${config.description.application.name}.txt`)
    this.logger = config.logFactory.logger(`${this.me}:TradeCaptureClient`)
  }

  protected onApplicationMsg (msgType: string, view: MsgView): void {
    this.logger.info(`${view.toJson()}`)
    switch (msgType) {
      case MsgType.TradeCaptureReport: {
        // create an object and cast to the interface
        const tc: ITradeCaptureReport = view.toObject()
        this.reports.addUpdate(tc.TradeReportID, tc)
        this.logger.info(`[reports: ${this.reports.count()}] received tc ExecID = ${tc.ExecID} TradeReportID  = ${tc.TradeReportID} Symbol = ${tc.Instrument.Symbol} ${tc.LastQty} @ ${tc.LastPx}`)
        break
      }

      case MsgType.TradeCaptureReportRequestAck: {
        const tc: ITradeCaptureReportRequestAck = view.toObject()
        this.logger.info(`received tcr ack ${tc.TradeRequestID} ${tc.TradeRequestStatus}`)
        break
      }
    }
  }
```

the client onReady method is called when a connection is made and logon established and confirmed.  In this case, client sends a trade capture request to the server.

```typescript
  protected onReady (view: MsgView): void {
    this.logger.info('ready')
    const tcr: ITradeCaptureReportRequest = TradeFactory.tradeCaptureReportRequest('all-trades', new Date())
    // send request to server
    this.send(MsgType.TradeCaptureReportRequest, tcr)
    const logoutSeconds = 32
    this.logger.info(`will logout after ${logoutSeconds}`)
    setTimeout(() => {
      this.done()
    }, logoutSeconds * 1000)
  }

```

## working with Views

see src/test/view-decode.test.ts

note that a view can only be used within a callback context unless it is cloned.  Once returned, the memory is re-used for next message.  It is intended to convert to an object or parsed into an application specific message.

fetch a group view

```typescript
  const noMDEntriesView: MsgView = view.getView('NoMDEntries')
  const mmEntryView: MsgView = noMDEntriesView.getGroupInstance(1)

  const mmEntryExpireTimeAsString: string = mmEntryView.getString('ExpireTime')
  expect(mmEntryExpireTimeAsString).toEqual('20180608-20:53:14.000')
  expect(mmEntryView.getString(126)).toEqual('20180608-20:53:14.000')
```

fetch single tags

```typescript
  const erView: MsgView = views[0]
  expect(erView.getString(35)).toEqual('8')
  expect(erView.getString('MsgType')).toEqual('8')
  expect(erView.getString(8)).toEqual('FIX4.4')
  expect(erView.getTyped(9)).toEqual(6542)
  expect(erView.getTyped('TotNumReports')).toEqual(19404)
  expect(erView.getTyped('StrikePrice')).toEqual(52639)
```

fetch repeated tag

```typescript
  const erView: MsgView = views[0]
  expect(erView.getStrings('PartyID')).toEqual(['magna.', 'iaculis', 'vitae,'])
```

fetch a set of tags

```typescript
  const [a, b, c, d] = view.getTypedTags([8, 9, 35, 49])
  expect(a).toEqual('FIX4.4')
  expect(b).toEqual(2955)
  expect(c).toEqual('W')
  expect(d).toEqual('sender-10')
```

convert view into an object which can be used alongside an interface for intellisense.

```typescript
  import { ITradeCaptureReport } from '../../../types/FIX4.4/repo/trade_capture_report'
  import { ITradeCaptureReportRequest } from '../../../types/FIX4.4/repo/trade_capture_report_request'

  const tc: ITradeCaptureReport = view.toObject()
```

from data/examples/FIX.4.4/quickfix/execution-report

get first in group fetched from object where group is array

```typescript
  import { IUndInstrmtGrp } from '../types/FIX4.4/quickfix/set/und_instrmt_grp'
  import { IUnderlyingInstrument } from '../types/FIX4.4/quickfix/set/underlying_instrument'
  const erView: MsgView = views[0]
  const undInstrmtGrpView: MsgView = erView.getView('UndInstrmtGrp')
  const undInstrmtGrpViewAsObject: IUndInstrmtGrp = undInstrmtGrpView.toObject()
  expect(undInstrmtGrpViewAsObject.NoUnderlyings.length).toEqual(2)
  const underlying0: IUnderlyingInstrument = undInstrmtGrpViewAsObject.NoUnderlyings[0].UnderlyingInstrument
  expect(underlying0.UnderlyingSymbol).toEqual('massa.')
```

fetch nested structure in one call

```typescript
  const legGrpView = view.getView('InstrmtLegGrp.NoLegs')
  expect(legGrpView).toBeTruthy()
  const legGrp: IInstrumentLeg[] = legGrpView.toObject()
  expect(legGrp).toBeTruthy()
  expect(Array.isArray(legGrp))
  expect(legGrp.length).toEqual(2)
```

get a tokenised view of tags in view

```typescript
console.log(view.toString())
```

get a component from parent - this is very low cost

```typescript
 const instrumentView: MsgView = view.getView('Instrument')
 const instrumentObject: IInstrument = view.getView('Instrument').toObject()
```

## FIXML

Please see sample code src/sample/http for an example of how fixml can be used. Note regardless of using AsciiChars or Fixml application code looks very similar for example the client in this case.

```typescript
  protected onReady (view: MsgView): void {
    this.logger.info('onReady')
    const logoutSeconds = this.logoutSeconds
    const req = this.factory.createOrder('IBM', Side.Buy, 10000, 100.12)
    this.send('NewOrderSingle', req)
    this.logger.info(`will logout after ${logoutSeconds}`)
    setTimeout(() => {
      this.done()
    }, 11 * 1000)
  }

    public createOrder (symbol: string, side: Side, qty: number, price: number): INewOrderSingle {
    const id: number = this.id++
    return {
      ClOrdID: `Cli${id}`,
      Account: this.account,
      Side: side,
      Price: price,
      OrdType: OrdType.Limit,
      OrderQtyData: {
        OrderQty: qty
      } as IOrderQtyData,
      Instrument: {
        Symbol: symbol,
        SecurityID: '459200101',
        SecurityIDSource: SecurityIDSource.IsinNumber
      } as IInstrument,
      TimeInForce: TimeInForce.GoodTillCancelGtc
    } as INewOrderSingle
  }
```

this renders to this message sent over http

```xml
<FIXML>
	<Order ID="Cli1" Acct="TradersRUs" Side="1" Typ="2" Px="100.12" TmInForce="1">
		<Hdr SID="accept-comp" TID="init-comp" SSub="user123" TSub="INC"/>
		<Instrmt Sym="IBM" ID="459200101" Src="4"/>
		<OrdQty Qty="10000"/>
	</Order>
</FIXML>
```

the server receives this message and sends back an execution report :-

```typescript
  protected onApplicationMsg (msgType: string, view: MsgView): void {
    // dispatch messages
    this.logger.info(view.toJson())
    switch (msgType) {
      case 'Order': {
        const order: INewOrderSingle = view.toObject()
        this.logger.info(`received order id ${order.ClOrdID}`)
        const fill: IExecutionReport = this.factory.fillOrder(order)
        this.send('ExecutionReport', fill)
      }
    }
  }

   public fillOrder (order: INewOrderSingle): IExecutionReport {
    const id: number = this.execId++
    return {
      ClOrdID: order.ClOrdID,
      OrdType: order.OrdType,
      TransactTime: new Date(),
      AvgPx: order.Price,
      LeavesQty: 0,
      LastPx: order.Price,
      ExecType: ExecType.OrderStatus,
      OrdStatus: OrdStatus.Filled,
      ExecID: `exec${id}`,
      Side: order.Side,
      Price: order.Price,
      OrderQtyData: {
        OrderQty: order.OrderQtyData.OrderQty
      } as IOrderQtyData,
      Instrument: {
        Symbol: order.Instrument.Symbol,
        SecurityID: order.Instrument.SecurityID,
        SecurityIDSource: SecurityIDSource.IsinNumber
      } as IInstrument
    } as IExecutionReport
  }
```

the fixml is sent back to the client :-

```xml
<FIXML>
	<ExecRpt ID="Cli1" ExecID="exec1" ExecTyp="I" Stat="2" Side="1" Typ="2" Px="100.12" LastPx="100.12" LeavesQty="0" AvgPx="100.12" TxnTm="2018-10-07T12:16:12.584">
		<Hdr SID="accept-comp" TID="init-comp" TSub="fix"/>
		<Instrmt Sym="IBM" ID="459200101" Src="4"/>
		<OrdQty Qty="10000"/>
	</ExecRpt>
</FIXML>
```

## performance on Windows Intel Core I7-4770 @ 3.5 GHz

These messages have been randomly generated with command line tool. They are syntactically valid.

### data/examples/FIX.4.4/repo/execution-report/fix.txt

```shell
npm run repo44-bench-er
```

```shell
[8]: repeats = 250000, fields = 58, length = 604 chars, elapsed ms 3658, 14.632 micros per msg
```

### data/examples/FIX.4.4/repo/security-definition/fix.txt

```shell
npm run repo44-bench-sd
```

```shell
[d]: repeats = 150000, fields = 223, length = 2233 chars, elapsed ms 7962, 53.080000000000005 micros per msg
```

### data/examples/FIX.4.4/repo/trade-capture/fix.txt

```shell
npm run repo44-bench-tc
```

```shell
[AE]: repeats = 30000, fields = 613, length = 5818 chars, elapsed ms 5206, 173.53333333333333 micros per msg
```

## Log parsing

the command line tool jsfix can be used to parse any fix log providing an appropriate dictionary is provided.

## parsing fields

```shell
npm run cmd -- --dict=repo44 --fix=data/examples/FIX.4.4/jsfix.test_client.txt --delimiter="|" --type=AD --tokens
```

```shell
[0] 8 (BeginString) = FIX4.4, [1] 9 (BodyLength) = 0000135
[2] 35 (MsgType) = AD[TradeCaptureReportRequest], [3] 49 (SenderCompID) = init-comp
[4] 56 (TargetCompID) = accept-comp, [5] 34 (MsgSeqNum) = 2
[6] 57 (TargetSubID) = fix, [7] 52 (SendingTime) = 20180923-16:07:04.763
[8] 568 (TradeRequestID) = all-trades, [9] 569 (TradeRequestType) = 0[AllTrades]
[10] 263 (SubscriptionRequestType) = 1[SnapshotAndUpdates], [11] 580 (NoDates) = 1
[12] 75 (TradeDate) = 20180923, [13] 10 (CheckSum) = 250
```

## stats on entire file

```shell
npm run cmd -- --dict=repo44 --fix=data/examples/FIX.4.4/jsfix.test_client.txt --delimiter="|" --stats
```

```json
messages 13 elapsed ms 8
{
    "0": 1,
    "5": 2,
    "A": 2,
    "AD": 1,
    "AQ": 2,
    "AE": 5
}
```

## benchmark parsing repeated reads of file

```cmd
npm run cmd -- --dict=repo44 --fix=data/examples/FIX.4.4/jsfix.test_client.txt --delimiter="|" --stats --repeats=20
```

```json
messages 13 elapsed ms 0
{
    "0": 1,
    "5": 2,
    "A": 2,
    "AD": 1,
    "AQ": 2,
    "AE": 5
}
```

## parse message type in a file

```cmd
npm run cmd -- --dict=repo44 --fix=data/examples/FIX.4.4/jsfix.test_client.txt --delimiter="|" --type=AD --objects
```

```json
{
    "StandardHeader": {
        "BeginString": "FIX4.4",
        "BodyLength": 135,
        "MsgType": "AD",
        "SenderCompID": "init-comp",
        "TargetCompID": "accept-comp",
        "MsgSeqNum": 2,
        "TargetSubID": "fix",
        "SendingTime": "2018-09-23T16:07:04.763Z"
    },
    "TradeRequestID": "all-trades",
    "TradeRequestType": 0,
    "SubscriptionRequestType": "1",
    "TrdCapDtGrp": [
        {
            "TradeDate": "2018-09-22T23:00:00.000Z"
        }
    ],
    "StandardTrailer": {
        "CheckSum": "250"
    }
}
```

as above where --type=AE --objects

```json
{
    "StandardHeader": {
        "BeginString": "FIX4.4",
        "BodyLength": 213,
        "MsgType": "AE",
        "SenderCompID": "accept-comp",
        "TargetCompID": "init-comp",
        "MsgSeqNum": 4,
        "TargetSubID": "fix",
        "SendingTime": "2018-09-23T16:07:04.986Z"
    },
    "TradeReportID": "100001",
    "TradeReportTransType": 0,
    "TradeReportType": 0,
    "TrdType": 0,
    "ExecID": "600001",
    "OrdStatus": "2",
    "PreviouslyReported": false,
    "Instrument": {
        "Symbol": "Gold",
        "SecurityID": "Gold.INC"
    },
    "LastQty": 107,
    "LastPx": 45.38,
    "TradeDate": "2018-09-22T23:00:00.000Z",
    "TransactTime": "2018-09-23T16:07:04.776Z",
    "StandardTrailer": {
        "CheckSum": "54"
    }
}
```

## show all structures within a message

```shell
npm run cmd -- --dict=repo44 --fix=data/examples/FIX.4.4/jsfix.test_client.txt --delimiter="|" --type=AD --structures
```

```json
[
    {
        "name": "StandardHeader",
        "depth": 2,
        "startTag": 8,
        "startPosition": 0,
        "endTag": 52,
        "endPosition": 7,
        "delimiterTag": 0,
        "delimiterPositions": []
    },
    {
        "name": "TrdCapDtGrp",
        "depth": 1,
        "startTag": 580,
        "startPosition": 11,
        "endTag": 75,
        "endPosition": 12,
        "delimiterTag": 75,
        "delimiterPositions": [
            12
        ]
    },
    {
        "name": "StandardTrailer",
        "depth": 1,
        "startTag": 10,
        "startPosition": 13,
        "endTag": 10,
        "endPosition": 13,
        "delimiterTag": 0,
        "delimiterPositions": []
    },
    {
        "name": "TradeCaptureReportRequest",
        "depth": 1,
        "startTag": 8,
        "startPosition": 0,
        "endTag": 10,
        "endPosition": 13,
        "delimiterTag": 0,
        "delimiterPositions": []
    },
    {
        "name": "StandardTrailer",
        "depth": 0,
        "startTag": 10,
        "startPosition": 14,
        "endTag": 10,
        "endPosition": 13,
        "delimiterTag": 0,
        "delimiterPositions": []
    }
]
```

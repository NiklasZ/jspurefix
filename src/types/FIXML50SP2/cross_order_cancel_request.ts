import { IStandardHeader } from './set/standard_header'
import { IRootParties } from './set/root_parties'
import { ISideCrossOrdCxlGrp } from './set/side_cross_ord_cxl_grp'
import { IInstrument } from './set/instrument'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'

/*
***********************************************************
* CrossOrderCancelRequest can be found in Volume 4 of the *
*                                                         *
* specification                                           *
***********************************************************
*/
export interface ICrossOrderCancelRequest {
  OrderID?: string// 37
  OrderRequestID?: number// 2422
  CrossID: string// 548
  OrigCrossID: string// 551
  HostCrossID?: string// 961
  CrossType: number// 549
  CrossPrioritization: number// 550
  MarketSegmentID?: string// 1300
  TransactTime: Date// 60
  StandardHeader?: IStandardHeader
  RootParties?: IRootParties[]
  SideCrossOrdCxlGrp?: ISideCrossOrdCxlGrp[]
  Instrument?: IInstrument
  UndInstrmtGrp?: IUndInstrmtGrp[]
  InstrmtLegGrp?: IInstrmtLegGrp[]
}

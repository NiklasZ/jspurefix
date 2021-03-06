import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { ITrdSessLstGrp } from './set/trd_sess_lst_grp'

/*
**************************************************************
* TradingSessionListUpdateReport can be found in Volume 3 of *
* the                                                        *
*                                                            *
* specification                                              *
**************************************************************
*/
export interface ITradingSessionListUpdateReport {
  TradSesReqID?: string// 335
  StandardHeader?: IStandardHeader
  ApplicationSequenceControl?: IApplicationSequenceControl
  TrdSessLstGrp?: ITrdSessLstGrp[]
}

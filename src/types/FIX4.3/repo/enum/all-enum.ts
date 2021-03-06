/*
*************************************
* Broker's side of advertised trade *
*************************************
*/
export enum AdvSide {
  Buy = 'B',
  Sell = 'S',
  Cross = 'X',
  Trade = 'T'
}

/*
*****************************************************
* Identifies advertisement message transaction type *
*****************************************************
*/
export enum AdvTransType {
  New = 'N',
  Cancel = 'C',
  Replace = 'R'
}

/*
*******************
* Commission type *
*******************
*/
export enum CommType {
  PerUnit = '1',
  Percent = '2',
  Absolute = '3',
  PercentageWaivedCashDiscount = '4',
  PercentageWaivedEnhancedUnits = '5',
  PointsPerBondOrContract = '6'
}

/*
****************************************************************
* Instructions for order handling on exchange trading floor.   *
* If more than one instruction is applicable to an order, this *
* field can contain multiple instructions separated by space.  *
****************************************************************
*/
export enum ExecInst {
  StayOnOfferSide = '0',
  NotHeld = '1',
  Work = '2',
  GoAlong = '3',
  OverTheDay = '4',
  Held = '5',
  ParticipateDoNotInitiate = '6',
  StrictScale = '7',
  TryToScale = '8',
  StayOnBidSide = '9',
  TryToStop = 'Y',
  MidPricePeg = 'M',
  MarketPeg = 'P',
  CancelOnSystemFailure = 'Q',
  PrimaryPeg = 'R',
  Suspend = 'S',
  CustomerDisplayInstruction = 'U',
  Netting = 'V',
  PegToVwap = 'W',
  TradeAlong = 'X',
  PercentOfVolume = 'D',
  NoCross = 'A',
  OpeningPeg = 'O',
  CallFirst = 'C',
  NonNegotiable = 'N',
  DoNotIncrease = 'E',
  DoNotReduce = 'F',
  AllOrNone = 'G',
  ReinstateOnSystemFailure = 'H',
  InstitutionsOnly = 'I',
  ReinstateOnTradingHalt = 'J',
  CancelOnTradingHalt = 'K',
  LastPeg = 'L',
  OkToCross = 'B'
}

/*
*******************************
* Identifies transaction type *
*******************************
*/
export enum ExecTransType {
  New = '0',
  Cancel = '1',
  Correct = '2',
  Status = '3'
}

/*
***********************************************************
* Instructions for order handling on Broker trading floor *
***********************************************************
*/
export enum HandlInst {
  AutomatedExecutionNoIntervention = '1',
  AutomatedExecutionInterventionOk = '2',
  ManualOrder = '3'
}

/*
**********************************************
* Identifies class of alternative SecurityID *
**********************************************
*/
export enum IDSource {
  Cusip = '1',
  Sedol = '2',
  Quik = '3',
  IsinNumber = '4',
  RicCode = '5',
  IsoCurrencyCode = '6',
  IsoCountryCode = '7',
  ExchangeSymbol = '8',
  ConsolidatedTapeAssociation = '9',
  Sicovam = 'E',
  Belgian = 'F',
  Valoren = 'D',
  Dutch = 'C',
  Wertpapier = 'B',
  BloombergSymbol = 'A',
  Common = 'G'
}

/*
**********************************
* Relative quality of indication *
**********************************
*/
export enum IOIQltyInd {
  Medium = 'M',
  High = 'H',
  Low = 'L'
}

/*
*************************************************
* Number of shares in numeric or relative size. *
*************************************************
*/
export enum IOIShares {
  Large = 'L',
  Medium = 'M',
  Small = 'S'
}

/*
*******************************************
* Identifies IOI message transaction type *
*******************************************
*/
export enum IOITransType {
  Cancel = 'C',
  New = 'N',
  Replace = 'R'
}

/*
**************************************
* Broker capacity in order execution *
**************************************
*/
export enum LastCapacity {
  Agent = '1',
  CrossAsAgent = '2',
  CrossAsPrincipal = '3',
  Principal = '4'
}

/*
****************************************************************
* Defines message type. ALWAYS THIRD FIELD IN MESSAGE. (Always *
* unencrypted)                                                 *
* Note: A "U" as the first character in the MsgType field      *
* (i.e. U1, U2, etc) indicates that the message format is      *
* privately defined between the sender and receiver.           *
****************************************************************
*/
export enum MsgType {
  Heartbeat = '0',
  TestRequest = '1',
  ResendRequest = '2',
  Reject = '3',
  SequenceReset = '4',
  Logout = '5',
  Ioi = '6',
  Advertisement = '7',
  ExecutionReport = '8',
  OrderCancelReject = '9',
  QuoteStatusRequest = 'a',
  Logon = 'A',
  DerivativeSecurityList = 'AA',
  NewOrderMultileg = 'AB',
  MultilegOrderCancelReplace = 'AC',
  TradeCaptureReportRequest = 'AD',
  TradeCaptureReport = 'AE',
  OrderMassStatusRequest = 'AF',
  QuoteRequestReject = 'AG',
  RfqRequest = 'AH',
  QuoteStatusReport = 'AI',
  MassQuoteAcknowledgement = 'b',
  News = 'B',
  SecurityDefinitionRequest = 'c',
  Email = 'C',
  SecurityDefinition = 'd',
  NewOrderSingle = 'D',
  SecurityStatusRequest = 'e',
  NewOrderList = 'E',
  SecurityStatus = 'f',
  OrderCancelRequest = 'F',
  OrderCancelReplaceRequest = 'G',
  TradingSessionStatusRequest = 'g',
  TradingSessionStatus = 'h',
  OrderStatusRequest = 'H',
  MassQuote = 'i',
  BusinessMessageReject = 'j',
  AllocationInstruction = 'J',
  ListCancelRequest = 'K',
  BidRequest = 'k',
  BidResponse = 'l',
  ListExecute = 'L',
  ListStrikePrice = 'm',
  ListStatusRequest = 'M',
  ListStatus = 'N',
  XmlNonFix = 'n',
  RegistrationInstructions = 'o',
  AllocationInstructionAck = 'P',
  RegistrationInstructionsResponse = 'p',
  OrderMassCancelRequest = 'q',
  DontKnowTrade = 'Q',
  OrderMassCancelReport = 'r',
  QuoteRequest = 'R',
  NewOrderCross = 's',
  Quote = 'S',
  CrossOrderCancelReplaceRequest = 't',
  SettlementInstructions = 'T',
  CrossOrderCancelRequest = 'u',
  SecurityTypeRequest = 'v',
  MarketDataRequest = 'V',
  SecurityTypes = 'w',
  MarketDataSnapshotFullRefresh = 'W',
  SecurityListRequest = 'x',
  MarketDataIncrementalRefresh = 'X',
  SecurityList = 'y',
  MarketDataRequestReject = 'Y',
  DerivativeSecurityListRequest = 'z',
  QuoteCancel = 'Z'
}

/*
***************************************
* Identifies current status of order. *
***************************************
*/
export enum OrdStatus {
  New = '0',
  PartiallyFilled = '1',
  Filled = '2',
  DoneForDay = '3',
  Canceled = '4',
  Replaced = '5',
  PendingCancel = '6',
  Stopped = '7',
  Rejected = '8',
  Suspended = '9',
  PendingNew = 'A',
  Calculated = 'B',
  Expired = 'C',
  AcceptedForBidding = 'D',
  PendingReplace = 'E'
}

/*
***************
* Order type. *
***************
*/
export enum OrdType {
  Market = '1',
  Limit = '2',
  Stop = '3',
  StopLimit = '4',
  MarketOnClose = '5',
  WithOrWithout = '6',
  LimitOrBetter = '7',
  LimitWithOrWithout = '8',
  OnBasis = '9',
  PreviouslyQuoted = 'D',
  OnClose = 'A',
  ForexMarket = 'C',
  ForexLimit = 'F',
  PreviouslyIndicated = 'E',
  ForexSwap = 'G',
  Funari = 'I',
  MarketIfTouched = 'J',
  MarketWithLeftOverAsLimit = 'K',
  PreviousFundValuationPoint = 'L',
  NextFundValuationPoint = 'M',
  Pegged = 'P',
  LimitOnClose = 'B',
  ForexPreviouslyQuoted = 'H'
}

/*
**********************************************************
* Indicates possible retransmission of message with this *
* sequence number                                        *
**********************************************************
*/
export enum PossDupFlag {
  OriginalTransmission = 'N',
  PossibleDuplicate = 'Y'
}

/*
****************************************************************
* Note that the name of this field is changing to              *
* "OrderCapacity" as Rule80A is a very US market-specific      *
* term. Other world markets need to convey similar             *
* information, however, often a subset of the US values. . See *
* the "Rule80A (aka OrderCapacity) Usage by Market" appendix   *
* for market-specific usage of this field.                     *
****************************************************************
*/
export enum Rule80A {
  AgentForOtherMember = 'N',
  ShortExemptTransactionAType = 'B',
  ProgramOrderMember = 'D',
  ShortExemptTransactionForPrincipal = 'E',
  ShortExemptTransactionWType = 'F',
  ShortExemptTransactionIType = 'H',
  IndividualInvestor = 'I',
  ProprietaryAlgo = 'J',
  AgencyAlgo = 'K',
  ProgramOrderOtherMember = 'M',
  AgencySingleOrder = 'A',
  ProprietaryTransactionAffiliated = 'O',
  Principal = 'P',
  TransactionNonMember = 'R',
  SpecialistTrades = 'S',
  TransactionUnaffiliatedMember = 'T',
  AgencyIndexArb = 'U',
  AllOtherOrdersAsAgentForOtherMember = 'W',
  ShortExemptTransactionMemberNotAffliated = 'X',
  AgencyNonAlgo = 'Y',
  ShortExemptTransactionNonMember = 'Z',
  ShortExemptTransactionMemberAffliated = 'L',
  ProprietaryNonAlgo = 'C'
}

/*
*****************
* Side of order *
*****************
*/
export enum Side {
  Buy = '1',
  Sell = '2',
  BuyMinus = '3',
  SellPlus = '4',
  SellShort = '5',
  SellShortExempt = '6',
  Undisclosed = '7',
  Cross = '8',
  CrossShort = '9',
  AsDefined = 'B',
  Opposite = 'C',
  CrossShortExempt = 'A'
}

/*
**************************************************************
* Specifies how long the order remains in effect. Absence of *
* this field is interpreted as DAY.                          *
**************************************************************
*/
export enum TimeInForce {
  Day = '0',
  GoodTillCancel = '1',
  AtTheOpening = '2',
  ImmediateOrCancel = '3',
  FillOrKill = '4',
  GoodTillCrossing = '5',
  GoodTillDate = '6',
  AtTheClose = '7'
}

/*
****************
* Urgency flag *
****************
*/
export enum Urgency {
  Normal = '0',
  Flash = '1',
  Background = '2'
}

/*
***************************************************************
* Indicates order settlement period. Absence of this field is *
* interpreted as Regular. Regular is defined as the default   *
* settlement period for the particular security on the        *
* exchange of execution.                                      *
***************************************************************
*/
export enum SettlmntTyp {
  Regular = '0',
  Cash = '1',
  NextDay = '2',
  TPlus2 = '3',
  TPlus3 = '4',
  TPlus4 = '5',
  Future = '6',
  WhenAndIfIssued = '7',
  SellersOption = '8',
  TPlus5 = '9',
  T1 = 'A'
}

/*
******************************************
* Identifies allocation transaction type *
******************************************
*/
export enum AllocTransType {
  New = '0',
  Replace = '1',
  Cancel = '2',
  Preliminary = '3',
  Calculated = '4',
  CalculatedWithoutPreliminary = '5'
}

/*
***************************************************************
* Indicates whether the resulting position after a trade      *
* should be an opening position or closing position. Used for *
* omnibus accounting - where accounts are held on a gross     *
* basis instead of being netted together.                     *
***************************************************************
*/
export enum OpenClose {
  Fifo = 'F',
  Rolled = 'R',
  Close = 'C',
  Open = 'O'
}

/*
****************************************************************
* Processing code for sub-account. Absence of this field in    *
* AllocAccount / AllocPrice/AllocShares / ProcessCode instance *
* indicates regular trade.                                     *
****************************************************************
*/
export enum ProcessCode {
  Regular = '0',
  SoftDollar = '1',
  StepIn = '2',
  StepOut = '3',
  SoftDollarStepIn = '4',
  SoftDollarStepOut = '5',
  PlanSponsor = '6'
}

/*
************************************
* Identifies status of allocation. *
************************************
*/
export enum AllocStatus {
  Accepted = 0,
  BlockLevelReject = 1,
  AccountLevelReject = 2,
  Received = 3
}

/*
************************************
* Identifies reason for rejection. *
************************************
*/
export enum AllocRejCode {
  UnknownAccount = 0,
  IncorrectQuantity = 1,
  IncorrectAveragegPrice = 2,
  UnknownExecutingBrokerMnemonic = 3,
  CommissionDifference = 4,
  UnknownOrderId = 5,
  UnknownListId = 6,
  OtherSeeText = 7
}

/*
***********************
* Email message type. *
***********************
*/
export enum EmailType {
  New = '0',
  Reply = '1',
  AdminReply = '2'
}

/*
****************************************************************
* Indicates that message may contain information that has been *
* sent under another sequence number.                          *
****************************************************************
*/
export enum PossResend {
  OriginalTransmission = 'N',
  PossibleResend = 'Y'
}

/*
*************************
* Method of encryption. *
*************************
*/
export enum EncryptMethod {
  None = 0,
  Pkcs = 1,
  Des = 2,
  Pkcsdes = 3,
  Pgpdes = 4,
  Pgpdesmd5 = 5,
  Pem = 6
}

/*
*************************************************
* Code to identify reason for cancel rejection. *
*************************************************
*/
export enum CxlRejReason {
  TooLateToCancel = 0,
  UnknownOrder = 1,
  BrokerCredit = 2,
  OrderAlreadyInPendingStatus = 3,
  UnableToProcessOrderMassCancelRequest = 4,
  OrigOrdModTime = 5,
  DuplicateClOrdId = 6
}

/*
************************************************
* Code to identify reason for order rejection. *
************************************************
*/
export enum OrdRejReason {
  BrokerCredit = 0,
  UnknownSymbol = 1,
  ExchangeClosed = 2,
  OrderExceedsLimit = 3,
  TooLateToEnter = 4,
  UnknownOrder = 5,
  DuplicateOrder = 6,
  DuplicateOfAVerballyCommunicatedOrder = 7,
  StaleOrder = 8,
  TradeAlongRequired = 9,
  InvalidInvestorId = 10,
  UnsupportedOrderCharacteristic = 11,
  SurveillenceOption = 12
}

/*
****************************
* Code to qualify IOI use. *
****************************
*/
export enum IOIQualifier {
  AtTheOpen = 'O',
  CrossingOpportunity = 'X',
  Indication = 'W',
  Versus = 'V',
  ThroughTheDay = 'T',
  PortfolioShown = 'S',
  ReadyToTrade = 'R',
  AllOrNone = 'A',
  TakingAPosition = 'P',
  MoreBehind = 'M',
  Limit = 'L',
  InTouchWith = 'I',
  Vwap = 'D',
  AtTheClose = 'C',
  MarketOnClose = 'B',
  AtTheMarket = 'Q',
  AtTheMidpoint = 'Y',
  PreOpen = 'Z'
}

/*
******************************************************
* Identifies party of trade responsible for exchange *
* reporting.                                         *
******************************************************
*/
export enum ReportToExch {
  ReceiverReports = 'Y',
  SenderReports = 'N'
}

/*
**********************************************************
* Indicates whether the broker is to locate the stock in *
* conjunction with a short sell order.                   *
**********************************************************
*/
export enum LocateReqd {
  Yes = 'Y',
  No = 'N'
}

/*
*********************************************************
* Indicates request for forex accommodation trade to be *
* executed along with security transaction.             *
*********************************************************
*/
export enum ForexReq {
  ExecuteForexAfterSecurityTrade = 'Y',
  DoNotExecuteForexAfterSecurityTrade = 'N'
}

/*
************************************************************
* Indicates that the Sequence Reset message is replacing   *
* administrative or application messages which will not be *
* resent.                                                  *
************************************************************
*/
export enum GapFillFlag {
  GapFillMessage = 'Y',
  SequenceReset = 'N'
}

/*
***********************************
* Reason for execution rejection. *
***********************************
*/
export enum DKReason {
  WrongSide = 'B',
  QuantityExceedsOrder = 'C',
  NoMatchingOrder = 'D',
  PriceExceedsLimit = 'E',
  Other = 'Z',
  UnknownSymbol = 'A'
}

/*
****************************************************************
* Indicates that IOI is the result of an existing agency order *
* or a facilitation position resulting from an agency order,   *
* not from principal trading or order solicitation activity.   *
****************************************************************
*/
export enum IOINaturalFlag {
  Natural = 'Y',
  NotNatural = 'N'
}

/*
****************************************
* Indicates type of miscellaneous fee. *
****************************************
*/
export enum MiscFeeType {
  Regulatory = '1',
  Tax = '2',
  LocalCommission = '3',
  ExchangeFees = '4',
  Stamp = '5',
  Levy = '6',
  Other = '7',
  Markup = '8',
  ConsumptionTax = '9'
}

/*
***********************************************************
* Indicates that the both sides of the FIX session should *
* reset sequence numbers.                                 *
***********************************************************
*/
export enum ResetSeqNumFlag {
  Yes = 'Y',
  No = 'N'
}

/*
*************************************************************
* Describes the specific ExecutionRpt (i.e. Pending Cancel) *
* while OrdStatus will always identify the current order    *
* status (i.e. Partially Filled)                            *
*************************************************************
*/
export enum ExecType {
  New = '0',
  PartialFill = '1',
  Fill = '2',
  DoneForDay = '3',
  Canceled = '4',
  Replaced = '5',
  PendingCancel = '6',
  Stopped = '7',
  Rejected = '8',
  Suspended = '9',
  PendingNew = 'A',
  Calculated = 'B',
  Expired = 'C',
  Restated = 'D',
  PendingReplace = 'E',
  Trade = 'F',
  TradeCorrect = 'G',
  TradeCancel = 'H',
  OrderStatus = 'I'
}

/*
******************************************************
* Specifies whether or not SettlCurrFxRate should be *
* multiplied or divided.                             *
******************************************************
*/
export enum SettlCurrFxRateCalc {
  Divide = 'D',
  Multiply = 'M'
}

/*
***************************************************
* Indicates mode used for Settlement Instructions *
***************************************************
*/
export enum SettlInstMode {
  Default = '0',
  StandingInstructionsProvided = '1',
  SpecificAllocationAccountOverriding = '2',
  SpecificAllocationAccountStanding = '3',
  SpecificOrderForASingleAccount = '4'
}

/*
****************************************************
* Settlement Instructions message transaction type *
****************************************************
*/
export enum SettlInstTransType {
  New = 'N',
  Replace = 'R',
  Cancel = 'C'
}

/*
***********************************************
* Indicates source of Settlement Instructions *
***********************************************
*/
export enum SettlInstSource {
  BrokerCredit = '1',
  Institution = '2',
  Investor = '3'
}

/*
***********************************************************
* Identifies Settlement Depository or Country Code (ISITC *
* spec)                                                   *
***********************************************************
*/
export enum SettlLocation {
  FederalBookEntry = 'FED',
  LocalMarketSettleLocation = 'ISO Country Code',
  Physical = 'PNY',
  EuroClear = 'EUR',
  DepositoryTrustCompany = 'DTC',
  Cedel = 'CED',
  ParticipantTrustCompany = 'PTC'
}

/*
*******************************************
* Indicates type of security (ISITC spec) *
*******************************************
*/
export enum SecurityType {
  CommercialPaper = 'CP',
  VariableRateDemandNote = 'VRDN',
  PlazosFijos = 'PZFJ',
  PromissoryNote = 'PN',
  Overnight = 'ONITE',
  MediumTermNotes = 'MTN',
  TaxExemptCommercialPaper = 'TECP',
  Amended = 'AMENDED',
  BridgeLoan = 'BRIDGE',
  LetterOfCredit = 'LOFC',
  SwingLineFacility = 'SWING',
  DebtorInPossession = 'DINP',
  Defaulted = 'DEFLTED',
  Withdrawn = 'WITHDRN',
  LiquidityNote = 'LQN',
  Matured = 'MATURED',
  DepositNotes = 'DN',
  Retired = 'RETIRED',
  BankersAcceptance = 'BA',
  BankNotes = 'BN',
  BillOfExchanges = 'BOX',
  CertificateOfDeposit = 'CD',
  CallLoans = 'CL',
  Replaced = 'REPLACD',
  MandatoryTender = 'MT',
  Revolver = 'RVLVTRM',
  MortgagePrivatePlacement = 'MPP',
  ShortTermLoanNote = 'STN',
  MiscellaneousPassThrough = 'MPT',
  ToBeAnnounced = 'TBA',
  OtherAnticipationNotes = 'AN',
  MortgageInterestOnly = 'MIO',
  CertificateOfParticipation = 'COFP',
  MortgageBackedSecurities = 'MBS',
  RevenueBonds = 'REV',
  SpecialAssessment = 'SPCLA',
  SpecialObligation = 'SPCLO',
  SpecialTax = 'SPCLT',
  TaxAnticipationNote = 'TAN',
  TaxAllocation = 'TAXA',
  CertificateOfObligation = 'COFO',
  TimeDeposit = 'TD',
  GeneralObligationBonds = 'GO',
  Wildcard = '?',
  Warrant = 'WAR',
  MutualFund = 'MF',
  MultilegInstrument = 'MLEG',
  TaxRevenueAnticipationNote = 'TRAN',
  MortgagePrincipalOnly = 'MPO',
  RepurchaseAgreement = 'RP',
  NoSecurityType = 'NONE',
  ExtendedCommNote = 'XCN',
  AgencyPools = 'POOL',
  AssetBackedSecurities = 'ABS',
  Corp = 'CMBS',
  CollateralizedMortgageObligation = 'CMO',
  IoetteMortgage = 'IET',
  ReverseRepurchaseAgreement = 'RVRP',
  ForeignExchangeContract = 'FOR',
  RevenueAnticipationNote = 'RAN',
  RevolverLoan = 'RVLV',
  FederalAgencyCoupon = 'FAC',
  FederalAgencyDiscountNote = 'FADN',
  PrivateExportFunding = 'PEF',
  CorporateBond = 'CORP',
  CorporatePrivatePlacement = 'CPP',
  ConvertibleBond = 'CB',
  DualCurrency = 'DUAL',
  IndexedLinked = 'XLINKD',
  YankeeCorporateBond = 'YANK',
  CommonStock = 'CS',
  PreferredStock = 'PS',
  BradyBond = 'BRADY',
  UsTreasuryBond = 'TBOND',
  InterestStripFromAnyBondOrNote = 'TINT',
  TreasuryInflationProtectedSecurities = 'TIPS',
  PrincipalStripOfACallableBondOrNote = 'TCAL',
  PrincipalStripFromANonCallableBondOrNote = 'TPRN',
  UsTreasuryNoteOld = 'UST',
  UsTreasuryBillOld = 'USTB',
  TermLoan = 'TERM',
  StructuredNotes = 'STRUCT'
}

/*
*****************************************************
* Identifies the Standing Instruction database used *
*****************************************************
*/
export enum StandInstDbType {
  Other = 0,
  Dtcsid = 1,
  ThomsonAlert = 2,
  AGlobalCustodian = 3
}

/*
*********************************
* Identifies type of settlement *
*********************************
*/
export enum SettlDeliveryType {
  Versus = 0,
  Free = 1
}

/*
**************************************************************
* Identifies the type of Allocation linkage when AllocLinkID *
* is used.                                                   *
**************************************************************
*/
export enum AllocLinkType {
  FxNetting = 0,
  FxSwap = 1
}

/*
*****************************************************
* Indicates whether an Option is for a put or call. *
*****************************************************
*/
export enum PutOrCall {
  Put = 0,
  Call = 1
}

/*
********************
* Used for options *
********************
*/
export enum CoveredOrUncovered {
  Covered = 0,
  Uncovered = 1
}

/*
****************************************************************
* Used for options when delivering the order to an execution   *
* system/exchange to specify if the order is for a customer or *
* the firm placing the order itself.                           *
****************************************************************
*/
export enum CustomerOrFirm {
  Customer = 0,
  Firm = 1
}

/*
**************************************************************
* Indicates whether or not details should be communicated to *
* BrokerOfCredit (i.e. step-in broker).                      *
**************************************************************
*/
export enum NotifyBrokerOfCredit {
  DetailsShouldNotBeCommunicated = 'N',
  DetailsShouldBeCommunicated = 'Y'
}

/*
***************************************************************
* Indicates how the receiver (i.e. third party) of Allocation *
* message should handle/process the account details.          *
***************************************************************
*/
export enum AllocHandlInst {
  Match = 1,
  Forward = 2,
  ForwardAndMatch = 3
}

/*
**********************************************
* Indicates the type of RoutingID specified. *
**********************************************
*/
export enum RoutingType {
  TargetFirm = 1,
  TargetList = 2,
  BlockFirm = 3,
  BlockList = 4
}

/*
************************************************************
* For Fixed Income. Identifies the benchmark (e.g. used in *
* conjunction with the SpreadToBenchmark field).           *
************************************************************
*/
export enum Benchmark {
  Curve = '1',
  FiveYr = '2',
  Old5 = '3',
  TenYr = '4',
  Old10 = '5',
  ThirtyYr = '6',
  Old30 = '7',
  ThreeMolibor = '8',
  SixMolibor = '9'
}

/*
*****************************
* Subscription Request Type *
*****************************
*/
export enum SubscriptionRequestType {
  Snapshot = '0',
  SnapshotAndUpdates = '1',
  DisablePreviousSnapshot = '2'
}

/*
*********************************************
* Specifies the type of Market Data update. *
*********************************************
*/
export enum MDUpdateType {
  FullRefresh = 0,
  IncrementalRefresh = 1
}

/*
***************************************************************
* Specifies whether or not book entries should be aggregated. *
***************************************************************
*/
export enum AggregatedBook {
  BookEntriesToBeAggregated = 'Y',
  BookEntriesShouldNotBeAggregated = 'N'
}

/*
***************************
* Type Market Data entry. *
***************************
*/
export enum MDEntryType {
  Bid = '0',
  Offer = '1',
  Trade = '2',
  IndexValue = '3',
  OpeningPrice = '4',
  ClosingPrice = '5',
  SettlementPrice = '6',
  TradingSessionHighPrice = '7',
  TradingSessionLowPrice = '8',
  TradingSessionVwapPrice = '9',
  Imbalance = 'A'
}

/*
****************************
* Direction of the "tick". *
****************************
*/
export enum TickDirection {
  PlusTick = '0',
  ZeroPlusTick = '1',
  MinusTick = '2',
  ZeroMinusTick = '3'
}

/*
**********************************************************
* Space-delimited list of conditions describing a quote. *
**********************************************************
*/
export enum QuoteCondition {
  Locked = 'E',
  NonFirm = 'I',
  FastTrading = 'H',
  Crossed = 'F',
  ConsolidatedBest = 'D',
  ExchangeBest = 'C',
  Closed = 'B',
  Open = 'A',
  Depth = 'G'
}

/*
*********************************************************
* Space-delimited list of conditions describing a trade *
*********************************************************
*/
export enum TradeCondition {
  NextDayTrade = 'J',
  Opened = 'K',
  Seller = 'L',
  AveragePriceTrade = 'B',
  Sold = 'M',
  Rule155Trade = 'H',
  StoppedStock = 'N',
  ImbalanceMoreBuyers = 'P',
  ImbalanceMoreSellers = 'Q',
  OpeningPrice = 'R',
  SoldLast = 'I',
  Cash = 'A',
  CashTrade = 'C',
  Opening = 'E',
  IntradayTradeDetail = 'F',
  Rule127Trade = 'G',
  NextDay = 'D'
}

/*
**************************************
* Type of Market Data update action. *
**************************************
*/
export enum MDUpdateAction {
  New = '0',
  Change = '1',
  Delete = '2'
}

/*
******************************************************
* Reason for the rejection of a Market Data request. *
******************************************************
*/
export enum MDReqRejReason {
  UnknownSymbol = '0',
  DuplicateMdReqId = '1',
  InsufficientBandwidth = '2',
  InsufficientPermissions = '3',
  UnsupportedSubscriptionRequestType = '4',
  UnsupportedMarketDepth = '5',
  UnsupportedMdUpdateType = '6',
  UnsupportedAggregatedBook = '7',
  UnsupportedMdEntryType = '8',
  UnsupportedTradingSessionId = '9',
  UnsupportedMdImplicitDelete = 'C',
  UnsupportedOpenCloseSettleFlag = 'B',
  UnsupportedScope = 'A'
}

/*
************************
* Reason for deletion. *
************************
*/
export enum DeleteReason {
  Cancellation = '0',
  Error = '1'
}

/*
*********************************
* Flag that identifies a price. *
*********************************
*/
export enum OpenCloseSettleFlag {
  DailyOpen = '0',
  SessionOpen = '1',
  DeliverySettlementEntry = '2',
  ExpectedEntry = '3',
  EntryFromPreviousBusinessDay = '4'
}

/*
*****************************************
* Identifies a firms financial status. *
*****************************************
*/
export enum FinancialStatus {
  Bankrupt = '1',
  PendingDelisting = '2'
}

/*
********************************************
* Identifies the type of Corporate Action. *
********************************************
*/
export enum CorporateAction {
  ExDistribution = 'B',
  ExInterest = 'E',
  ExRights = 'C',
  ExDividend = 'A',
  New = 'D'
}

/*
*******************************************************
* Identifies the status of the quote acknowledgement. *
*******************************************************
*/
export enum QuoteAckStatus {
  Accepted = 0,
  CancelForSymbol = 1,
  CanceledForSecurityType = 2,
  CanceledForUnderlying = 3,
  CanceledAll = 4,
  Rejected = 5,
  RemovedFromMarket = 6,
  Expired = 7,
  Query = 8,
  QuoteNotFound = 9,
  Pending = 10
}

/*
****************************************
* Identifies the type of quote cancel. *
****************************************
*/
export enum QuoteCancelType {
  CancelForOneOrMoreSecurities = 1,
  CancelForSecurityType = 2,
  CancelForUnderlyingSecurity = 3,
  CancelAllQuotes = 4
}

/*
******************************
* Reason Quote was rejected: *
******************************
*/
export enum QuoteRejectReason {
  UnknownSymbol = 1,
  Exchange = 2,
  QuoteRequestExceedsLimit = 3,
  TooLateToEnter = 4,
  UnknownQuote = 5,
  DuplicateQuote = 6,
  InvalidBid = 7,
  InvalidPrice = 8,
  NotAuthorizedToQuoteSecurity = 9
}

/*
****************************************************************
* Level of Response requested from receiver of quote messages. *
****************************************************************
*/
export enum QuoteResponseLevel {
  NoAcknowledgement = 0,
  AcknowledgeOnlyNegativeOrErroneousQuotes = 1,
  AcknowledgeEachQuoteMessage = 2
}

/*
*******************************************************
* Indicates the type of Quote Request being generated *
*******************************************************
*/
export enum QuoteRequestType {
  Manual = 1,
  Automatic = 2
}

/*
****************************************
* Type of Security Definition Request. *
****************************************
*/
export enum SecurityRequestType {
  RequestSecurityIdentityAndSpecifications = 0,
  RequestSecurityIdentityForSpecifications = 1,
  RequestListSecurityTypes = 2,
  RequestListSecurities = 3
}

/*
*************************************************
* Type of Security Definition message response. *
*************************************************
*/
export enum SecurityResponseType {
  AcceptAsIs = 1,
  AcceptWithRevisions = 2,
  ListOfSecurityTypesReturnedPerRequest = 3,
  ListOfSecuritiesReturnedPerRequest = 4,
  RejectSecurityProposal = 5,
  CannotMatchSelectionCriteria = 6
}

/*
**************************************************************
* Indicates whether or not message is being sent as a result *
* of a subscription request or not.                          *
**************************************************************
*/
export enum UnsolicitedIndicator {
  MessageIsBeingSentUnsolicited = 'Y',
  MessageIsBeingSentAsAResultOfAPriorRequest = 'N'
}

/*
****************************************************************
* Identifies the trading status applicable to the transaction. *
****************************************************************
*/
export enum SecurityTradingStatus {
  OpeningDelay = 1,
  TradingHalt = 2,
  Resume = 3,
  NoOpen = 4,
  PriceIndication = 5,
  TradingRangeIndication = 6,
  MarketImbalanceBuy = 7,
  MarketImbalanceSell = 8,
  MarketOnCloseImbalanceBuy = 9,
  MarketOnCloseImbalanceSell = 10,
  NoMarketImbalance = 12,
  NoMarketOnCloseImbalance = 13,
  ItsPreOpening = 14,
  NewPriceIndication = 15,
  TradeDisseminationTime = 16,
  ReadyToTrade = 17,
  NotAvailableForTrading = 18,
  NotTradedOnThisMarket = 19,
  UnknownOrInvalid = 20,
  PreOpen = 21,
  OpeningRotation = 22,
  FastMarket = 23
}

/*
*************************************************************
* Denotes the reason for the Opening Delay or Trading Halt. *
*************************************************************
*/
export enum HaltReason {
  EquipmentChangeover = 'X',
  AdditionalInformation = 'M',
  OrderInflux = 'E',
  NewsPending = 'P',
  OrderImbalance = 'I',
  NewsDissemination = 'D'
}

/*
*************************************************************
* Indicates whether or not the halt was due to Common Stock *
* trading being halted.                                     *
*************************************************************
*/
export enum InViewOfCommon {
  HaltWasDueToCommonStockBeingHalted = 'Y',
  HaltWasNotRelatedToAHaltOfTheCommonStock = 'N'
}

/*
************************************************************
* Indicates whether or not the halt was due to the Related *
* Security being halted.                                   *
************************************************************
*/
export enum DueToRelated {
  RelatedToSecurityHalt = 'Y',
  NotRelatedToSecurityHalt = 'N'
}

/*
**************************************
* Identifies the type of adjustment. *
**************************************
*/
export enum Adjustment {
  Cancel = 1,
  Error = 2,
  Correction = 3
}

/*
*********************
* Method of trading *
*********************
*/
export enum TradSesMethod {
  Electronic = 1,
  OpenOutcry = 2,
  TwoParty = 3
}

/*
************************
* Trading Session Mode *
************************
*/
export enum TradSesMode {
  Testing = 1,
  Simulated = 2,
  Production = 3
}

/*
*********************************
* State of the trading session. *
*********************************
*/
export enum TradSesStatus {
  Unknown = 0,
  Halted = 1,
  Open = 2,
  Closed = 3,
  PreOpen = 4,
  PreClose = 5,
  RequestRejected = 6
}

/*
*****************************************************
* Type of message encoding (non-ASCII (non-English) *
* characters) used in a messages "Encoded" fields. *
*****************************************************
*/
export enum MessageEncoding {
  Utf8 = 'UTF-8',
  Iso2022Jp = 'ISO-2022-JP',
  Eucjp = 'EUC-JP',
  ShiftJis = 'Shift_JIS'
}

/*
***************************************************************
* Code to identify reason for a session-level Reject message. *
***************************************************************
*/
export enum SessionRejectReason {
  InvalidTagNumber = 0,
  RequiredTagMissing = 1,
  TagNotDefinedForThisMessageType = 2,
  UndefinedTag = 3,
  TagSpecifiedWithoutAValue = 4,
  ValueIsIncorrect = 5,
  IncorrectDataFormatForValue = 6,
  DecryptionProblem = 7,
  SignatureProblem = 8,
  CompIdProblem = 9,
  SendingTimeAccuracyProblem = 10,
  InvalidMsgType = 11,
  XmlValidationError = 12,
  TagAppearsMoreThanOnce = 13,
  TagSpecifiedOutOfRequiredOrder = 14,
  RepeatingGroupFieldsOutOfOrder = 15,
  IncorrectNumInGroupCountForRepeatingGroup = 16,
  Non = 17
}

/*
********************************************
* Identifies the Bid Request message type. *
********************************************
*/
export enum BidRequestTransType {
  New = 'N',
  Cancel = 'C'
}

/*
*****************************************************
* Indicates whether or not the order was solicited. *
*****************************************************
*/
export enum SolicitedFlag {
  WasNotSolicited = 'N',
  WasSolicited = 'Y'
}

/*
************************************************************
* Code to identify reason for an ExecutionRpt message sent *
* with ExecType=Restated or used when communicating an     *
* unsolicited cancel.                                      *
************************************************************
*/
export enum ExecRestatementReason {
  GtCorporateAction = 0,
  GtRenewal = 1,
  VerbalChange = 2,
  RepricingOfOrder = 3,
  BrokerOption = 4,
  PartialDeclineOfOrderQty = 5,
  CancelOnTradingHalt = 6,
  CancelOnSystemFailure = 7,
  Market = 8
}

/*
*********************************************************
* Code to identify reason for a Business Message Reject *
* message.                                              *
*********************************************************
*/
export enum BusinessRejectReason {
  Other = 0,
  UnknownId = 1,
  UnknownSecurity = 2,
  UnsupportedMessageType = 3,
  ApplicationNotAvailable = 4,
  ConditionallyRequiredFieldMissing = 5,
  NotAuthorized = 6,
  DeliverToFirmNotAvailableAtThisTime = 7
}

/*
********************************************
* Specifies the direction of the messsage. *
********************************************
*/
export enum MsgDirection {
  Send = 'S',
  Receive = 'R'
}

/*
***************************************************************
* Code to identify the price a DiscretionOffset is related to *
* and should be mathematically added to.                      *
***************************************************************
*/
export enum DiscretionInst {
  RelatedToDisplayedPrice = '0',
  RelatedToMarketPrice = '1',
  RelatedToPrimaryPrice = '2',
  RelatedToLocalPrimaryPrice = '3',
  RelatedToMidpointPrice = '4',
  RelatedToLastTradePrice = '5'
}

/*
*********************************************
* Code to identify the type of Bid Request. *
*********************************************
*/
export enum BidType {
  NonDisclosed = 1,
  Disclosed = 2,
  NoBiddingProcess = 3
}

/*
***********************************************
* Code to identify the type of BidDescriptor. *
***********************************************
*/
export enum BidDescriptorType {
  Sector = 1,
  Country = 2,
  Index = 3
}

/*
****************************************************************
* Code to identify which "SideValue" the value refers to.      *
* SideValue1 and SideValue2 are used as opposed to Buy or Sell *
* so that the basket can be quoted either way as Buy or Sell.  *
****************************************************************
*/
export enum SideValueInd {
  SideValue1 = 1,
  SideValue2 = 2
}

/*
*****************************************************
* Code to identify the type of liquidity indicator. *
*****************************************************
*/
export enum LiquidityIndType {
  FiveDayMovingAverage = 1,
  TwentyDayMovingAverage = 2,
  NormalMarketSize = 3,
  Other = 4
}

/*
******************************************************
* Indicates whether or not to exchange for phsyical. *
******************************************************
*/
export enum ExchangeForPhysical {
  False = 'N',
  True = 'Y'
}

/*
***************************************************************
* Code to identify the desired frequency of progress reports. *
***************************************************************
*/
export enum ProgRptReqs {
  BuySideRequests = 1,
  SellSideSends = 2,
  RealTimeExecutionReports = 3
}

/*
****************************************************************
* Code to represent whether value is net (inclusive of tax) or *
* gross.                                                       *
****************************************************************
*/
export enum IncTaxInd {
  Net = 1,
  Gross = 2
}

/*
****************************************
* Code to represent the type of trade. *
****************************************
*/
export enum TradeType {
  VwapGuarantee = 'G',
  Agency = 'A',
  GuaranteedClose = 'J',
  RiskTrade = 'R'
}

/*
*******************************************
* Code to represent the basis price type. *
*******************************************
*/
export enum BasisPxType {
  ClosingPriceAtMorningSession = '2',
  ClosingPrice = '3',
  CurrentPrice = '4',
  Sq = '5',
  VwapThroughADay = '6',
  VwapThroughAMorningSession = '7',
  VwapThroughAnAfternoonSession = '8',
  VwapThroughADayExcept = '9',
  Open = 'D',
  Others = 'Z',
  Strike = 'C',
  VwapThroughAnAfternoonSessionExcept = 'B',
  VwapThroughAMorningSessionExcept = 'A'
}

/*
*************************************
* Code to represent the price type. *
*************************************
*/
export enum PriceType {
  Percentage = 1,
  PerUnit = 2,
  FixedAmount = 3,
  Discount = 4,
  Premium = 5,
  Spread = 6,
  TedPrice = 7,
  TedYield = 8
}

/*
********************************************************
* Code to identify whether to book out executions on a *
* part-filled GT order on the day of execution or to   *
* accumulate.                                          *
********************************************************
*/
export enum GTBookingInst {
  BookOutAllTradesOnDayOfExecution = 0,
  AccumulateUntilFilledOrExpired = 1,
  AccumulateUntilVerballlyNotifiedOtherwise = 2
}

/*
*************************************
* Code to represent the price type. *
*************************************
*/
export enum ListStatusType {
  Ack = 1,
  Response = 2,
  Timed = 3,
  ExecStarted = 4,
  AllDone = 5,
  Alert = 6
}

/*
****************************************************************
* Code to represent whether value is net (inclusive of tax) or *
* gross.                                                       *
****************************************************************
*/
export enum NetGrossInd {
  Net = 1,
  Gross = 2
}

/*
*************************************************
* Code to represent the status of a list order. *
*************************************************
*/
export enum ListOrderStatus {
  InBiddingProcess = 1,
  ReceivedForExecution = 2,
  Executing = 3,
  Cancelling = 4,
  Alert = 5,
  AllDone = 6,
  Reject = 7
}

/*
****************************************
* Identifies the type of ListExecInst. *
****************************************
*/
export enum ListExecInstType {
  Immediate = '1',
  WaitForInstruction = '2',
  SellDriven = '3',
  BuyDrivenCashTopUp = '4',
  BuyDrivenCashWithdraw = '5'
}

/*
*************************************************************
* Identifies the type of request that a Cancel Reject is in *
* response to.                                              *
*************************************************************
*/
export enum CxlRejResponseTo {
  OrderCancelRequest = '1',
  OrderCancel = '2'
}

/*
**************************************************************
* Used to indicate what an Execution Report represents (e.g. *
* used with multi-leg securiteis, such as option strategies, *
* spreads, etc.).                                            *
**************************************************************
*/
export enum MultiLegReportingType {
  SingleSecurity = '1',
  IndividualLegOfAMultiLegSecurity = '2',
  MultiLegSecurity = '3'
}


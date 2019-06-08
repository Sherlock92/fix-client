const CATEGORIES = [
  {
    'CategoryID': 'Session',
    'FIXMLFileName': 'session',
    'NotReqXML': '1',
    'GenerateImplFile': '0',
    'ComponentType': 'Message',
    'SectionID': 'Session',
    'Volume': '2'
  },
  {
    'CategoryID': 'Indication',
    'FIXMLFileName': 'indications',
    'NotReqXML': '0',
    'GenerateImplFile': '1',
    'ComponentType': 'Message',
    'SectionID': 'PreTrade',
    'Volume': '3',
    'IncludeFile': 'components'
  },
  {
    'CategoryID': 'SingleGeneralOrderHandling',
    'FIXMLFileName': 'order',
    'NotReqXML': '0',
    'GenerateImplFile': '1',
    'ComponentType': 'Message',
    'SectionID': 'Trade',
    'Volume': '4',
    'IncludeFile': 'components'
  },
  {
    'CategoryID': 'EventCommunication',
    'FIXMLFileName': 'newsevents',
    'NotReqXML': '0',
    'GenerateImplFile': '1',
    'ComponentType': 'Message',
    'SectionID': 'PreTrade',
    'Volume': '3',
    'IncludeFile': 'components'
  },
  {
    'CategoryID': 'ProgramTrading',
    'FIXMLFileName': 'listorders',
    'NotReqXML': '0',
    'GenerateImplFile': '1',
    'ComponentType': 'Message',
    'SectionID': 'Trade',
    'Volume': '4',
    'IncludeFile': 'components'
  },
  {
    'CategoryID': 'OrderMassHandling',
    'FIXMLFileName': 'ordermasshandling',
    'NotReqXML': '0',
    'GenerateImplFile': '1',
    'ComponentType': 'Message',
    'SectionID': 'Trade',
    'Volume': '4',
    'IncludeFile': 'components'
  },
  {
    'CategoryID': 'Allocation',
    'FIXMLFileName': 'allocation',
    'NotReqXML': '0',
    'GenerateImplFile': '1',
    'ComponentType': 'Message',
    'SectionID': 'PostTrade',
    'Volume': '5',
    'IncludeFile': 'components'
  },
  {
    'CategoryID': 'QuotationNegotiation',
    'FIXMLFileName': 'quotation',
    'NotReqXML': '0',
    'GenerateImplFile': '1',
    'ComponentType': 'Message',
    'SectionID': 'PreTrade',
    'Volume': '3',
    'IncludeFile': 'components'
  },
  {
    'CategoryID': 'SettlementInstruction',
    'FIXMLFileName': 'settlement',
    'NotReqXML': '0',
    'GenerateImplFile': '1',
    'ComponentType': 'Message',
    'SectionID': 'PostTrade',
    'Volume': '5',
    'IncludeFile': 'components'
  },
  {
    'CategoryID': 'MarketData',
    'FIXMLFileName': 'marketdata',
    'NotReqXML': '0',
    'GenerateImplFile': '1',
    'ComponentType': 'Message',
    'SectionID': 'PreTrade',
    'Volume': '3',
    'IncludeFile': 'components'
  },
  {
    'CategoryID': 'Common',
    'FIXMLFileName': 'components',
    'NotReqXML': '0',
    'GenerateImplFile': '1',
    'ComponentType': 'Message',
    'Volume': '1',
    'IncludeFile': 'fields'
  },
  {
    'CategoryID': 'RegistrationInstruction',
    'FIXMLFileName': 'registration',
    'NotReqXML': '0',
    'GenerateImplFile': '1',
    'ComponentType': 'Message',
    'SectionID': 'PostTrade',
    'Volume': '3',
    'IncludeFile': 'components'
  },
  {
    'CategoryID': 'CrossOrders',
    'FIXMLFileName': 'crossorders',
    'NotReqXML': '0',
    'GenerateImplFile': '1',
    'ComponentType': 'Message',
    'SectionID': 'Trade',
    'Volume': '4',
    'IncludeFile': 'components'
  },
  {
    'CategoryID': 'MultilegOrders',
    'FIXMLFileName': 'multilegorders',
    'NotReqXML': '0',
    'GenerateImplFile': '1',
    'ComponentType': 'Message',
    'SectionID': 'Trade',
    'Volume': '4',
    'IncludeFile': 'components'
  },
  {
    'CategoryID': 'TradeCapture',
    'FIXMLFileName': 'tradecapture',
    'NotReqXML': '0',
    'GenerateImplFile': '1',
    'ComponentType': 'Message',
    'SectionID': 'PostTrade',
    'Volume': '5',
    'IncludeFile': 'components'
  },
  {
    'CategoryID': 'Confirmation',
    'FIXMLFileName': 'confirmation',
    'NotReqXML': '0',
    'GenerateImplFile': '1',
    'ComponentType': 'Message',
    'SectionID': 'PostTrade',
    'Volume': '5',
    'IncludeFile': 'components'
  },
  {
    'CategoryID': 'PositionMaintenance',
    'FIXMLFileName': 'positions',
    'NotReqXML': '0',
    'GenerateImplFile': '1',
    'ComponentType': 'Message',
    'SectionID': 'PostTrade',
    'Volume': '5',
    'IncludeFile': 'components'
  },
  {
    'CategoryID': 'CollateralManagement',
    'FIXMLFileName': 'collateral',
    'NotReqXML': '0',
    'GenerateImplFile': '1',
    'ComponentType': 'Message',
    'SectionID': 'PostTrade',
    'Volume': '5',
    'IncludeFile': 'components'
  },
  {
    'CategoryID': 'Application',
    'FIXMLFileName': 'application',
    'NotReqXML': '0',
    'GenerateImplFile': '1',
    'ComponentType': 'Message',
    'SectionID': 'Infrastructure',
    'Volume': '1',
    'IncludeFile': 'components'
  },
  {
    'CategoryID': 'BusinessReject',
    'FIXMLFileName': 'businessreject',
    'NotReqXML': '0',
    'GenerateImplFile': '1',
    'ComponentType': 'Message',
    'SectionID': 'Infrastructure',
    'Volume': '1',
    'IncludeFile': 'components'
  },
  {
    'CategoryID': 'Network',
    'FIXMLFileName': 'network',
    'NotReqXML': '0',
    'GenerateImplFile': '1',
    'ComponentType': 'Message',
    'SectionID': 'Infrastructure',
    'Volume': '1',
    'IncludeFile': 'components'
  },
  {
    'CategoryID': 'UserManagement',
    'FIXMLFileName': 'usermanagement',
    'NotReqXML': '0',
    'GenerateImplFile': '1',
    'ComponentType': 'Message',
    'SectionID': 'Infrastructure',
    'Volume': '1',
    'IncludeFile': 'components'
  },
  {
    'CategoryID': 'Fields',
    'FIXMLFileName': 'fields',
    'NotReqXML': '0',
    'GenerateImplFile': '0',
    'ComponentType': 'Field',
    'Volume': '6'
  },
  {
    'CategoryID': 'ImplFields',
    'FIXMLFileName': 'fields',
    'NotReqXML': '0',
    'GenerateImplFile': '0',
    'ComponentType': 'Field',
    'Volume': '6'
  },
  {
    'CategoryID': 'MarketStructureReferenceData',
    'FIXMLFileName': 'marketstructure',
    'NotReqXML': '0',
    'GenerateImplFile': '1',
    'ComponentType': 'Message',
    'SectionID': 'PreTrade',
    'Volume': '3',
    'IncludeFile': 'components',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '97'
  },
  {
    'CategoryID': 'SecuritiesReferenceData',
    'FIXMLFileName': 'securitiesreference',
    'NotReqXML': '0',
    'GenerateImplFile': '1',
    'ComponentType': 'Message',
    'SectionID': 'PreTrade',
    'Volume': '3',
    'IncludeFile': 'components',
    'Added': 'FIX.5.0SP1',
    'AddedEP': '97'
  }
];

module.exports = { CATEGORIES }
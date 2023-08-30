

export class dictionary {
    constructor(){
        this.security = new Security();
        this.ldap = new Ldap();
    }
    serializing: boolean
    reverseOriginalDictionary: ReverseOriginalDictionary
    sif: Sif
    channels: Channels
    security: Security
    journal: Journal
    stations: Stations
    roles: Roles
    customers: Customers
    enterprises: Enterprises
    customerApplications: CustomerApplications
    mail: Mail
    xml: Xml
    banks: Banks
    accounts: Accounts
    atm: Atm
    franchises: Franchises
    ldap: Ldap
    imEx: ImEx
    hosts: Hosts
    discounts: Discounts
    agreements: Agreements
    payroll: Payroll
    payments: Payments
    geography: Geography
    atalla: Atalla
    enrollments: Enrollments
    cards: Cards
    ftp: Ftp
    alarms: Alarms
    parameters: Parameters
    invoices: Invoices
    support: Support
    requests: Requests
    currency: Currency
    calendars: Calendars
    loans: Loans
    candidates: Candidates
    sales: Sales
    pensionFunds: PensionFunds
    http: Http
    reports: Reports
    remittances: Remittances
    stationery: Stationery
    certificatesOfDeposit: CertificatesOfDeposit
    trust: Trust
    checksTo: ChecksTo
    cashierChecks: CashierChecks
    bankingCorrespondents: BankingCorrespondents
    signatures: Signatures
    taxes: Taxes
    notes: Notes
    financialPortfolio: FinancialPortfolio
    gainAndLosses: GainAndLosses
    insurances: Insurances
    forms: Forms
    pinPads: PinPads
    magneticStripeReader: MagneticStripeReader
    printers: Printers
    fingerPrints: FingerPrints
  }
  
  export class ReverseOriginalDictionary {
    serializing: boolean
    reverseOriginalDictionary: string
  }
  
  export class Sif {
    productCode: number
    hideAccounts: boolean
    sebraValue: number
    cashValue: number
    cashInflow: number
    exchangeValue: number
    cashOutflow: number
    isLocalOnly: boolean
    checksValue: number
    negotiatedChecksValue: number
    changedChecksValue: number
    foreignExchangeValue: number
    cashierChecksValue: number
    comissionValue: number
    debitValue: number
    creditValue: number
    othersValue: number
    accountingValue: number
    creditCardValue: number
    treasurySecuritiesValue: number
    cardValue: number
    transporterValue: number
    totalValue: number
    enteredAmount: number
    blockValue: number
    blockDate: string
    channelAmount: number
    differenceAmount: number
    month: number
    printExternalCode: number
    paymentMediaId: number
    baseRateCode: number
    dateSettlement: string
    loggedChannel: number
    barcode128: string
    barcode: string
    authorizationNumber: string
    receiptNumber: string
    firstGeneralText: string
    secondGeneralText: string
    thirdGeneralText: string
    fourthGeneralText: string
    writtenIntegerValue: string
    writtenInteger: string
    decimalWrittenValue: string
    decimalWritten: string
    dateTimeFormat: string
    cashAccepted: boolean
    debitAccepted: boolean
    creditCardAccepted: boolean
    checksAccepted: boolean
    cashierChecksAccepted: boolean
    tidisAccepted: boolean
    certsAccepted: boolean
    bondsAccepted: boolean
    transporterAccepted: boolean
    dateFormat: string
    timeFormat: string
    daysElapsed: number
    integerOperationCode: number
    alphanumericOperationCodeCode: number
    channelId: number
    generateFiles: boolean
    isInternal: boolean
    isClientInternal: boolean
    overrideFailed: boolean
    overrideAccepted: boolean
    isBase: boolean
    allowedOffline: boolean
    printRequired: string
    signaturesRequired: boolean
    overrideRequired: boolean
    overrideMotives: string
    serviceType: number
    loggedEnterpriseId: number
    loggedEnterprise: string
    pinBlock: string
    loggedBranch: string
    reverseOf: number
    routingServiceId: number
    routedServiceId: number
    initialValue: string
    finalValue: string
    routingConditionId: number
    routingOperatorId: number
    acquiringInstitutionCode: string
    businessCategory: number
    rawData: string
    loggedUser: string
    xmlQueryResult: string
    jsonResponseObject: string
    serviceCategory: number
    businessCategoryDescription: string
    totalItems: number
    pageNumber: number
    confirmationType: string
    keyField: string
    readIndicator: string
    flier: string
    institutionId: number
    batchNumber: number
    currencyId: number
    originalServiceDictionary: string
    cancelChainedTransactions: boolean
    totalRetransmittedTransactions: number
    temporalDictionary: string
    transactionTotalValue: number
    vaultValue: number
    biometricVerify: boolean
  }
  
  export class Channels {
    productCode: number
    hideAccounts: boolean
    channelType: number
    channelId: number
    channelName: string
    channelState: number
    channelSchedule: number
    newChannelSchedule: number
    startWorkingHour: number
    endWorkingHour: number
    channelScheduleOffset: number
    externalCode: string
    activeChannelExternalCode: string
    lastWorkingDate: string
    workingDate: string
    nextWorkingDate: string
    nextCompensationDate: string
  }
  
  export class Security {
    productCode: number
    hideAccounts: boolean
    userId: number
    userLogOn: string
    hashDataSecurity: string
    supervisorUserLogOn: string
    userName: string
    activeUserLogOn: string
    tellerId: string
    supervisorTellerId: string
    supervisorName: string
    auxTellerId: string
    newTellerId: string
    transferTypeId: number
    userStatus: number
    endUserLogOn: string
    userLogOnLike: string
    newLogOn: string
    rawPassword: string
    supervisorRawPassword: string
    encryptedPassword: string
    mustLogOn: boolean
    isTransactionEncrypted: boolean
    newPassword: string
    passwordSequence: number
    activeUserRoleId: number
    logOffType: number
    validThru: string
    userExpirationDays: number
    passwordAge: number
    passwordsRemembered: number
    currentUserMode: number
    userToken: string
    authenticateAsAdmin: boolean
    userLastName: string
    userFirstName: string
    tokenSerialNumber: string
    userStation: string
    newFirstName: string
    newLastName: string
    sessionTicket: string
    defaultShell: string
    responseStatus: number
    returnCode: number
    handle: number
    prompt: string
    echoChar: boolean
    response: string
    responseTimeout: number
    responseLength: number
    transferStatusId: number
    transferExpirationDate: string
    deadline: string
    receiveDate: string
    justification: string
    userTypeId: string
    userType: number
    validationClose: number
    validationCloseForced: number
    branchClose: number
    fileUserId: number
    fileUser: string
    fileRawPassword: string
  }
  
  export class Journal {
    productCode: number
    hideAccounts: boolean
    sequence: number
    timePeriod: number
    startDateTime: string
    endDateTime: string
    serviceId: number
    executeService: number
    serviceState: number
    messageType: number
    businessCategory: number
    messageCode: string
    nextServiceName: string
    messageText: string
    inputDataRegistered: boolean
    originalTransactionNotFound: boolean
    registerJournal: boolean
    mustReverse: boolean
    mustNotReverse: boolean
    totalsAffected: boolean
    forceTotals: boolean
    totalsNotAffected: boolean
    mustRetransmit: boolean
    mustForward: boolean
    mustNotRetransmit: boolean
    signaturesVerified: boolean
    signaturesNotVerified: boolean
    signaturesApproved: boolean
    isAsynchronous: boolean
    requestData: string
    inputDictionaryData: string
    responseData: string
    subserviceSequence: number
    serviceName: string
    serviceDescription: string
    dynamicServiceName: string
    originalServiceName: string
    sentData: string
    sentDataDecoded: string
    frameId: string
    receivedData: string
    fieldName: string
    fieldValue: string
    applicationName: string
    applicationId: number
    initialApplicationId: number
    authorizationNumber: string
    externalSequence: string
    originalParentSequence: string
    parentExternalSequence: string
    reverseExternalSequence: string
    reverseOf: number
    fieldId: number
    fieldType: number
    reversedBy: number
    forwardedFor: number
    forwardedBy: number
    channelType: number
    channelId: number
    tellerMode: number
    newTellerMode: number
    lineStatus: number
    originalLineStatus: number
    dateSettlement: string
    userLogOn: string
    terminalId: string
    stationAddress: string
    branchName: string
    parentTransactionJournal: string
    administrativeBranch: string
    initialDate: string
    endDate: string
    initialSequence: number
    endSequence: number
    initialBranch: string
    finalBranch: string
    initialAdministrativeBranch: string
    finalAdministrativeBranch: string
    initialBusinessNumber: string
    finalBusinessNumber: string
    initialAccountNumber: string
    sortCriteria: string
    finalAccountNumber: string
    initialSupervisor: string
    finalSupervisor: string
    initialInstitution: string
    finalInstitution: string
    initialEnterprise: number
    enterprise: string
    finalEnterprise: string
    initialTellerId: string
    endTellerId: string
    initialUserLogOn: string
    endUserLogOn: string
    initialTotalValue: number
    endTotalValue: number
    initialCashValue: number
    finalCashValue: number
    initialChecksValue: number
    finalChecksValue: number
    initialOtherValue: number
    finalOtherValue: number
    initialService: number
    fieldDescription: string
    endService: number
    initialCurrency: number
    finalCurrency: number
    includeAccepted: boolean
    includeOnline: boolean
    includeOffline: boolean
    includeRejected: boolean
    includeTimeout: boolean
    includeCapture: boolean
    includeNormal: boolean
    includeError: boolean
    includeAborted: boolean
    includeCanceled: boolean
    includeMustRetransmit: boolean
    includeMustReverse: boolean
    documentType: number
    documentNumber: string
    accountNumber: string
    fastCode: string
    isReverse: boolean
    isNotReverse: boolean
    isReversed: boolean
    isNotReversed: boolean
    isForward: boolean
    isNotForward: boolean
    isForwarded: boolean
    isNotForwarded: boolean
    isDetails: boolean
    totalDepositValue: number
    totalDepositCount: number
    totalInvoiceValue: number
    totalInvoiceCount: number
    totalOthersValue: number
    totalOthersCount: number
    totalPayBillsValue: number
    totalPayBillsCount: number
    totalAgreementCollectionsValue: number
    totalAgreementCollectionsCount: number
    totalRemittancesValue: number
    totalRemittancesCount: number
    totalCreditCardValue: number
    totalCreditCardCount: number
    nextCutoffNumber: number
    fixedAuditBalance: number
    fixedDifference: number
    forcedLink: boolean
    executeLocal: boolean
    retriesToRetransmit: number
    clientAction: number
    clientServiceName: string
    firstFrameSequence: string
    calculatorHistory: string
    calculatorAcceptedOperation: boolean
    cashCounterHistory: string
    cashCounterAcceptedOperation: boolean
    serviceNameDB: string
    clientProcessStartDateTime: string
    clientProcessEndDateTime: string
    clientPostProcessStartDateTime: string
    clientPostProcessEndDateTime: string
    serverStartDateTime: string
    serverEndDateTime: string
    clientStartDateTime: string
    retransmittedServiceState: number
    initialExternalSequence: string
    finalExternalSequence: string
    currentRowProperties: string
    originalTellerMode: number
    tellerLineStatus: number
    clientMessageText: string
    clientExecutablePath: string
    originalParentExecuteService: string
    transactionEndDateTime: string
    retransmissionType: number
    originalUserLogOn: string
    originalTellerId: string
    currentUserName: string
    serverResponded: boolean
    aS400RespondedAccepted: boolean
    totalConcatenatedRFFiles: number
    isBatchProcess: boolean
  }
  
  export class Stations {
    productCode: number
    hideAccounts: boolean
    stationId: number
    stationName: string
    externalId: string
    protectedServerResponse: boolean
    externalCode: string
    machineName: string
  }
  
  export class Roles {
    productCode: number
    hideAccounts: boolean
    roleId: number
    roleName: string
    roleCategoryId: number
    roleCategoryName: string
    newRoleName: string
    roleAdditionalCode: string
    roleExternalCode: string
    canExecute: boolean
    isPermanentRole: boolean
    canAuthorize: boolean
    canReverse: boolean
    canAuthorizeReverse: boolean
    rolePermissions: string
    expirationDate: string
    originRoleId: number
    destinationRoleId: number
  }
  
  export class Customers {
    productCode: number
    hideAccounts: boolean
    customerId: number
    documentNumberIssuanceCity: string
    residenceCityName: string
    marketSegment: number
    documentTypeId: number
    docTypeName: string
    occupationName: string
    educationalLevel: string
    customerExempt: boolean
    specialCustomer: boolean
    form0210Generate: boolean
    houseOwner: boolean
    customerExists: boolean
    documentNumber: string
    additionalDocumentNumber: string
    initDocumentNumber: string
    endDocumentNumber: string
    customerNames: string
    customerShortName: string
    initCustomerNames: string
    endCustomerNames: string
    lastName: string
    initLastName: string
    endLastName: string
    middleName: string
    customerType: number
    customerTypeExternalCode: string
    addressType: number
    address: string
    addressId: number
    telephoneId: number
    telephoneNumber: string
    telephoneExtension: number
    telephoneTypeId: number
    birthdate: string
    initBirthdate: string
    endBirthdate: string
    customerStateId: number
    additionalAddress: string
    additionalTelephone: string
    fax: string
    economicalActivityCode: string
    internationalBusinessCode: string
    cellularTelephone: string
    maritalStatus: number
    maritalStatusExternalCode: string
    salary: number
    customerIncoming: number
    customerAssets: number
    customerLiability: number
    gender: number
    genderExternalCode: string
    mateBirthdate: string
    childBirthdate: string
    documentIssuanceDate: string
    documentIssuanceCityCode: number
    sonGender: number
    handicappedSon: boolean
    isTitular: boolean
    isValidated: boolean
    retirementAge: number
    customerResponse: number
    securityTypeId: number
    dependentsNumber: number
    childrenNumber: number
    retirementPension: number
    operatorId: number
    operatorDomain: string
    mateGender: number
    mobileOperatorId: number
    documentTypeExternalCode: string
    nationality: string
    balanceAddress: string
    userDescription: string
    initials: string
  }
  
  export class Enterprises {
    productCode: number
    hideAccounts: boolean
    enterpriseId: number
    totalEmployees: number
    futureEmployees: number
    enterpriseName: string
    documentType: number
    lastYearBalance: number
    activeLevel: number
    enterpriseDocumentNumber: string
    oldDocumentType: number
    oldDocumentNumber: string
    initialName: string
    finalName: string
    initialDocumentNumber: string
    finalDocumentNumber: string
    enterpriseManagerName: string
    branchManagerDocumentNumber: string
    branchId: number
    administrativeAreaId: number
    centralizerBranchId: number
    sourceBranchId: number
    targetBranchId: number
    branchName: string
    administrativeAreaName: string
    branchTypeId: number
    branchLocationMainBranchId: number
    branchTypeName: string
    enterpriseCategoryId: number
    enterpriseCategoryName: string
    enterpriseTypeId: number
    enterpriseTypeName: string
    status: number
    isManager: boolean
    isOperationsCenter: boolean
    isOperationsDepartment: boolean
    transactionsAccepted: boolean
    intermediateCityBranch: number
    branchParameterType: boolean
    supermarketBranch: boolean
    iqChecksProcessing: number
    receiverBranchId: number
    approved: boolean
    extendedScheduleSupported: number
    compensationCalendarId: number
    isHolding: boolean
    economicalActivityId: number
    economicalActivityName: string
    enterpriseCode: string
    areaExternalCode: string
    ciiuCode: string
    branchCode: string
    additionalCode: string
    branchAddress: string
    branchTelephone: string
    terminalId: string
    contactName: string
    contactEmail: string
    acronym: string
    contactId: number
    enterpriseUnitId: number
    contactTypeId: number
    employeePositionId: number
    notarialDeed: string
    notarialDeedMonthName: string
    notarialDeedDateName: string
    notarialCityName: string
    notaryNumber: string
    chamberOfCommerceCityName: string
    legalRepresentativeName: string
    publicBodyName: string
    fileNumber: number
    fileNumberMonthName: string
    fileNumberDate: string
    employeePositionName: string
    unitTypeId: number
    isEncrypted: boolean
    keyIndex: string
    secretPhrase: string
    ownerBank: number
    targetBranchExternalCode: string
    sourceBranchExternalCode: string
    taxExempt: boolean
  }
  
  export class CustomerApplications {
    productCode: number
    hideAccounts: boolean
    applicationId: number
    name: string
    externalCode: string
    oldName: string
    serviceId: number
    applicationServiceCode: string
  }
  
  export class Mail {
    productCode: number
    hideAccounts: boolean
    toAddress: string
    digitallySigned: boolean
    fromAddress: string
    subject: string
    body: string
    host: string
    port: number
    user: string
    password: string
    notificationName: string
    notificationId: number
    isBodyHtml: boolean
    mailTemplateId: number
    templateTypeId: number
    templateTypeName: string
    mailMediaName: string
    mailMediaId: number
    templateName: string
    filePath: string
    notificationTypeId: number
    mailId: number
    certificateStoreName: number
    certificateStoreLocation: number
    certificateSubject: string
    notificationStatusId: number
    enterpriseId: number
  }
  
  export class Xml {
    productCode: number
    hideAccounts: boolean
    xmlText: string
    xslPath: string
    xslUri: string
    documentXml: DocumentXml
    arguments: Arguments
    parametersNode: string[]
  }
  
  export class DocumentXml {}
  
  export class Arguments {}
  
  export class Banks {
    productCode: number
    hideAccounts: boolean
    bankId: number
    name: string
    productName: string
    productId: number
    oldProductName: string
    bankCode: number
    achBankCode: number
    corporateCode: string
    checkingAccountLength: number
    savingsAccountLength: number
    branchName: string
    branchCode: string
    branchId: number
    statusId: number
    bankBranchCode: number
    oldName: string
    originBankName: string
    destinationBankName: string
    identifiedBy: number
    imageRelativePath: string
    hasAtm: boolean
    semiLocalChecksCashing: number
    checksDrawnAccepted: number
    simplifiedValidation: boolean
    activeBranchName: string
  }
  
  export class Accounts {
    productCode: number
    hideAccounts: boolean
    accountType: number
    withdrawalType: number
    checkbookType: number
    checkbookTypeExternalCode: string
    checkbookName: string
    checkNumber: number
    planCode: number
    planCodename: string
    collectionGroup: number
    initialCheckNumber: number
    homeDeliveryCheckbook: string
    receptionByAThird: string
    finalCheckNumber: number
    acctTypeName: string
    thirdPartyName: string
    accountNumber: string
    checkingAccountNumber: string
    oldAccountNumber: string
    oldAccountTypeName: string
    accountId: number
    validThru: string
    enrollmentDate: string
    status: number
    accountStatusExternalCode: string
    cvc2: number
    originAccountTypeName: string
    destinationAccountType: number
    destinationAcctTypeName: string
    originAccountNumber: string
    destinationAccountNumber: string
    currentBalance: number
    impoundedValue: number
    impoundmentDate: string
    accountTypeExternalCode: string
    accountClassExternalCode: string
    statementAddress: string
    statementName: string
    statementCityName: string
    statementStateName: string
    statementTelephone: string
    statementCountryName: string
    statementDeliveryType: string
    creditTypeId: number
    exemptionTypeExternalCode: number
    ownExemptionTypeExternalCode: number
    exemptionType: number
    hideCreditCardNumber: boolean
    isImpounded: boolean
    hasCard: boolean
    isPayrollAccount: boolean
    signaturesEnabled: boolean
    isTaxExempted: boolean
    monthlyQuota: number
    coverOverdrafts: boolean
    form0210Generate: string
    validatesAccount: number
    accountName: string
    statementCycleId: number
    statementAddressId: number
    statementAddressType: number
    statementCopies: number
    form0210StatementCycleId: number
    validatesConsecutive: number
    availableBalance: number
    availableRealBalance: number
    atmPaymentsValue: number
    atmWithdrawalsValue: number
    bouncedCreditChecksValue: number
    branchWithdrawalsValue: number
    cashDepositsValue: number
    certifiedChecksAvailableBalance: number
    checkDepositsValue: number
    creditAdjustmentsValue: number
    creditFundTransfersValue: number
    creditNotesValue: number
    dataphonePurchases: number
    debitAdjustmentsValue: number
    debitFundTransfersValue: number
    debitNotesValue: number
    floatingAvailableBalance: number
    floatingCreditAdjustmentsValue: number
    floatingDebitAdjustmentsValue: number
    impoundedAvailableBalance: number
    minimumBalance: number
    notPayedChecksValue: number
    overdraftQuota: number
    payedChecksValue: number
    receivableAccountsBalance: number
    totalAvailableBalance: number
    totalBalance: number
    totalCredits: number
    totalDebits: number
    nameKey: string
    addressKey: string
    allowedCOOwner: boolean
    negotiatedChecksValue: number
    planExternalCode: string
    planDescription: string
    accountClassId: number
    accountClassDescription: string
    interests: number
    retention: number
    deliverValue: number
    cashWithdrawal: number
    chargeRefundCode: string
    chargeRefundCause: string
    checkSeries: string
    withdrawalTypePinPad: string
    exclusiveDepositCoins: string
    cancellationReasonCode: number
    cancellationReason: string
    actionType: string
  }
  
  export class Atm {
    productCode: number
    hideAccounts: boolean
    id: number
    externalCode: string
  }
  
  export class Franchises {
    productCode: number
    hideAccounts: boolean
    id: number
    franchiseName: string
    bin: number
    initialName: string
    finalName: string
    oldName: string
    franchiseAccountLength: number
  }
  
  export class Ldap {
    productCode: number
    hideAccounts: boolean
    surname: string
    oldSurname: string
    givenName: string
    oldGivenName: string
    ldapLogOn: string
    emailAddress: string
    oldEmailAddress: string
    organization: string
    oldOrganization: string
    privateZone: string
    password: string
    response: string
    returnCode: number
    disabledStartDate: string
    disabledEndDate: string
    userGroup: string
    oldUserGroup: string
    userProfile: string
    oldUserProfile: string
    additionalData1: string
    oldAdditionalData1: string
    additionalData2: string
    oldAdditionalData2: string
    creationDate: string
    newPassword: string
    ldapFilter: string
    badPasswordCount: number
    lockoutTime: string
    badPasswordTime: string
  }
  
  export class ImEx {
    productCode: number
    hideAccounts: boolean
    digitallySigned: boolean
    externalEncryption: boolean
    fileId: number
    fileTypeId: number
    keyOffset: string
    name: string
    tableName: string
    columnName: string
    description: string
    schema: string
    sectionSequence: number
    fieldId: number
    parentFileId: number
    parentSectionSequence: number
    fieldName: string
    destinationFileName: string
    sourceFileName: string
    tableList: string
    childTableList: string
    joinId: number
    sectionSelects: SectionSelect[]
    initialFileName: string
    endFileName: string
    fieldPosition: number
    fieldLength: number
    fileContents: any
    errorCodes: any
    errorFile: ErrorFile
    onError: OnError
    fileData: string
    commission: number
    extension: string
    cipherMethodId: number
    compressed: boolean
    compressedWithPassword: number
    password: string
    maxNumberRecords: number
    alternateUserLogOn: string
    alternateAddress: string
    alternatePassword: string
    alternateDirectory: string
    alternateDeliveryMedia: number
    isAlternateDeliveryMedia: boolean
    isTransmitFile: boolean
    totalRows: number
    totalFiles: number
    acceptedRows: number
    tableId: number
    sectionRowsRetrieved: string[]
    filesToSend: FilesToSend[]
    encrypted: boolean
    pgpSecretPhrase: string
  }
  
  export class SectionSelect {
    sectionSequence: number
    sectionName: string
    selectSentence: string
    parentSection: number
    parameters: Parameter[]
    totalRows: number
  }
  
  export class Parameter {
    dbType: number
    direction: number
    isNullable: boolean
    parameterName: string
    precision: number
    scale: number
    size: number
    sourceColumn: string
    sourceColumnNullMapping: boolean
    sourceVersion: number
    value: any
  }
  
  export class ErrorFile {}
  
  export class OnError {
    method: Method
  }
  
  export class Method {
    declaringType: DeclaringType
    reflectedType: ReflectedType
    module: Module5
    attributes: number
    methodImplementationFlags: number
    callingConvention: number
    methodHandle: MethodHandle5
    memberType: number
    returnParameter: ReturnParameter
    returnType: ReturnType
    returnTypeCustomAttributes: ReturnTypeCustomAttributes
  }
  
  export class DeclaringType {
    memberType: number
    assembly: string
    module: Module
    declaringType: string
    declaringMethod: DeclaringMethod
    reflectedType: string
    underlyingSystemType: string
    genericParameterAttributes: number
    attributes: number
    structLayoutAttribute: StructLayoutAttribute
    typeInitializer: TypeInitializer
    typeHandle: TypeHandle
    baseType: string
  }
  
  export class Module {
    assembly: string
    moduleHandle: ModuleHandle
  }
  
  export class ModuleHandle {}
  
  export class DeclaringMethod {
    memberType: number
    declaringType: string
    reflectedType: string
    module: Module2
    attributes: number
    methodImplementationFlags: number
    callingConvention: number
    methodHandle: MethodHandle
  }
  
  export class Module2 {
    assembly: string
    moduleHandle: ModuleHandle2
  }
  
  export class ModuleHandle2 {}
  
  export class MethodHandle {
    value: Value
  }
  
  export class Value {}
  
  export class StructLayoutAttribute {
    value: number
  }
  
  export class TypeInitializer {
    declaringType: string
    reflectedType: string
    module: string
    attributes: number
    methodImplementationFlags: number
    callingConvention: number
    methodHandle: MethodHandle2
    memberType: number
  }
  
  export class MethodHandle2 {
    value: Value2
  }
  
  export class Value2 {}
  
  export class TypeHandle {
    value: Value3
  }
  
  export class Value3 {}
  
  export class ReflectedType {
    memberType: number
    assembly: string
    module: Module3
    declaringType: string
    declaringMethod: DeclaringMethod2
    reflectedType: string
    underlyingSystemType: string
    genericParameterAttributes: number
    attributes: number
    structLayoutAttribute: StructLayoutAttribute2
    typeInitializer: TypeInitializer2
    typeHandle: TypeHandle2
    baseType: string
  }
  
  export class Module3 {
    assembly: string
    moduleHandle: ModuleHandle3
  }
  
  export class ModuleHandle3 {}
  
  export class DeclaringMethod2 {
    memberType: number
    declaringType: string
    reflectedType: string
    module: Module4
    attributes: number
    methodImplementationFlags: number
    callingConvention: number
    methodHandle: MethodHandle3
  }
  
  export class Module4 {
    assembly: string
    moduleHandle: ModuleHandle4
  }
  
  export class ModuleHandle4 {}
  
  export class MethodHandle3 {
    value: Value4
  }
  
  export class Value4 {}
  
  export class StructLayoutAttribute2 {
    value: number
  }
  
  export class TypeInitializer2 {
    declaringType: string
    reflectedType: string
    module: string
    attributes: number
    methodImplementationFlags: number
    callingConvention: number
    methodHandle: MethodHandle4
    memberType: number
  }
  
  export class MethodHandle4 {
    value: Value5
  }
  
  export class Value5 {}
  
  export class TypeHandle2 {
    value: Value6
  }
  
  export class Value6 {}
  
  export class Module5 {
    assembly: string
    moduleHandle: ModuleHandle5
  }
  
  export class ModuleHandle5 {}
  
  export class MethodHandle5 {
    value: Value7
  }
  
  export class Value7 {}
  
  export class ReturnParameter {
    attributes: number
    member: Member
    parameterType: ParameterType
  }
  
  export class Member {
    memberType: number
    declaringType: string
    reflectedType: string
    module: string
  }
  
  export class ParameterType {
    memberType: number
    assembly: string
    module: Module6
    declaringType: string
    declaringMethod: DeclaringMethod3
    reflectedType: string
    underlyingSystemType: string
    genericParameterAttributes: number
    attributes: number
    structLayoutAttribute: StructLayoutAttribute3
    typeInitializer: TypeInitializer3
    typeHandle: TypeHandle3
    baseType: string
  }
  
  export class Module6 {
    assembly: string
    moduleHandle: ModuleHandle6
  }
  
  export class ModuleHandle6 {}
  
  export class DeclaringMethod3 {
    memberType: number
    declaringType: string
    reflectedType: string
    module: Module7
    attributes: number
    methodImplementationFlags: number
    callingConvention: number
    methodHandle: MethodHandle6
  }
  
  export class Module7 {
    assembly: string
    moduleHandle: ModuleHandle7
  }
  
  export class ModuleHandle7 {}
  
  export class MethodHandle6 {
    value: Value8
  }
  
  export class Value8 {}
  
  export class StructLayoutAttribute3 {
    value: number
  }
  
  export class TypeInitializer3 {
    declaringType: string
    reflectedType: string
    module: string
    attributes: number
    methodImplementationFlags: number
    callingConvention: number
    methodHandle: MethodHandle7
    memberType: number
  }
  
  export class MethodHandle7 {
    value: Value9
  }
  
  export class Value9 {}
  
  export class TypeHandle3 {
    value: Value10
  }
  
  export class Value10 {}
  
  export class ReturnType {
    memberType: number
    assembly: string
    module: Module8
    declaringType: string
    declaringMethod: DeclaringMethod4
    reflectedType: string
    underlyingSystemType: string
    genericParameterAttributes: number
    attributes: number
    structLayoutAttribute: StructLayoutAttribute4
    typeInitializer: TypeInitializer4
    typeHandle: TypeHandle4
    baseType: string
  }
  
  export class Module8 {
    assembly: string
    moduleHandle: ModuleHandle8
  }
  
  export class ModuleHandle8 {}
  
  export class DeclaringMethod4 {
    memberType: number
    declaringType: string
    reflectedType: string
    module: Module9
    attributes: number
    methodImplementationFlags: number
    callingConvention: number
    methodHandle: MethodHandle8
  }
  
  export class Module9 {
    assembly: string
    moduleHandle: ModuleHandle9
  }
  
  export class ModuleHandle9 {}
  
  export class MethodHandle8 {
    value: Value11
  }
  
  export class Value11 {}
  
  export class StructLayoutAttribute4 {
    value: number
  }
  
  export class TypeInitializer4 {
    declaringType: string
    reflectedType: string
    module: string
    attributes: number
    methodImplementationFlags: number
    callingConvention: number
    methodHandle: MethodHandle9
    memberType: number
  }
  
  export class MethodHandle9 {
    value: Value12
  }
  
  export class Value12 {}
  
  export class TypeHandle4 {
    value: Value13
  }
  
  export class Value13 {}
  
  export class ReturnTypeCustomAttributes {}
  
  export class FilesToSend {
    fileId: number
    sourceFileName: string
    destinationFileName: string
  }
  
  export class Hosts {
    productCode: number
    hideAccounts: boolean
    hostId: number
    serializerId: number
    connectTimeout: number
    receiveTimeout: number
    sendTimeout: number
    bufferSize: number
    fieldName: string
    hostName: string
    serializerClassName: string
    hostDescription: string
    keepAliveClassName: string
    keepAliveFrequency: number
    ipAddress: string
    port: number
    messageAuthenticationCode: string
    fieldId: number
    methodParameterId: number
    internalValue: string
    responseCode: string
    responseCode2: string
    responseCode3: string
    responseCode4: string
    responseCode5: string
    responseCode6: string
    responseCode7: string
    responseCode8: string
    responseCode9: string
    responseCode10: string
    externalValue: string
    programCode: string
    programCodeNumber: string
    moreDataPresent: boolean
    rowsRetrieved: number
    totalRowsExpected: number
    lineStatusText: string
    hostStatus: number
    minimumConnections: number
    maximumConnections: number
    ipAddressAlternate: string
    serviceSchema: string
    serverId: number
    portAlternate: number
    hashId: number
    authenticationMethodId: number
    parameterFieldType: number
    cipherId: number
    remoteServiceAssembly: RemoteServiceAssembly
    hashOrder: number
    returnFieldType: number
    endPointId: number
    remoteServiceId: number
    serviceSpecTypeId: number
    remoteMethodId: number
    remoteParameterID: number
    remoteParameterName: string
    remoteMethodName: string
    acceptedValue: string
    overrideRequiredValue: string
    cacheDuration: number
    securedConnection: boolean
    isArray: boolean
    remoteServiceType: RemoteServiceType
  }
  
  export class RemoteServiceAssembly {
    entryPoint: EntryPoint
    manifestModule: ManifestModule
    securityRuleSet: number
  }
  
  export class EntryPoint {
    declaringType: DeclaringType2
    reflectedType: ReflectedType2
    module: Module14
    attributes: number
    methodImplementationFlags: number
    callingConvention: number
    methodHandle: MethodHandle14
    memberType: number
    returnParameter: ReturnParameter2
    returnType: ReturnType2
    returnTypeCustomAttributes: ReturnTypeCustomAttributes2
  }
  
  export class DeclaringType2 {
    memberType: number
    assembly: string
    module: Module10
    declaringType: string
    declaringMethod: DeclaringMethod5
    reflectedType: string
    underlyingSystemType: string
    genericParameterAttributes: number
    attributes: number
    structLayoutAttribute: StructLayoutAttribute5
    typeInitializer: TypeInitializer5
    typeHandle: TypeHandle5
    baseType: string
  }
  
  export class Module10 {
    assembly: string
    moduleHandle: ModuleHandle10
  }
  
  export class ModuleHandle10 {}
  
  export class DeclaringMethod5 {
    memberType: number
    declaringType: string
    reflectedType: string
    module: Module11
    attributes: number
    methodImplementationFlags: number
    callingConvention: number
    methodHandle: MethodHandle10
  }
  
  export class Module11 {
    assembly: string
    moduleHandle: ModuleHandle11
  }
  
  export class ModuleHandle11 {}
  
  export class MethodHandle10 {
    value: Value14
  }
  
  export class Value14 {}
  
  export class StructLayoutAttribute5 {
    value: number
  }
  
  export class TypeInitializer5 {
    declaringType: string
    reflectedType: string
    module: string
    attributes: number
    methodImplementationFlags: number
    callingConvention: number
    methodHandle: MethodHandle11
    memberType: number
  }
  
  export class MethodHandle11 {
    value: Value15
  }
  
  export class Value15 {}
  
  export class TypeHandle5 {
    value: Value16
  }
  
  export class Value16 {}
  
  export class ReflectedType2 {
    memberType: number
    assembly: string
    module: Module12
    declaringType: string
    declaringMethod: DeclaringMethod6
    reflectedType: string
    underlyingSystemType: string
    genericParameterAttributes: number
    attributes: number
    structLayoutAttribute: StructLayoutAttribute6
    typeInitializer: TypeInitializer6
    typeHandle: TypeHandle6
    baseType: string
  }
  
  export class Module12 {
    assembly: string
    moduleHandle: ModuleHandle12
  }
  
  export class ModuleHandle12 {}
  
  export class DeclaringMethod6 {
    memberType: number
    declaringType: string
    reflectedType: string
    module: Module13
    attributes: number
    methodImplementationFlags: number
    callingConvention: number
    methodHandle: MethodHandle12
  }
  
  export class Module13 {
    assembly: string
    moduleHandle: ModuleHandle13
  }
  
  export class ModuleHandle13 {}
  
  export class MethodHandle12 {
    value: Value17
  }
  
  export class Value17 {}
  
  export class StructLayoutAttribute6 {
    value: number
  }
  
  export class TypeInitializer6 {
    declaringType: string
    reflectedType: string
    module: string
    attributes: number
    methodImplementationFlags: number
    callingConvention: number
    methodHandle: MethodHandle13
    memberType: number
  }
  
  export class MethodHandle13 {
    value: Value18
  }
  
  export class Value18 {}
  
  export class TypeHandle6 {
    value: Value19
  }
  
  export class Value19 {}
  
  export class Module14 {
    assembly: string
    moduleHandle: ModuleHandle14
  }
  
  export class ModuleHandle14 {}
  
  export class MethodHandle14 {
    value: Value20
  }
  
  export class Value20 {}
  
  export class ReturnParameter2 {
    attributes: number
    member: Member2
    parameterType: ParameterType2
  }
  
  export class Member2 {
    memberType: number
    declaringType: string
    reflectedType: string
    module: string
  }
  
  export class ParameterType2 {
    memberType: number
    assembly: string
    module: Module15
    declaringType: string
    declaringMethod: DeclaringMethod7
    reflectedType: string
    underlyingSystemType: string
    genericParameterAttributes: number
    attributes: number
    structLayoutAttribute: StructLayoutAttribute7
    typeInitializer: TypeInitializer7
    typeHandle: TypeHandle7
    baseType: string
  }
  
  export class Module15 {
    assembly: string
    moduleHandle: ModuleHandle15
  }
  
  export class ModuleHandle15 {}
  
  export class DeclaringMethod7 {
    memberType: number
    declaringType: string
    reflectedType: string
    module: Module16
    attributes: number
    methodImplementationFlags: number
    callingConvention: number
    methodHandle: MethodHandle15
  }
  
  export class Module16 {
    assembly: string
    moduleHandle: ModuleHandle16
  }
  
  export class ModuleHandle16 {}
  
  export class MethodHandle15 {
    value: Value21
  }
  
  export class Value21 {}
  
  export class StructLayoutAttribute7 {
    value: number
  }
  
  export class TypeInitializer7 {
    declaringType: string
    reflectedType: string
    module: string
    attributes: number
    methodImplementationFlags: number
    callingConvention: number
    methodHandle: MethodHandle16
    memberType: number
  }
  
  export class MethodHandle16 {
    value: Value22
  }
  
  export class Value22 {}
  
  export class TypeHandle7 {
    value: Value23
  }
  
  export class Value23 {}
  
  export class ReturnType2 {
    memberType: number
    assembly: string
    module: Module17
    declaringType: string
    declaringMethod: DeclaringMethod8
    reflectedType: string
    underlyingSystemType: string
    genericParameterAttributes: number
    attributes: number
    structLayoutAttribute: StructLayoutAttribute8
    typeInitializer: TypeInitializer8
    typeHandle: TypeHandle8
    baseType: string
  }
  
  export class Module17 {
    assembly: string
    moduleHandle: ModuleHandle17
  }
  
  export class ModuleHandle17 {}
  
  export class DeclaringMethod8 {
    memberType: number
    declaringType: string
    reflectedType: string
    module: Module18
    attributes: number
    methodImplementationFlags: number
    callingConvention: number
    methodHandle: MethodHandle17
  }
  
  export class Module18 {
    assembly: string
    moduleHandle: ModuleHandle18
  }
  
  export class ModuleHandle18 {}
  
  export class MethodHandle17 {
    value: Value24
  }
  
  export class Value24 {}
  
  export class StructLayoutAttribute8 {
    value: number
  }
  
  export class TypeInitializer8 {
    declaringType: string
    reflectedType: string
    module: string
    attributes: number
    methodImplementationFlags: number
    callingConvention: number
    methodHandle: MethodHandle18
    memberType: number
  }
  
  export class MethodHandle18 {
    value: Value25
  }
  
  export class Value25 {}
  
  export class TypeHandle8 {
    value: Value26
  }
  
  export class Value26 {}
  
  export class ReturnTypeCustomAttributes2 {}
  
  export class ManifestModule {
    assembly: string
    moduleHandle: ModuleHandle19
  }
  
  export class ModuleHandle19 {}
  
  export class RemoteServiceType {
    memberType: number
    assembly: string
    module: Module19
    declaringType: string
    declaringMethod: DeclaringMethod9
    reflectedType: string
    underlyingSystemType: string
    genericParameterAttributes: number
    attributes: number
    structLayoutAttribute: StructLayoutAttribute9
    typeInitializer: TypeInitializer9
    typeHandle: TypeHandle9
    baseType: string
  }
  
  export class Module19 {
    assembly: string
    moduleHandle: ModuleHandle20
  }
  
  export class ModuleHandle20 {}
  
  export class DeclaringMethod9 {
    memberType: number
    declaringType: string
    reflectedType: string
    module: Module20
    attributes: number
    methodImplementationFlags: number
    callingConvention: number
    methodHandle: MethodHandle19
  }
  
  export class Module20 {
    assembly: string
    moduleHandle: ModuleHandle21
  }
  
  export class ModuleHandle21 {}
  
  export class MethodHandle19 {
    value: Value27
  }
  
  export class Value27 {}
  
  export class StructLayoutAttribute9 {
    value: number
  }
  
  export class TypeInitializer9 {
    declaringType: string
    reflectedType: string
    module: string
    attributes: number
    methodImplementationFlags: number
    callingConvention: number
    methodHandle: MethodHandle20
    memberType: number
  }
  
  export class MethodHandle20 {
    value: Value28
  }
  
  export class Value28 {}
  
  export class TypeHandle9 {
    value: Value29
  }
  
  export class Value29 {}
  
  export class Discounts {
    productCode: number
    hideAccounts: boolean
    discountId: number
    discountName: string
    oldDiscountName: string
  }
  
  export class Agreements {
    productCode: number
    hideAccounts: boolean
    agreementId: number
    agreementName: string
    collectionTypeName: string
    reference1: string
    ean13Code: string
    reference2: string
    reference3: string
    reference4: string
    reference5: string
    paymentDate: string
    billLocationId: number
    agreementFileTypeId: number
    agreementFieldId: number
    agreementField: string
    agreementFieldLabel: string
    agreementFieldSize: number
    agreementFieldDataType: number
    agreementFieldReference: number
    agreementIdentificationType: number
    originalAgreementIdentificationType: string
    isPaymentAgreement: boolean
    collectionModeId: number
    routingServiceId: number
    agreementStatus: number
    agreementCategoryId: number
    categoryExternalCode: string
    agreementPaymentTypeId: number
    agreementImageFilePath: string
    minimumCollectionValue: number
    maximumCollectionValue: number
    messagesFileIncludesCents: boolean
    collectionFileIncludesCents: boolean
    agreementSeed: string
    uniqueCyclePayment: boolean
    agreementExternalCode: string
    verifiesBillExpiration: boolean
    allowedDaysBeforeExpiration: number
    allowedDaysAfterExpiration: number
    validatesAmount: boolean
    uniqueDailyPayment: boolean
    agreementStartDate: string
    agreementEndDate: string
    additionalValuesSend: boolean
    agreementDescription: string
    agreementNotes: string
    searchesIncluded: boolean
    taxesAgreement: boolean
    requiresSpecialFormat: boolean
    specialFormatPrint: boolean
    geographicCoverageId: number
    documentDigitize: boolean
    documentControlRequired: boolean
    attachmentsRequired: boolean
    validationsRequired: boolean
    listingFileId: number
    statementGeographicClassId: number
    statementScheduleId: number
    statementChannelId: number
    detailedStatement: boolean
    statementStructureFilePath: string
    totalCutoffPeriodId: number
    cutoffType: number
    partialCutoffRequired: boolean
    partialCutoffPeriodId: number
    partialCutoffUnits: number
    cutoffStartTime: string
    cutoffEndTime: string
    barcodeOmitsAmountValidation: boolean
    barcodeOmitsDateValidation: boolean
    barcodeOmitsBillValidation: boolean
    associatedAgreementId: number
    collectFileGenerationModeId: number
    collectionsFileGenerate: number
    invoiceFileLoadModeId: number
    independentPaymentAllowed: boolean
    receiverId: number
    cycleId: number
    serviceTypeId: number
    cycleName: string
    isHidden: boolean
    agreementAcronym: string
    internalCode: string
    transmitFile: boolean
    completeReplacement: number
    allowsExpiredDates: number
    alternateBillLocationId: number
    notificationModeId: number
    includePaymentsInCollectionsFile: boolean
    alternateSearchKey: number
    billSearchKey: number
    remoteBillQueryClass: string
    remotePaymentNotificationClass: string
    remoteBillAssembly: string
    remoteBillSecurityPolicy: string
    loadInPayCentral: boolean
    allowsOnlinePayment: number
    isReserve: boolean
    isPin: boolean
    isCiphered: boolean
    subserviceCode: string
    secondAgreementId: number
    reverseRemoteUrl: string
    reverseRemoteTimeout: number
    agreementListCode: number
    agreementSequence: number
    annexType: number
    validReference1: boolean
    validReference2: boolean
    validReference3: boolean
    validReference4: boolean
    validReference5: boolean
    agreementBarcodeAllowed: boolean
    agreementSingleCheckRequired: boolean
    agreementHintAdditionalMessage: string
    agreementPlasticIdRequired: boolean
    agreementAllowsMixedPayments: boolean
    agreementsExclusiveAccount: boolean
    agreementsSpecialClient: boolean
    agreementsContingencyRin: boolean
    agreementsCaptureMode: string
    agreementsErrorId: number
    agreementsOperationCode: string
    agreementsCodeBar: string
    agreementsValueCodeBar: number
    agreementsReferenceTitle: string
    agreementsNumberReferences: number
    invoicePresent: boolean
    partialPayment: boolean
    allowsContingency: boolean
    allowsPaymentZero: boolean
    thereIsContingency: boolean
    typeForm: number
    illicitType: string
  }
  
  export class Payroll {
    productCode: number
    hideAccounts: boolean
    monthlyPayroll: number
    paymentDate: string
  }
  
  export class Payments {
    productCode: number
    hideAccounts: boolean
    paymentId: number
    billNumber: string
    taxBranch: string
    billSearchKeyValue: string
    paymentStatus: number
    paymentStatusDate: string
    taxValue: number
    taxBase: number
    totalValue: number
    additionalValue1: number
    additionalValue2: number
    additionalValue3: number
    additionalValue4: number
    additionalValue5: number
    fileId: number
    fileStatus: number
    processDate: string
    fileSequence: number
    originalFileSequence: number
    mainServiceValue: number
    secondServiceValue: number
    commission: number
    paymentScheduleId: number
    paymentScheduleDays: number
    consolidateValues: boolean
    fileTypeId: number
    remotePaid: boolean
    isRegeneration: boolean
    multipleFilesNeeded: boolean
    hideBillNumber: boolean
    haveCalendar: boolean
  }
  
  export class Geography {
    productCode: number
    hideAccounts: boolean
    countryId: number
    countryName: string
    countryCode: number
    stateId: number
    stateName: string
    stateCode: string
    cityId: number
    cityName: string
    cityCode: number
    countyId: number
    countyName: string
    countyCode: string
    additionalCountyCode: string
    additional1CountyCode: string
    additionalStateCode: string
    additional1StateCode: string
    additionalCityCode: number
    additional1CityCode: number
  }
  
  export class Atalla {
    productCode: number
    hideAccounts: boolean
    keyType: number
    keyLength: string
    keKey: string
    exportedWKey: string
    keyCheckDigits: string
    variant: number
    wKey: string
    operation: string
    desMethod: number
    dataKey: string
    initializationVector: string
    dataType: string
    dataLength: number
    dataLengthEncDec: number
    data: string
    dataEncDec: string
    macKey: string
    macLength: number
    macType: number
    macReturned: string
    pinblockType: number
    incomingKPin: string
    outgoingKPin: string
    pinBlock: string
    outgoingPinBlock: string
    pinBlockData: string
    pan: string
    tagDF01: string
    tag5A: string
    tag5F34: string
    tag9F36: string
    tag9F37: string
    tag9F26: string
    tag9F1A: string
    tag95: string
    tag5F2A: string
    tag9C: string
    tag82: string
    tag9F10: string
    tag9F27: string
    tag9F02: string
    tag9A: string
    tag8A: string
    idcripto: string
    tagDF03: string
    arpc: string
    arc: string
    otherValue: string
  }
  
  export class Enrollments {
    productCode: number
    hideAccounts: boolean
    enrollmentId: number
    enrollmentTypeId: number
    uniqueId: string
    paymentDues: number
    status: number
    firstPaymentDate: string
    expirationDate: string
    nextPaymentDate: string
    rejectionCause: string
    originalUniqueId: string
    initialDate: string
    finalDate: string
    enrollmentTransactionType: string
    maximumPaymentValue: number
    paymentTries: number
    retryDays: number
    notificationType: number
    notificationDays: number
    retryNotify: boolean
    failureNotify: boolean
    successNotify: boolean
    enrollmentAlias: string
    statusDate: string
    hideUniqueId: boolean
    enrollmentDate: string
  }
  
  export class Cards {
    productCode: number
    hideAccounts: boolean
    hideCreditCardNumber: boolean
    cardNumber: string
    cardFranchiseAccepted: boolean
    trackIIData: string
    enhancementName: string
    secondEnhancementName: string
    thirdEnhancementName: string
    validThru: string
    expirationYear: number
    campaignCode: number
    expirationMonth: number
    cardholderName: string
    accountingOperation: string
    productCodeExternal: string
    totalPaymentValue: number
    accountNit: string
    creditCardNit: string
    cardMinimumPayment: number
    cardTotalPayment: number
    cardAdvanceAvailable: number
    cardMinimumDollarsPayment: number
    cardTotalDollarsPayment: number
    dollarEquivalent: number
    establishment: string
    totalPurchaseValue: number
    tipValue: number
    taxValue: number
    numberUses: number
    cardBrand: string
    cardCurt: number
  }
  
  export class Ftp {
    productCode: number
    hideAccounts: boolean
    userLogOn: string
    password: string
    domain: string
    serverUrl: string
    fileName: string
    destinationFile: string
    fileDirectory: string
    ftpServerName: string
    fileMask: string
    filesList: string[]
    isExternal: boolean
    port: number
    securedConnection: boolean
  }
  
  export class Alarms {
    productCode: number
    hideAccounts: boolean
    alarmId: number
    alarmType: number
    customerApplicationId: number
    serviceId: number
    errorId: number
    alarmMailId: number
    alarmMail: string
    alarmFileName: string
    mailType: number
    billerNameInclude: boolean
    uniqueIdInclude: boolean
    arrivalDateInclude: boolean
    expirationDateInclude: boolean
    invoiceArrivalInclude: boolean
    invoiceExpirationInclude: boolean
    daysBeforeInclude: boolean
    amountExceededInclude: boolean
    processDateInclude: boolean
    valueInclude: boolean
  }
  
  export class Parameters {
    productCode: number
    hideAccounts: boolean
    parameterName: string
    parameterId: number
    parentParameterId: number
    parameterTypeId: number
    parameterValue: string
    parameterTypeName: string
    parameterDescription: string
    applicationId: number
    dataType: number
    parametersArray: string[]
  }
  
  export class Invoices {
    productCode: number
    hideAccounts: boolean
    invoiceFileId: number
    invoiceFile: string
    primaryAgreementId: number
    secondaryAgreementId: number
    billerBankId: number
    uploadDate: string
    fileDate: string
    fileSequence: string
    originalFileSequence: string
    statusDate: string
    fileStatus: number
    transmissionStatus: number
    paymentPeriods: number
    primaryAgreementCode: string
    secondaryAgreementCode: string
    expirationDate: string
    finalExpirationDate: string
    cycle: string
    fileId: number
    totalBatchRecords: number
    mainServiceBatchValue: number
    additionalServiceBatchValue: number
    totalDataRecords: number
    mainServiceTotalValue: number
    additionalServiceTotalValue: number
    fileModifier: string
    invoicesHeaderRecordField: string
    invoicesStartBatchRecordField: string
    invoicesEndBatchRecordField: string
    invoicesDataRecordField: string
    invoicesSummaryRecordField: string
    invoicesPrimaryAgreementField: string
    invoicesExpirationDateField: string
    invoicesLastExpirationDateField: string
    invoicesFileDateField: string
    invoicesCycleField: string
    invoicesUniqueIdField: string
    invoicesBillNumberField: string
    transactionType: string
    fieldMappings: FieldMapping[][]
    fieldAddMappings: FieldAddMapping[][]
    fieldArray: string[][]
    deliveryMediaId: number
    isAgreementTable: boolean
    maxExpirationDate: string
    invoiceId: number
    invoiceDetailId: number
    invoiceDateId: number
    invoiceValueId: number
    invoiceReferenceId: number
  }
  
  export class FieldMapping {
    dataDictionaryName: string
    dataDictionaryField: string
    fieldName: string
    fieldValue: string
  }
  
  export class FieldAddMapping {
    dataDictionaryName: string
    dataDictionaryField: string
    fieldName: string
    fieldValue: string
  }
  
  export class Support {
    productCode: number
    hideAccounts: boolean
    supportId: number
    description: string
    creationDate: string
    statusDate: string
    responsibleId: number
    projectId: number
    projectName: string
    applicationId: number
    criticalityId: number
    statusId: number
    environmentId: number
    reportTypeId: number
    attachmentSequence: number
    uploadDate: string
    fileName: string
    score: number
  }
  
  export class Requests {
    productCode: number
    hideAccounts: boolean
    requestId: number
    requestType: number
    requestStatus: number
    rejectionNotes: string
    description: string
    activationDate: string
  }
  
  export class Currency {
    productCode: number
    hideAccounts: boolean
    currencyId: number
    currencyType: number
    currencyStatus: number
    currencyName: string
    currencyExternalCode: string
    currencyFactor: number
    denominationId: number
    denominationName: string
    denominationExternalCode: string
    denominationFactor: number
  }
  
  export class Calendars {
    productCode: number
    hideAccounts: boolean
    calendarId: number
    calendarName: string
    holiday: string
    dayOfWeek: number
    year: number
    month: number
    day: number
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
    period: string
  }
  
  export class Loans {
    productCode: number
    hideAccounts: boolean
    rediscountNumber: number
    debtorName: string
    guaranteeFund: string
    relation: string
    relationDocumentNumber: string
    paymentModality: string
    amortizationType: string
    amortizationCode: string
    promissoryNoteNumber: number
    rateChangeFrequency: string
    investmentCityName: string
    gracePeriod: string
    paymentType: number
    stampDutiesNumber: number
    dutiesExemptPromise: number
    bonusNumber: number
    bonusYear: number
    totalFees: number
    paymentValue: number
    attorneyFees: number
    projectedValue: number
    fixedFeeValue: number
    fixedCapitalValue: number
    principalBalance: number
    loanValue: number
    rediscountRate: number
    passiveRate: number
    commissionRate: number
    variableRateValue: number
    nonpaymentRate: number
    cosignerDocumentNumber: string
    mortgageDeed: string
    notaryNumber: string
    propertyRegistration: string
    planDescription: string
    registrationOffice: string
    resourcesAllocation: string
    beneficiaryAddress: string
    planType: string
    operationType: string
    rateName: string
    rateModeName: string
    loanTermCode: string
    loanTerm: number
    paymentFrequencyCode: string
    paymentFrequency: number
    variableRateCode: string
    basicPoints: any
    additionalPoints: number
    variableRateFrequencyCode: string
    paymentFrequencyDescription: string
    interestFrequencyDescription: string
    paymentTypeDescription: string
    variableRatePeriod: number
    zeroSpecialRate: string
    nominalRate: number
    securityAssociated: string
    originalQualification: string
    initialQualification: string
    economicDestinationCode: number
    economicDestinationName: string
    recordNumber: number
    rediscountBankCode: number
    rediscountPercentage: number
    commissionPercentage: number
    commissionType: string
    secondRediscountPercentage: number
    lifeInsuranceIncluded: string
    lifeInsuranceRate: number
    vehicleInsuranceIncluded: string
    regularPaymentsExcluded: string
    initialOverride: string
    disbursementAccountType: string
    disbursementSequence: string
    importExport: string
    importProduct: string
    importCountry: string
    exportCountry: string
    exportProduct: string
    tariffPosition: string
    finalExportName: string
    investmentDepartment: string
    partialDisbursement: string
    loanStatus: string
    creditExtraQuotaIncluded: string
    irregularPayment: string
    vehicleInsuranceValue: number
    distributorDocumentNumber: string
    distributorName: string
    nextPaymentDate: string
    firstPaymentDate: string
    periodName: number
    attorneyName: number
    attorneyPhoneNumber: number
    attorneyAccountNumber: number
    expirationDate: string
    mortgageDeedDate: string
    recordDate: string
    creditLimitCodeNumber: number
    exportId: number
    dtfPoints: number
    factor: number
    xtCode: string
    requestNumber: number
    creditModality: string
    creditAuthorizationNumber: string
    enterpriseName: string
    enterpriseDocumentNumber: number
    stateBranch: string
    stateInvestment: string
    importerExporter: string
    productExport: string
    productImport: string
    countryDestinationExport: string
    countryDestinationImport: string
    finalExporterName: string
    finalExporterId: number
    fieldNotSpecified: string
    exemptStampWarranty: string
    mortgageDeedNotary: string
    mortgageDeedPropertyRegistration: string
    mortgageDeedOffice: string
    destinationResources: number
    state: string
    currentEmployeesNumber: number
    futureEmployeesNumber: number
    lastYearBalance: number
    activeLevel: number
    legalRepresentativePosition: string
    authorizedBy: string
    legalRepresentativeDocument: string
    issueDocumentEntity: string
    frequencyBetweenPayments: number
    loanDate: string
    destinationSector: number
    creditLine: string
    percentage: number
    warrantyType: string
    qualification: string
    qualificationDate: string
    ifiProgram: string
    creditDestination: string
    observations: string
    amortizationTypeFINDETER: string
    totalSales: number
    marginIncrement: number
    incrementTargetMargin: number
    targetMarginDate: string
    increaseSale: number
    increaseTargetSale: number
    increaseSaleDate: string
    destinationExport: string
    newProductsTarget: string
    comments: string
    loanBranch: string
    generalField1: string
    generalField2: string
    generalField3: string
    generalField4: string
    generalField5: string
    generalField6: string
    generalField7: string
    formName: string
    effectiveRate: number
    warrantyKind: string
    economicDestination: string
    dtfAnnual: number
    indicator: string
    stampOfLoan: string
    branchAddress: string
    branchTelephone: string
    creditClassification: number
    capitalPaymentFrequency: string
    rediscountRateValue: string
    beneficiaryDocumentType: string
    titularDocumentType: string
    rediscountRateCode: string
    rediscountValue: number
    arrearsDaysNumber: number
    extensionsNumber: number
    causationStartDate: string
    paymentLastDate: string
    paymentExtendidaDate: string
    arrearsStartDate: string
    capitalProvisionedValue: number
    interestProvisionedValue: number
    othersProvisionedValue: number
    defeatedCapitalValue: number
    defeatedInterestValue: number
    defeatedInsuranceLifeValue: number
    balanceCapitalCancellationValue: number
    previousInterestValue: number
    currentInterestValue: number
    previousArrearsValue: number
    currentArrearsValue: number
    capitalBalanceDate: number
    interestBalanceDate: number
    causationSuspensionInterest: number
    arrearsBalanceCharge: number
    arrearsSuspensionCharge: number
    balanceLifeInsurance: number
    balanceVehicleInsurance: number
    referenceNumber: number
    creditLetterNumber: string
    loanDestinationCode: number
    additionalPointsValue: string
    creditNumber: string
  }
  
  export class Candidates {
    productCode: number
    hideAccounts: boolean
    candidateId: number
    commercialName: string
    subscriptionDate: string
    mcc: string
    ac: string
    regionalId: number
    regionalName: string
    sectionalId: number
    sectionalName: string
    shoppingCentersName: string
    coverageName: string
    coverageId: number
    shoppingCentersId: number
    zoneId: number
    zoneName: string
    candidateExternalCode: string
    candidateAdditionalCode: string
    commercialProducts: string
    directCompetence: string
  }
  
  export class Sales {
    productCode: number
    hideAccounts: boolean
    regionalId: number
    regionalName: string
    sectionalId: number
    sectionalName: string
    zoneId: number
    zoneName: string
    salesRepresentativeName: string
    businessKeyAspectId: number
    salesRepresentativeCode: number
    referencedSalesRepresentativeCode: number
    businessDate: string
    description: string
    quantification: number
    semaphore: number
    enterpriseSalesPercentage: number
    personalSalesPercentage: number
    unitsId: number
    priorityId: number
    measureId: number
    betesaId: number
    proposedSolutionId: number
    closureRangeId: number
    appointmentId: number
    objectiveId: number
    what: string
    when: string
    attendantName: string
    scheduleTime: string
    attendeeId: number
  }
  
  export class PensionFunds {
    productCode: number
    hideAccounts: boolean
    name: string
    pensionFundCode: string
    affiliatedDocumentNumber: number
  }
  
  export class Http {
    productCode: number
    hideAccounts: boolean
    uri: string
    method: string
    response: string
    parameters: Parameter2[]
  }
  
  export class Parameter2 {
    parameterName: string
    value: string
  }
  
  export class Reports {
    productCode: number
    hideAccounts: boolean
    reportName: string
    reportUser: string
    reportUserPassword: string
    reportDatabaseName: string
    reportDesType: string
    reportDesFormat: string
  }
  
  export class Remittances {
    productCode: number
    hideAccounts: boolean
    voucherNumber: number
    newVoucherNumber: number
    correctionType: number
    topCorrectionType: number
    totalChecks: number
    newTotalChecks: number
    depositNumber: number
    newDepositNumber: number
    adjustmentValue: number
    debitAdjustmentValue: number
    creditAdjustmentValue: number
    customerErrorValue: number
    topCustomerErrorValue: number
    correctionCauseCode: number
    topCorrectionCauseCode: number
    totalAdjustments: number
    totalDebitAdjustments: number
    totalCreditAdjustments: number
    originalBranchId: string
    reference1: string
    reference2: string
    topChecksValue: number
    remittanceTypeId: number
    modifiedRemittanceTypeId: number
    topRemittanceTypeId: number
    remittanceModified: boolean
    remittanceQuotaVerify: boolean
    voucherNumberConfirm: number
  }
  
  export class Stationery {
    productCode: number
    hideAccounts: boolean
    serialCode: number
    serialExternalCode: string
    admissionDate: string
    departureDate: string
    productType: number
    documentTypeId: number
    documentStatusId: number
    documentStatusExternalCode: string
    planExternalCode: string
    initialRange: string
    rangeValue: number
    newInitialRange: string
    queryType: string
    finalRange: string
    newFinalRange: string
    beneficiaryAccount: string
    accountName: string
    annotations: string
    annotationCode: string
    concept: string
    beneficiary: string
    responsibleNoun: string
    responsibleDocumentNumber: string
    sequence: string
    beneficiaryType: number
    auditUserCode: string
    auditUserId: number
    auditUserName: string
    inventoryBalanceExternalCode: string
    fixedAuditExistence: number
    auxResponsibleNounCodes: string
    fixedVaultBalance: number
    fixedVaultDifference: number
    fixedCashBalance: number
    fixedCashDifference: number
    fixedTotalCash: number
    availableBalance: number
    canceledBalance: number
    outstandingBalance: number
    printedBalance: number
    usedBalance: number
  }
  
  export class CertificatesOfDeposit {
    productCode: number
    hideAccounts: boolean
    certificateNumber: number
    certificateBlockType: number
    blockKey: number
    certificateStatus: number
    receiptNumber: string
    freezingMotives: string
    interestsDistributionCode: string
    beneficiaryDocumentNumber: string
    secondBeneficiaryName: string
    secondBeneficiaryLastName: string
    interestsAccountType: number
    interestsAccountNumber: string
    secondBeneficiaryMiddleName: string
    secondBeneficiaryIssuanceCity: string
    thirdBeneficiaryName: string
    thirdBeneficiaryLastName: string
    thirdBeneficiaryMiddleName: string
    thirdBeneficiaryIssuanceCity: string
    openingDays: number
    secondDocumentTypeId: number
    interestRateCode: string
    incrementRate: number
    incrementCode: number
    incrementCodeValue: number
    incrementTerm: number
    thirdDocumentTypeId: number
    secondEnterpriseName: string
    thirdEnterpriseName: string
    secondCustomerType: string
    thirdCustomerType: string
    hostEnterpriseCode: string
    serviceType: string
    dateSettlement: string
    expirationDate: string
    lastExpirationDate: string
    redemptionDate: string
    lastInterestPaymentDate: string
    nextInterestPaymentDate: string
    lastTransactionDate: string
    causationProvisionDate: string
    extensionDate: string
    serviceValue: number
    dailyValue: number
    certificateValue: number
    certificateBalance: number
    cancellationValue: number
    nominalRate: number
    baseRatePoints: number
    expirationRate: number
    renewalRate: number
    taxRate: number
    deliveryType: string
    numberTitle: string
    shortName: string
    currencyCode: string
    titleState: string
    office: string
    flatNumber: string
    titleValue: string
    currentBalance: number
    paymentCancelValue: number
    blockValue: string
    interestRate: number
    nit: string
    renovationRate: number
    exemptCode: string
    anticipateInterestCode: string
    expeditionDate: string
    lastDateInterest: string
    paymentDate: string
    dailyValueTitle: string
    internalDistributionCode: string
    internalAccountTypeCode: string
    internalAccountTypeNumber: string
    accountingCode: string
    mailCode: string
    languageCode: string
    typeLinkCode: string
    custodyCode: string
    fractionationCode: string
    userCode4: string
    userCode5: string
    userCode6: string
    userCode7: string
    userCode8: string
    userCode9: string
    userCode10: string
    userAmount1: number
    userAmount2: number
    userAmount3: number
    userAmount4: number
    userAmount5: number
    userAmount6: number
    userAmount7: number
    userAmount8: number
    userAmount9: number
    userAmount10: number
    userDate1: string
    userDate2: string
    userDate3: string
    userDate4: string
    userDate5: string
    userDate6: string
    userDate7: string
    userDate8: string
    userDate9: string
    userDate10: string
    interestValue: number
    retentiveValue: number
    interestTotalValue: number
    paymentTotalValue: number
    keyHolder: string
    dateExpiresGrace: string
    allowFractionationCode: string
    renovationIndRateCode: string
    basePointsRenovation: number
    effectiveRate: number
    ownerOffice: string
    blockCode: string
    motive: string
    company: string
    applicationCode: string
    accountNumberApplication: string
    blockDate: string
    tradeNumber: string
    actionType: string
    noveltyType: string
    operationValue: number
    operationType: number
    taxRateDescription: string
    term: string
    paymentFrecuency: string
    titleType: string
    linkCode: string
    holderName: string
    holderDocumentType: string
    holderDocumentNumber: string
    documentExpeditionCity: string
    holderAddress: string
    holderAddressCity: string
    holderTelephone: string
    beneficiaryAddress1: string
    beneficiaryCity1: string
    beneficiaryTelephone1: string
    beneficiaryAddress2: string
    beneficiaryCity2: string
    beneficiaryTelephone2: string
    baseRatePointDescription: string
  }
  
  export class Trust {
    productCode: number
    hideAccounts: boolean
    debitBankCode: string
    hasAnnualIncrease: boolean
    trustBlock: number
    origin: number
    totalParticipants: number
    trustNumber: number
    trustType: number
    trustTypeExternalCode: string
    beneficiaryNumber: number
    commissionValue: number
    unitsValue: number
    unitsNumber: number
    periodicSavingValue: number
    openingDate: string
    openingValue: number
    trustTerm: number
    paymentPeriodCode: string
    contributionsPaymentType: string
    contributionType: string
    totalBeneficiaries: number
    annotations: string
    debitAccountType: number
    debitAccountNumber: string
    termDescription: string
    customerRelationship: string
    hideCreditCardNumber: boolean
    participantId1: number
    participantId2: number
    participantId3: number
    participantName1: string
    participantName2: string
    participantName3: string
    collectivePortfolioType: string
    participantIdInvestmentAccount: number
    investmentAccountNumber: string
    participantNameInvestmentAccount: string
    investmentAccountStatus: string
    constitutionDateInvestmentAccount: string
    paymentModalityEfficiency: string
    blockingCause: string
    gracePeriod: number
    parentInvestmentAccountNumber: string
    exchangeBalanceInvestmentAccount: number
    availableBalanceInvestmentAccount: number
    totalBalanceInvestmentAccount: number
    penaltyRate: number
    penaltyValue: number
    contributionValue: number
    comissionValue: number
    previousBalance: number
    nextBalance: number
    beneficiaryId1: number
    beneficiaryId2: number
    beneficiaryId3: number
    beneficiaryName1: string
    beneficiaryName2: string
    beneficiaryName3: string
    expeditionPlace1: string
    expeditionPlace2: string
    expeditionPlace3: string
    expeditionPlace4: string
    expeditionPlace5: string
    expeditionPlace6: string
    expeditionDate1: string
    expeditionDate2: string
    expeditionDate3: string
    expeditionDate4: string
    expeditionDate5: string
    expeditionDate6: string
    withdrawalValue: number
    actualWithdrawalValue: number
    trustTypeId: string
    trustConstitutionJson: string
    participantPersonType1: string
    participantIdType1: string
    beneficiaryPersonType1: string
    beneficiaryIdType1: string
    beneficiaryPersonType2: string
    beneficiaryIdType2: string
    beneficiaryPersonType3: string
    beneficiaryIdType3: string
    constitutionBranchName: string
  }
  
  export class ChecksTo {
    productCode: number
    hideAccounts: boolean
    newTransactionId: number
    checkType: number
  }
  
  export class CashierChecks {
    productCode: number
    hideAccounts: boolean
    cashierCheckNumber: number
    beneficiary: string
    beneficiaryDocumentType: string
    beneficiaryDocumentNumber: string
    purchaser: string
    purchaserDocumentNumber: string
    purchaserDocumentType: string
    concept: string
    cashierCheckValue: number
    paymentType: number
    chargeCommission: string
    temporalValue: number
    taxValue: number
    restrictionCode: string
  }
  
  export class BankingCorrespondents {
    productCode: number
    hideAccounts: boolean
    correspondentCode: string
    stablishmentName: string
    correspondentDocumentNumber: string
    bankBalance: number
    correspondentBalance: number
    correspondentBranchCode: string
  }
  
  export class Signatures {
    productCode: number
    hideAccounts: boolean
    dryStamp: number
    inkStamp: number
    protector: string
    accountConditions: string
    hostModificationDate: string
    signaturesNumber: number
    totalSignatureCards: number
    additionalCopies: number
    accountStatus: string
    accountName: string
    nit: string
    ownOffice: number
    statusSignaturesDetails: string
    changeType: string
    changeDescription: string
    hostValidDate: string
    sequence: number
    position: number
    comments: string
    signature: string
    transmittedBytes: string
    pendingBytes: string
    totalItems: number
  }
  
  export class Taxes {
    productCode: number
    hideAccounts: boolean
    taxExternalCode: string
    taxWithholdingExempt: boolean
    taxCode: number
    taxName: string
    section8020: string
    section3900: number
    section96: string
    referenceNumber: string
    formNumber: string
    taxableYear: number
    importerIdentification: string
    declarantIdentification: string
    adhesiveNumberConfirm: string
    taxConcept: string
    userPaymentType: string
    taxPeriod: string
    declarationRegularity: string
    printed: string
    taxPaymentType: string
    ownCheckAccountNumber: string
    cashDelivery: boolean
    isCardPayment: boolean
    affectationType: string
    purchaseValue: number
    repoPayment: number
    taxTitlePayment: string
    tidisAmount: number
    titleBankCodeUse: string
    section415: string
    branchManagementCode: number
    internalTaxCode: number
    taxConceptCode: number
    taxType: string
    taxFormType: string
    voucherNumber: number
    sectionalType: string
    requiredPeriod: string
    establishmentCode: string
    taxTerm: string
    cashTransport: string
    checkDigit: number
    taxableYearInitial: number
    taxableYearEnd: number
    taxPeriodInitial: string
    taxPeriodEnd: string
    declarationPeriod: string
    validatePaymentDeadLine: string
    taxAccount: string
    bizagiNumber: string
    sealNumber: string
    checkDigit2: number
  }
  
  export class Notes {
    productCode: number
    hideAccounts: boolean
    concept: string
    starterTransaction: string
    balanceTransaction: number
    topDetail: string
    previousTransaction: string
    agreementValue: number
    sumValue: number
    staticField: string
    optionalComment: string
    captureDate: string
    operationMotive: string
    otherNotes: string
    hostAccountNumber: string
    additionalInfo: string
    generalLedgerAccount: string
    operationCode: number
    originalTransaction: string
    thirdValue: number
    firstField: string
    secondField: string
    thirdField: string
    fourthField: string
    fifthField: string
    sixthField: string
    debitsValue: number
    creditsValue: number
    unbalancedAmount: number
    explanation: string
  }
  
  export class FinancialPortfolio {
    productCode: number
    hideAccounts: boolean
    productType: string
  }
  
  export class GainAndLosses {
    productCode: number
    hideAccounts: boolean
    expenseValue: number
    expenseType: string
    simplifiedScheme: string
    taxRetention: number
    commonSystem: string
    taxICAValue: number
    invoiceTax: string
    taxWithholdingValue: number
    invoiceNumber: number
    transactionDetail: string
    dependenceCode: string
  }
  
  export class Insurances {
    productCode: number
    hideAccounts: boolean
    numberPolicy: number
    debtorInformation: string
    debtorAddress: string
    debtorTelephoneNumber: string
    debtorCity: string
    debtorDepartment: string
    debtorDocumentType: string
    debtorDocumentNumber: string
    insuredName: string
    insuredAddress: string
    insuredTelephoneNumber: string
    insuredCity: string
    insuredDepartment: string
    insuredDocumentType: string
    insuredDocumentNumber: string
    insuranceChangesInformation: string
    insuredCityCode: string
    text: string
    insuredProfessionCode: string
    insuredProfession: string
    insuredAddressEmailCode: string
    insuredAddressEmail: string
    insuredMaritalStatusCode: string
    insuredMaritalStatus: string
    insuredRelationshipCode: string
    insuredRelationship: string
    insuredAddressTypeCode: string
    insuredAddressEmailType: string
    debtorAddressEmail: string
    debtorAddressEmailType: string
    insuredAddressType: string
    insuredDateVto: string
    debtorAddressType: string
    insuredNumberChildren: number
    insuredAddressFarm: string
    insuranceYear: number
    insuranceMonth: number
    insuranceDay: number
    insuranceCustomerOrder: string
    typePolicy: string
    sellerCode1: string
    sellerCode2: string
    insuredSurname: string
    insuredSecondSurname: string
    debtorName: string
    debtorSurname: string
    debtorSecondSurname: string
    insuredCityFarm: string
    insuredDepartmentFarm: string
    insuredTelephoneNumberFarm: string
    insuredTypeFarm: string
    insuredType: string
    insuredFarmStratum: number
    farmZone: string
    residentialUnit: string
    ipc: string
    validityYear: number
    validityMonth: number
    validityDay: number
    updateYear: number
    updateMonth: number
    updateDay: number
    expeditionCity: string
    expeditionDate: string
    novelty: string
    bonusPercentage: string
    noveltyIndicator: string
    mailCity: string
    mailAddress: string
    mailDepartment: string
    mailTelephoneNumber: string
    consecutive: string
    insuredFarmCode: string
    insuredFarmDescription: string
    coverageCode: string
    protection: string
    insuredPreviousValue: number
    insuredCurrentValue: number
    monthlyPremium: number
    monthlyPremiumIva: number
    insuredCityBirth: string
    insuredDateBirth: string
    insuredSex: string
    insurancePlan: string
    insuredValue: number
    accidentValue: number
    diseaseValue: number
    hospitalizationValue: number
    increaseValue: number
    payment: number
    bonus: number
    effectiveDate: string
    effectiveTime: string
    cityPolicy: string
    policyCoverage: number
    ivaValue: number
    expirationDate: string
    anotherRelationship: string
    incomePeriod: string
    beneficiaryType1: string
    beneficiaryName1: string
    beneficiaryValue1: number
    beneficiaryRelationship1: string
    beneficiaryType2: string
    beneficiaryName2: string
    beneficiaryRelationship2: string
    beneficiaryValue2: number
    beneficiaryType3: string
    beneficiaryName3: string
    beneficiaryRelationship3: string
    beneficiaryValue3: number
    beneficiaryType4: string
    beneficiaryName4: string
    beneficiaryRelationship4: string
    beneficiaryValue4: number
    beneficiaryValue5: number
    beneficiaryType5: string
    beneficiaryName5: string
    beneficiaryRelationship5: string
    beneficiaryType6: string
    beneficiaryName6: string
    beneficiaryRelationship6: string
    beneficiaryValue6: number
    transactionNumber: string
    operationType: string
    productDescription: string
    responsibleUser: string
    barcode: string
    textBarcode: string
  }
  
  export class Forms {
    productCode: number
    hideAccounts: boolean
    productType: string
    productNumber: string
    nameAccountHolder: string
    nameAccountJointHolder1: string
    nameAccountJointHolder2: string
    nameAccountJointHolder3: string
    nameAccountJointHolder4: string
    nameAccountJointHolder5: string
    typeDocumentAccountJointHolder1: string
    typeDocumentAccountJointHolder2: string
    typeDocumentAccountJointHolder3: string
    typeDocumentAccountJointHolder4: string
    typeDocumentAccountJointHolder5: string
    typeDocumentAccountHolder: string
    numberDocumentAccountHolder: string
    numberDocumentAccountJointHolder1: string
    numberDocumentAccountJointHolder2: string
    numberDocumentAccountJointHolder3: string
    numberDocumentAccountJointHolder4: string
    numberDocumentAccountJointHolder5: string
    addressAccountHolder: string
    cityAccountHolder: string
    departmentAccountHolder: string
    nameEntity: string
    productName: string
    openingDate: string
    dateCancellation: string
    expeditionDay: string
    expeditionMonth: string
    expeditionYear: string
    sign: string
    balanceProduct: number
    currency: string
    observations: string
    observations2: string
    personSigning: string
    titlePersonSigning: string
  }
  
  export class PinPads {
    productCode: number
    hideAccounts: boolean
    branchId: number
    peripheralId: number
    readTimeout: number
    peripheralPortId: number
    baudRate: number
    dataLength: number
    stopBits: number
    parity: number
    cancelAllowed: number
    provider: string
    sessionKey: string
  }
  
  export class MagneticStripeReader {
    productCode: number
    hideAccounts: boolean
    branchId: number
    peripheralId: number
    readTimeout: number
    peripheralPortId: number
    baudRate: number
    dataLength: number
    stopBits: number
    parity: number
    cancelAllowed: number
    provider: string
    sessionKey: string
  }
  
  export class Printers {
    productCode: number
    hideAccounts: boolean
    registerNumber: string
    productNumber: string
    withdrawalType: string
    walletPaymentType: string
    originAccountNumber: string
    destinationAccountNumber: string
    agreementCode: string
    documentNumber: string
    correspondentCode: string
    compensationValue: string
    paymentMedia: string
    totalValue: string
    availableBalance: string
    transactionTotalValue: string
    depositorId: string
    reference1: string
    reference2: string
    reference3: string
    operationRegisterDescription: string
    voucherDescription: string
    agreementName: string
    otherValue: number
    checkValue: number
    cashValue: number
    accountValue: number
    checkNumber: string
    trm: number
    cardNumber: string
    accountNumber: string
    cashiersChecks: number
    term: number
    isPrinterVoucher: boolean
    bonusType: string
    beneficiaryName: string
    beneficiaryDocumentNumber: string
    authorizedName: string
    authorizedDocumentNumber: string
    bonusValue: string
    paymentMaturityValue: string
    obligationNumber: string
    servicePointCode: string
  }
  
  export class FingerPrints {
    productCode: number
    hideAccounts: boolean
    idRange: number
    serviceId: number
    initialRange: number
    finalRange: number
    percentage: number
    hasFingerprint: number
  }
  
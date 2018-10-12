export default {
  // Данные вытаскиваются из старой базы из таблицы documents
  // По position_id вернется либо обычная закупка ПГ, либо Особая закупка ПГ, определим их так:
  // Position - Закупка ПГ
  // SpecialPurchase - Особая закупка ПГ (Document.type == Order44PurchaseFromSingleSupplierNoncompetitiveDocument)
  // Закупка ПГ всегда содержит ссылку на один и только один Объект закупки, определим так:
  // Lot - Объект закупки
  // Особая закупка ПГ всегда содержит ссылку на один, либо несколько Особых закупок по КВР
  // SpecialPosition - Особая закупка по КВР (Document.type == Order44PurchaseFromSingleSupplierNoncompetitiveSpendingDocument)
  // Данные копируются либо переносятся по алгоритму в модели:
  // - Purchase (общие атрибуты берутся у Куратора и при смене куратора должны обновиться)
  // - CustomerRequirement, если атрибут уникален для каждой организации...
  id: "Идентификатор Закупки ПГ в старой базе",
  purchase_code: "Идентификационный код закупки" +
    "string" +
    "old - Position.purchase_code " +
    "old - SpecialPosition.purchase_code" +
    "new - CustomerRequirement.purchase_code" +
    "example - 183165531719116550100100030006820244",
  placing_way: "Способ определения поставщика (подрядчика, исполнителя)" +
    "В соответствии со структурой элемента nsiPlacingWay " +
    "old - Position.purchase_type == nsiPlacingWay.name? " +
    "old - для особых - всегда EP44" +
    "new - Purchase.placing_way_id соответствующий nsiPlacingWay.placingWayId ?",
  is_special: "Особая закупка" +
    "Document.type == Order44PurchaseFromSingleSupplierNoncompetitiveDocument - Особая"+
    "Document.type == Order44PurchaseFromSingleSupplierNoncompetitiveSpendingDocument - вложенная"+
    "bool" +
    "new - Purchase.is_special" +
    "У совместных не бывает и заполняется только если nsiPlacingWay.code == EP44",
  contract_single_customer_reason: {
    // У совместных не бывает и заполняется только если nsiPlacingWay.code == EP44 и is_special == false
    // Основание заключения контракта с единственным поставщиком (подрядчиком, исполнителем)
    // ref nsiContractSingleCustomerReason
  },
  special_purchase_type: 'Тип особой закупки' +
    'У совместных не бывает и заполняется только если nsiPlacingWay.code == EP44 и is_special == true' +
    'ref nsiSpecialPurchase' +
    "SpecialPurchase.document_kind[:code] == nsiSpecialPurchase[:code]" +
    "old - SpecialPurchase.document_kind[:code]" +
    "new - special_purchase_type_id" +,
  object_info: "Наименование объекта закупки" +
    'только для обычных закупок, поскольку у особых этот атрибут в ПГ отсутствует и редактируется на этапе заявки' +
    "string" +
    "old - Position.document_kind[:code]" +
    "new - Purchase.object_info" ,
  undefined: false,
  is_joint_bidding_purchase: true,
  joint_bidding_organization: {
    // Организация-Организатор совместной закупки (не путать с Организацией-Куратором совместной закупки)
    // Структура в соответствии с nsiOrganization
  },
  max_price: "Начальная (максимальная) цена контракта" +
    "money в копейках" +
    "old - title" +
    "new - max_price" +
    "example - 23500",

  InitialAmount: {
    total: 5000,
    currentYear: 3000,
    firstYear: 1000,
    secondYear: 500,
    subsecYears: 500
  },
  InitialAmountMethods: {
    method: "",
  },
  application_guarantee: {
    amount: 34
  },
  contract_guarantee: {
    amount: 234,
    return_condition: "",
    return_term: {},
  },
  preferences: [],
}
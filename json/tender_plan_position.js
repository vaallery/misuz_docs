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
  // - Purchase (общие атрибуты берутся только у Куратора и при смене куратора должны обновиться)
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
  undefined: "Невозможно определить объём подлежащих выполнению работ по техническому обслуживанию и (или) ремонту техники, оборудования, оказанию услуг связи, общественного питания, переводчика, проведения оценки, перевозки грузов, пассажиров и багажа, юридических, медицинских, образовательных, гостиничных услуг" +
    "bool" +
    "Кроме особых" +
    "old - Position.impossibly_determination_amount" +
    "new - CustomerRequirement.undefined" ,
  is_joint_bidding_purchase: "Совместные торги" +
    "bool" +
    "Аукционы, Конкурсы" +
    "old - Position.impossibly_determination_amount" +
    "new - Purchase.is_joint_bidding_purchase",
  joint_bidding_organization: {
    // Организация-Организатор совместной закупки (не путать с Организацией-Куратором совместной закупки)
    // Структура в соответствии с nsiOrganization
  },
  max_price: "Начальная (максимальная) цена контракта" +
    "money в копейках" +
    "old - Position.total" +
    "old - SpecialPosition.total" +
    "new - CustomerRequirement.max_price" +
    "example - 23500",

  InitialAmount: {
    // Транслируем из Закупки ПГ и не сохраняем
    // Данные приведены для особой закупки, для обычной возможно наименования будут немного отличаться
    total:       'SpecialPosition.total',
    currentYear: 'SpecialPosition.total_amount_current_year',
    firstYear:   'SpecialPosition.total_amount_first_year',
    secondYear:  'SpecialPosition.total_amount_second_year',
    subsecYears: 'SpecialPosition.total_amount_other_years'
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
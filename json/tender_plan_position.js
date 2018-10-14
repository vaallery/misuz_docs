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
  placing_way: "Способ определения поставщика (подрядчика, исполнителя)" +
    "В соответствии со структурой элемента nsiPlacingWay " +
    "old - Position.purchase_type == nsiPlacingWay.name? " +
    "old - для особых - всегда EP44" +
    "new - Purchase.placing_way_id соответствующий nsiPlacingWay.placingWayId ?",
  purchase_code: "Идентификационный код закупки" +
    "string" +
    "old - Position.purchase_code " +
    "old - SpecialPosition.purchase_code" +
    "example - 183165531719116550100100030006820244",
  object_info: "Наименование объекта закупки" +
    'только для обычных закупок, поскольку у особых этот атрибут в ПГ отсутствует и редактируется на этапе заявки' +
    "string" +
    "old - Position.document_kind[:code]" +
    "new - Purchase.object_info" ,
  undefined: "Невозможно определить объём подлежащих выполнению работ по техническому обслуживанию и (или) ремонту техники, оборудования, оказанию услуг связи, общественного питания, переводчика, проведения оценки, перевозки грузов, пассажиров и багажа, юридических, медицинских, образовательных, гостиничных услуг" +
    "bool" +
    "Кроме особых" +
    "old - Position.impossibly_determination_amount",

  joint_bidding_organization: {
    // Организация-Организатор совместной закупки (не путать с Организацией-Куратором совместной закупки)
    // Структура в соответствии с nsiOrganization
  },

  InitialAmount: {
    // Транслируем из Закупки ПГ и не сохраняем
    // Данные приведены для особой закупки, для обычной возможно наименования будут немного отличаться
    total:       'SpecialPosition.total',
    currentYear: 'SpecialPosition.total_amount_current_year',
    firstYear:   'SpecialPosition.total_amount_first_year',
    secondYear:  'SpecialPosition.total_amount_second_year',
    subsecYears: 'SpecialPosition.total_amount_other_years'
  },

  max_price: "Начальная (максимальная) цена контракта" +
    "money в копейках" +
    "old - Position.total" +
    "old - SpecialPosition.total" +
    "new - CustomerRequirement.max_price" +
    "example - 23500",

  InitialAmountMethods: {
    // для особой храним в таблице initial_amount_methods. Связь CustomerRequirement has_many: InitialAmountMethods
    // для обычных транслируем из Закупки ПГ
    // Position.initial_amount_methods.each do |iam|
    is_custom: 'iam.initial_amount_method_type == "Метод определения и обоснования НМЦК не предусмотрен ч.1 ст.22 44-ФЗ"',
    type: 'is_custom ? "" : iam.initial_amount_method_type ',
    name: 'iam.initial_amount_method_name',
    inability_foundation: 'iam.initial_amount_method_inability_foundation',
    justification: 'iam.initial_amount_method_justification',
  },

  purchase_kind: "Тип закупки" +
    "string" +
    "Только для обычных закупок ПГ" +
    "У особых задается отдельно для каждого product" +
    "old - Position.purchase_kind",

  products: [
    // для обычной закупки -  массив товаров из Position.lot.data[:lot]
    // для овобой закупки не заполняется
  ],

  periodicity: "Периодичность поставки товаров, выполнения работ, оказания услуг" +
    "string" +
    "для не особых",

  preferences: [],
}
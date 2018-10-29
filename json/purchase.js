export default {
  id: 'Идентификатор закупки',
  is_special: "Особая закупка" +
    "Document.type == Order44PurchaseFromSingleSupplierNoncompetitiveDocument - Особая" +
    "Document.type == Order44PurchaseFromSingleSupplierNoncompetitiveSpendingDocument - вложенная" +
    "bool" +
    "new - Purchase.is_special" +
    "У совместных не бывает и заполняется только если nsiPlacingWay.code == EP44",
  it_purchase: "Закупка в области информационных и телекоммуникационных технологий" +
    "bool" +
    "Для обычной закупки берем у заказчика из Закупки ПГ только в первый раз и далее атрибут редактироуется только в заявке" +
    "Для особой значение по умолчанию - false" +
    "old - Position.it_purchase" +
    "new - Purchase.it_purchase",
  object_info: "Наименование объекта закупки" +
    "для совместных сохраняется после согласования заявки" +
    'только для обычных закупок не редактируемое поле' +
    "string" +
    "old - Position.document_kind[:code]" +
    "new - Purchase.object_info",

  tenderPlanPosition: {
    // Транслируем атрибуты Закупки ПГ из старой базы, куратора совместной закупки
    // Если закупка несовместная, то секцию не заполняем
    // Данные в данной секции на фронте не отображаются, не редактируются, а необходимы только для сравнения
  },
  placing_way: "Способ определения поставщика (подрядчика, исполнителя)" +
    "для совместных сохраняется после согласования заявки",

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
    "new - Purchase.special_purchase_type_id",



  is_joint_bidding_purchase: "Совместные торги" +
    "bool" +
    "возможны только для Аукционов и Конкурсов" +
    "old - Position.impossibly_determination_amount" +
    "new - Purchase.is_joint_bidding_purchase",

  joint_bidding_organization: {
    // Организация-Организатор совместной закупки (не путать с Организацией-Куратором совместной закупки)
    // Структура в соответствии с nsiOrganization
    // сохраняется после согласования заявки
  },

  joint_bidding_curator: {
    // Организация-Куратор совместной закупки в урезанном формате nsiOrganization
  },

  max_price: "Начальная (максимальная) цена контрактОВ" +
    "money" +
    "вычислаемое поле = Purchase.CustomerRequirements.sum(&max_price)",

  products: [
    // заполняется только для совместных закупок. Объединяются все продукты по всем требованиям заказчика
    // только на просмотр
  ],

  preferences: [
    //Только для особых.
    // Храним в таблице preferences
    // По умолчанию - пустой массив
  ],

  // preferencesAdd: [
  //   // по умолчанию - пустой массив
  //   // добавление возможно только для обычных закупок
  //   // Purchase has_many preferences
  // ],

  preference_TS44530_value: "Объем привлечения. Требование к поставщику (подрядчику, исполнителю), не являющемуся субъектом малого предпринимательства или социально ориентированной некоммерческой организацией, о привлечении к исполнению контракта субподрядчиков, соисполнителей из числа субъектов малого предпринимательства, социально ориентированных некоммерческих организаций (в соответствии с частью 5 статьи 30 Федерального закона № 44-ФЗ)" +
    "",

  InitialAmountMethods: {
    // для особой храним в таблице initial_amount_methods. Связь CustomerRequirement has_many: InitialAmountMethods
    // для обычных транслируем из Закупки ПГ
    // Position.initial_amount_methods.each do |iam|
    is_custom: 'iam.initial_amount_method_type == "Метод определения и обоснования НМЦК не предусмотрен ч.1 ст.22 44-ФЗ"',
    type: 'is_custom ? "" : iam.initial_amount_method_type ',
    name: 'iam.initial_amount_method_name',
    inability_foundation: 'Обоснование невозможности применения для определения и обоснования НМЦК, методов, указанных в ч.1 ст.22 44-ФЗ' +
      'iam.initial_amount_method_inability_foundation',
    justification: 'Обоснование НМЦК, цены контракта, заключаемого с единственным поставщиком (подрядчиком, исполнителем)' +
      'iam.initial_amount_method_justification',
  },

  // initialAmountMethods: [
  //   {
  //     type: "",
  //     name: "Наименование",
  //     inability_foundation: "Обоснование невозможности применения",
  //     justification: "Обоснование НМЦК, цены контракта",
  //     substantiates: [
  //       {
  //         guid: "",
  //         method: "КП",
  //         supplier: {},
  //         products: [{
  //           id: "",
  //           sum: ""
  //         }]
  //       },
  //       {
  //         guid: "",
  //         method: "КП",
  //         supplier: {},
  //         sum: 0
  //       },
  //     ]
  //   }
  // ],

  // evaluation_criterion: [
  //   {
  //     "name": "Наименование критерия",
  //     "cost": "Стоимостной критерий",
  //     "significance": " Значимость критерия",
  //     "add_info": "Дополнительная информация о содержании и порядке оценки по критерию",
  //     "indicators": "Критерий оценки с показателями",
  //     "limit_value": "Предельное значение критерия",
  //     "evaluation_procedure": "Порядок оценки"
  //   },
  // ],

  documentation: {
    // объединяем сюда отдельные атрибуты закупки, которые относятся к документации

    contract_count: 'Количество контрактов, Право заключения контракта с несколькими участниками закупки в случаях, указанных в части 10 статьи 34 Федерального закона 44-ФЗ	По умолчанию - 0',
    criteria_info: {
      // 'Критерии оценки' +
      // 'В базе пока будет храниться как json в атрибуте purchase.criteria_info' +
      // 'атрибут заполняется на фронте только для электронных конкурсов и электронного запроса предложений' +
      // 'описание структуры json должно полностью соответствовать описанию из documentationZPType.criterisInfo и как частный случай - описанию из documentationOKType.criterisInfo'

    },
    modifiable:	'bool	Возможно изменить предусмотренные контрактом количество товара, объем работ или услуги	По умолчанию - false',
    research:	'bool	Выполнение научно-исследовательских, опытно-конструкторских, технологических работ или оказание консультационных услуг	По умолчанию - false',

  }
}
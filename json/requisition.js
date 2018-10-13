export default {
  id: 123,
  purchase: {
    tenderPlanPosition: {
      // Транслируем атрибуты Закупки ПГ из старой базы, куратора совместной закупки
      // Если закупка несовместная, то секцию не заполняем
      // Данные в данной секции на фронте не отображаются, не редактируются, а необходимы только для сравнения
    },
    placing_way: "Способ определения поставщика (подрядчика, исполнителя)" +
      "для совместных сохраняется после согласования заявки",

    is_special: "Особая закупка" +
      "Document.type == Order44PurchaseFromSingleSupplierNoncompetitiveDocument - Особая" +
      "Document.type == Order44PurchaseFromSingleSupplierNoncompetitiveSpendingDocument - вложенная" +
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
      "new - Purchase.special_purchase_type_id",

    object_info: "Наименование объекта закупки" +
      "для совместных сохраняется после согласования заявки" +
      'только для обычных закупок не редактируемое поле' +
      "string" +
      "old - Position.document_kind[:code]" +
      "new - Purchase.object_info",

    it_purchase: "Закупка в области информационных и телекоммуникационных технологий" +
      "bool" +
      "Для обычной закупки берем у заказчика из Закупки ПГ только в первый раз и далее атрибут редактироуется только в заявке" +
      "Для особой значение по умолчанию - false" +
      "old - Position.it_purchase" +
      "new - Purchase.it_purchase",

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
    preferencesAdd: [
      // по умолчанию - пустой массив
      // добавление возможно только для обычных закупок
      // Purchase has_many preferences
    ],

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

    criteriaInfo: 'Критерии оценки' +
      'В базе пока будет храниться как json в атрибуте purchase.criteria_info' +
      'атрибут заполняется на фронте только для электронных конкурсов и электронного запроса предложений' +
      'описание структуры json должно полностью соответствовать описанию из documentationZPType.criterisInfo и как частный случай - описанию из documentationOKType.criterisInfo',


    initialAmountMethods: [
      {
        type: "",
        name: "Наименование",
        inability_foundation: "Обоснование невозможности применения",
        justification: "Обоснование НМЦК, цены контракта",
        substantiates: [
          {
            guid: "",
            method: "КП",
            supplier: {},
            products: [{
              id: "",
              sum: ""
            }]
          },
          {
            guid: "",
            method: "КП",
            supplier: {},
            sum: 0
          },
        ]
      }
    ],
    evaluation_criterion: [
      {
        "name": "Наименование критерия",
        "cost": "Стоимостной критерий",
        "significance": " Значимость критерия",
        "add_info": "Дополнительная информация о содержании и порядке оценки по критерию",
        "indicators": "Критерий оценки с показателями",
        "limit_value": "Предельное значение критерия",
        "evaluation_procedure": "Порядок оценки"
      },
    ],
  },
  customerRequirement: {
    // Модель СustomerRequirement
  }
}

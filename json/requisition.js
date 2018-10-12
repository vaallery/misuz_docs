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
      "new - Purchase.special_purchase_type_id",

    object_info: "Наименование объекта закупки" +
      "для совместных сохраняется после согласования заявки" +
      'только для обычных закупок не редактируемое поле' +
      "string" +
      "old - Position.document_kind[:code]" +
      "new - Purchase.object_info" ,

    it_purchase: "Закупка в области информационных и телекоммуникационных технологий" +
      "bool" +
      "Для обычной закупки берем у заказчика из Закупки ПГ только в первый раз и далее атрибут редактироуется только в заявке" +
      "Для особой значение по умолчанию - false" +
      "old - Position.it_purchase" +
      "new - Purchase.it_purchase",

    is_joint_bidding_purchase: "Совместные торги" +
      "bool" +
      "Аукционы, Конкурсы" +
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

    products: [],
    preferencesAdd: [
      // по умолчанию - пустой массив
      // добавление возможно только для обычных закупок
      // Purchase has_many preferences
    ],
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
        "significance":" Значимость критерия",
        "add_info":"Дополнительная информация о содержании и порядке оценки по критерию",
        "indicators": "Критерий оценки с показателями",
        "limit_value": "Предельное значение критерия",
        "evaluation_procedure":"Порядок оценки"
      },
    ],
  },
  customerRequirement: {
    // Модель СustomerRequirement
    id: 12,
    tenderPlanPosition: {
      // Транслируем атрибуты Закупки ПГ из старой базы, текущей Организации-Заказчика
      // Данные в данной секции на фронте отображаются, не редактируются, для совместных закупок проверяется идентичность атрибутов
    },
    customer_info: {
      customer: "Организация-Заказчик" +
        "Структура в соответствии с nsiOrganization" +
        "в модели храниться как customer_id",
      responsible_employee: 'Ответственный исполнитель.' +
        'Структура в соответствии с Employee' +
        'responsible_employee_id',
      contract_employee: 'Контрактный управляющий/ответственный контрактной службы' +
        'Структура в соответствии с Employee' +
        'contract_employee_id',
      executive_employee: 'Отвественное должностное лицо' +
        'Структура в соответствии с Employee' +
        'executive_employee_id',
      signatory_employee: 'Лицо, подписывающее контракт' +
        'Структура в соответствии с Employee' +
        'signatory_employee_id',
      plenipotentiary_employee: 'Полномочный представитель в составе Единой комиссии' +
        'Структура в соответствии с Employee',
    },

    application_guarantee: {
      // Обеспечение заявки
      // Переносим из закупки ПГ и храним в таблице guarantees. Доступ к значению через CustomerRequirement.application_guarantee_id
      // с заполнением значений по умолчанию
      amount: "Обеспечение заявки" +
        "money" +
        "Position.contract_security.contract_security_rubles",
      procedureInfo: '',
      settlementAccount:	'40302810700025000795',
      personalAccount:	'ЛР718010011-ДирКП',
      bik:	'49205805'
    },

    contract_guarantee: {
      // Обеспечение исполнения контракта
      // Переносим из закупки ПГ и храним в таблице guarantees. Доступ к значению через CustomerRequirement.contract_guarantee_id
      // с заполнением значений по умолчанию
      amount: "Обеспечение исполнения контракта" +
        "money" +
        "Position.contract_security.contract_security_rubles",
      procedureInfo: '',
      settlementAccount:	'40302810700025000795',
      personalAccount:	'ЛР718010011-ДирКП',
      bik:	'49205805',
      return_condition: "",
      return_term: {
        // начальные значения - пустые
        number: 'integer', option: 'string'
      },
    },

    purchase_base: "Основание для закупки" +
      "Текстовое поле, по умолчанию '' ",
    stage_type: "Тип дат, используемых при определении сроков" +
      "Текстовое поле, по умолчанию '' ",
    stage_begin_from_contract_date: "Начало исчисления срока" +
      "Текстовое поле, по умолчанию '' ",
    stage_term_option: "working_days",
    consignee: "",
    stage_add_info: "",
    periodicity: "",

    amount_kbks:[{kbk: "842 0113 9905930 244 225 225003 101 00000", amount: 215, kbk_type:'Федеральный бюджет'}],
    stages: [],
    substantiates: [],
    proposals: [],
    customerProducts: {
      productGuid: 12,
      amount: 12
    },

    productsStages: [{
      productGuid: "sergserg",
      stageGuid: "sergserg",
    }],

    productsProposals: [
      {
        productGuid: "sergserg",
        proposalGuid: "sergserg",
        cost: "sergserg"
      }
    ],

    contract: {
      accepted_period: "",
      payment_conditions: "",
      not_use_print_form: false,
      not_use_print_form_reason: "",
      add_info_for_print: "",
      changing_contract_conditions: "",
      addition_information_for_tt: "",
      contract_duration: "",
      oneside_rejection: "",
      standard_contract_number: "",
      max_price: 10,
      prepayment:  {
        part: 0,
        term: "",
        conditions: "",
      },
      postpayment: {
        term: "",
        end_date: "31.12.2018",
      },
      warranty: {
        conditions: "",
        term: "",
        info: "",
        manufacturer_info: ""
      },
      supplier: {
        organization: "",
        state: "",
        okpo: "",
        account_number: "",
        bank: "",
        contact_full_name: "",
        contact_email: "",
        contact_phone: "",
        fax: ""
      }
    }
  },
}

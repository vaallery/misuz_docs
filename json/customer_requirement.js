export default {
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

  amount_kbks:[
    // массив записей, который предварительно переносим из Закупки ПГ, храним в таблице amount_kbks
    {
      // пример записи
      kbk: "842 0113 9905930 244 225 225003 101 00000", amount: 215, kbk_type:'Федеральный бюджет'
    }
  ],
  price_options: [
    // массив строк, по умолчанию - пустой массив
  ],

  stage_type: "Тип дат, используемых при определении сроков" +
    "Текстовое поле, по умолчанию '' ",
  stage_begin_from_contract_date: "Начало исчисления срока" +
    "Текстовое поле, по умолчанию '' ",
  stage_term_option: "Исчисление относительных сроков" +
    "текстовое поле, по умолчанию - working_days" +
    "вероятно атрибут не требуется",
  consignee: 'Грузополучатель' +
    'организация в формате dadata',
  products: [
    // Указывается только для особой закупки и разрешено редактирование
  ],

  places: [
    // массив Мест поставки товара
    {
      product_id: 'для особых закупок',
      product_guid: 'для обычных закупок',
      place: 'место поставки товара в формате dadata'
    }
  ],
  stage_add_info: "",
  periodicity: "Периодичность поставки товаров, выполнения работ, оказания услуг" +
    "string" +
    "для особых закупок - редактируемое",


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

  oneside_rejection:'Информация о возможности одностороннего отказа от исполнения контракта в соответствии с положениями частей 8-26 статьи 95 Федерального закона №44-ФЗ' +
    'Boolean',

  max_price: 'Начальная (максимальная) цена контракта' +
    'money' +
    'Для особых тянем из CustomerRequirement.max_price' +
    'Для обычных транслируем из Закупки ПГ',

  contract: {
    // по умолчанию - пустые значения и в базу пока не сохраняем
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
}
export default {
  id: 123,
  purchase: {
    TenderPlanPosition: {
      // Транслируем атрибуты Закупки ПГ из старой базы, куратора совместной закупки
      // Если закупка несовместная, то секцию не заполняем
      // Данные в данной секции на фронте не отображаются, не редактируются, а необходимы только для сравнения
      id: "Идентификатор Закупки ПГ в старой базе",
      placing_way: "В соответствии со структурой элемента nsiPlacingWay " +
        "",

      object_info: "Аренда нежилых помещений",
      undefined: false,
      is_joint_bidding_purchase: true,
      joint_bidding_organization_id: 2345,
      it_purchase: true,
      preferences: "Массив требований ограничений и преимуществ",
    },


    max_price: 2000000,
    products: [],
    preferencesAdd: [],
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
    id: 12,
    maxPrice: 234,
    purchase_base: "",
    price_options: [],
    stage_type: "Абсолютные даты",
    stage_begin_from_contract_date: "с даты заключения контракта",
    stage_term_option: "working_days",
    consignee: "",
    stage_add_info: "",
    periodicity: "",
    customer_info: {
      customer_id: 1,
      responsible_employee: {
        id: 111,
        "email": "e.muratova@tatar.ru",
        "phone": "8(843)222-09-28",
        "last_name": "Муратова",
        "first_name": "Евгения",
        "middle_name": "Сергеевна",
        "position": "начальник отдела бухучёта"
      },
      contract_employee: {
        id: 111,
        "email": "e.muratova@tatar.ru",
        "phone": "8(843)222-09-28",
        "last_name": "Муратова",
        "first_name": "Евгения",
        "middle_name": "Сергеевна",
        "position": "начальник отдела бухучёта"
      },
      signatory_employee: {
        id: 111,
        "email": "e.muratova@tatar.ru",
        "phone": "8(843)222-09-28",
        "last_name": "Муратова",
        "first_name": "Евгения",
        "middle_name": "Сергеевна",
        "position": "начальник отдела бухучёта"
      },
      plenipotentiary_employee: {
        id: 111,
        "email": "e.muratova@tatar.ru",
        "phone": "8(843)222-09-28",
        "last_name": "Муратова",
        "first_name": "Евгения",
        "middle_name": "Сергеевна",
        "position": "начальник отдела бухучёта"
      },
    },
    position: {
      placing_way: {
        placingWayId: "8360978",
        code: "ZK44",
        name: "Название"
      },
      purchase_code: "183165531719116550100100030006820244",
      object_type: 'Тип объекта закупки',
      object_info: "Аренда нежилых помещений",
      undefined: false,
      is_joint_bidding_purchase: true,
      joint_bidding_organization:{
        id: 2345,
        info: 'info'
      },
      max_price: 354,
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
    },
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

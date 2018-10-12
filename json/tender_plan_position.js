export default {
  // Данные вытаскиваются из старой базы из таблицы documents
  id: "Идентификатор Закупки ПГ в старой базе",
  placing_way: "Способ определения поставщика (подрядчика, исполнителя)" +
    "В соответствии со структурой элемента nsiPlacingWay " +
    "в старой безе purchase_type == nsiPlacingWay.name? " +
    "в новеой базе храниться как purchases.placing_way_id соответствующий nsiPlacingWay.PlacingWayId ?",
  purchase_code: "Идентификационный код закупки" +
    "string" +
    "old - purchase_code" +
    "new - purchase_code" +
    "example - 183165531719116550100100030006820244",
  special_purchase_type: 'Тип особой закупки' +
    'ref nsiSpecialPurchase' +
    "string" +
    "old - purchase_code" +
    "new - special_purchase_type_id" +
    "example - 183165531719116550100100030006820244",
  object_info: "Аренда нежилых помещений",
  undefined: false,
  is_joint_bidding_purchase: true,
  joint_bidding_organization: {
    // Организация-Организатор совместной закупки (не путать с Организацией-Куратором совместной закупки)
    // Структура в соответствии с nsiOrganization
  },
  it_purchase: true,
  max_price: "Начальная (максимальная) цена контракта" +
    "money в копейках" +
    "old - purchase_code" +
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
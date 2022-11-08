var DataTypes = require("sequelize").DataTypes;
var _criterias = require("./criterias");
var _predicates = require("./predicates");
var _products = require("./products");
var _subcriterias = require("./subcriterias");
var _users = require("./users");

function initModels(sequelize) {
  var criterias = _criterias(sequelize, DataTypes);
  var predicates = _predicates(sequelize, DataTypes);
  var products = _products(sequelize, DataTypes);
  var subcriterias = _subcriterias(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  subcriterias.belongsTo(criterias, { as: "criterion", foreignKey: "criteria_id"});
  criterias.hasMany(subcriterias, { as: "subcriteria", foreignKey: "criteria_id"});
  products.belongsTo(predicates, { as: "predicate", foreignKey: "predicate_id"});
  predicates.hasMany(products, { as: "products", foreignKey: "predicate_id"});

  return {
    criterias,
    predicates,
    products,
    subcriterias,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;

const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
    }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.users = require("./users")(sequelize, Sequelize);
db.predicates = require("./predicates")(sequelize, Sequelize);
db.criterias = require("./criterias")(sequelize, Sequelize);
db.products = require("./products")(sequelize, Sequelize);
db.subcriterias = require("./subcriterias")(sequelize, Sequelize);

// db.partners.belongsTo(db.users, {foreignKey:'user_id', as:'users'})
// db.sessions.belongsTo(db.users, {foreignKey:'user_id', as:'users'})
// db.users.belongsTo(db.partners, {foreignKey:'user_id'})

module.exports = db;
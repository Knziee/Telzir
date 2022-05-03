const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  freezeTableName: true,
  timestamps: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  },
  

});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.tariffs = require("./tariff.models")(sequelize, Sequelize);
db.tariffs_info = require("./tariff_info.models.js")(sequelize, Sequelize);

module.exports = db;
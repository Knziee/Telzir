module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "senhadomysql123",
  DB: "telzirdb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

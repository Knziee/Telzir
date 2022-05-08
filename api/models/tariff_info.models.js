module.exports = (sequelize, Sequelize) => {
  const Tariff_info = sequelize.define(
    "tariff_info",
    {
      TariffInfoId: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      origin: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      destiny: {
        type: Sequelize.STRING,
      },
      valuePerMinute: {
        type: Sequelize.STRING,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
      primaryKey: true,
    }
  );
  return Tariff_info;
};

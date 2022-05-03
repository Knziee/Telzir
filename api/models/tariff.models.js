module.exports = (sequelize, Sequelize) => {
    const Tariff = sequelize.define("tariff", {
      idTariff: {
        primaryKey:true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      tariffName: {
        type: Sequelize.STRING
      },
      TariffInfo_TariffInfoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'tariff_info', key: 'TariffInfoId'}
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    });
    return Tariff;
  };
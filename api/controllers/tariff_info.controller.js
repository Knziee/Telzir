const db = require("../models");
const Tariff_info = db.tariffs_info;
const Op = db.Sequelize.Op;

exports.findOne = (req, res) => {
  const TariffInfoId = req.params.TariffInfoId;

  Tariff_info.findByPk(TariffInfoId)
  .then(data=> {
      if (data) {
          res.send(data);
          console.log(data);
      } else {
          res.status(404).send ({
              message: `Cannot find Tariff info with id: ${TariffInfoId}.`
          });
      }
  })
  .catch(err => {
      res.status(500).send({
          message: "Error retrieving Tariff info with id: " + TariffInfoId
      })
  })
};


exports.findAll = (req, res) => {


    Tariff_info.findAll()
      .then(data => {
        res.send(data);

      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };


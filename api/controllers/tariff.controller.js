const db = require("../models");
const Tariff = db.tariffs;

exports.findOne = (req, res) => {
  const idTariff = req.params.idTariff;
  Tariff.findByPk(idTariff)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tariff with id: ${idTariff}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tariff with id: " + idTariff,
      });
    });
};

exports.findAll = (req, res) => {
  Tariff.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

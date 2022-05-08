module.exports = (app) => {
    const tariffs = require("../controllers/tariff.controller");
    const tariffsinfos = require("../controllers/tariff_info.controller");
    var router = require("express").Router();
  
    router.get("/", tariffs.findAll);
    router.get("/infos", tariffsinfos.findAll);
    router.get("/:idTariff", tariffs.findOne);
    router.get("/info/:TariffInfoId", tariffsinfos.findOne);
    app.use("/api/tariffs", router);
  };
  
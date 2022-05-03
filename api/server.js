const express = require("express");
const cors = require("cors");
const app = express();

var corsOptions = {
  origin: "http://localhost:6061"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const db = require("./models");
db.sequelize.sync();

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the telzir api." });
});

require('./routes/tariff.routes')(app);
const PORT = process.env.PORT || 6061;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});



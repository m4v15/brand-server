const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "client", "build")));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", function(req, res) {
  res.sendFile("Welcome to our brand server");
});

const brands = {
  Nike: { score: 83 },
  Nicce: { score: 98 },
  Carhartt: { score: 45 }
};

app.get("/brand", (req, res, next) => {
  const { brand } = req.query;

  return res.json(brands[brand]);
});

module.exports = app;

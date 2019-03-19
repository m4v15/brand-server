const express = require("express");
const path = require("path");
const app = express();

app.get("/", function(req, res) {
  res.send("Welcome to our brand server");
});

const brands = {
  nike: { score: 83 },
  nicce: { score: 98 },
  carhartt: { score: 45 }
};

app.get("/brand", (req, res, next) => {
  const { brand } = req.query;

  return res.json(brands[brand.toLowerCase()]);
});

module.exports = app;

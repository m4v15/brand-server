const express = require("express");
const path = require("path");
const app = express();

app.get("/", function(req, res) {
  res.send("Welcome to our brand server");
});

const brands = {
  nike: { score: 83 },
  nicce: { score: 98 },
  carhartt: { score: 45 },
  adidas: { score: 69 },
  "pull&bear": { score: 55 },
  collusion: { score: 75 },
  celio: { score: 66 }
};

const colourKey = {
  50: "FF0000",
  60: "FF0000",
  70: "FFFF00",
  80: "FFFF00",
  90: "ADFF2F",
  100: "ADFF2F"
};

function roundUp10(num) {
  return Math.ceil(num / 10) * 10;
}

app.get("/brand", (req, res, next) => {
  const { brand } = req.query;
  const brandData = brands[brand.toLowerCase()];
  const score = brandData.score;
  const rounded = roundUp10(score);
  const colourHex = colourKey[rounded];

  return res.json({ score, colourHex });
});

module.exports = app;

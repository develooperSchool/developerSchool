var express = require("express");
const controller = require("../controllers/revenue.controller");

var router = express.Router();

router.get("/new", (req, res) => {
  controller.addRevenueCategory(req, res);
});

router.get("/hello", (req, res) => {
  res.send("Hello");
});

module.exports = router;

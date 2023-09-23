var express = require("express");
// import addRevenueCategoryController from "../controllers/revenue.controller";

const controller = require("../controllers/revenue.controller");

var router = express.Router();

router.get("/new", (req, res) => { controller.addRevenueCategoryController(req, res) });

router.get("/hello", (req, res) => {
  res.send("Hello");
});

module.exports = router;
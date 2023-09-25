var express = require("express");
const controller = require("../controllers/revenue.controller");

var router = express.Router();

router.get("/", (req, res) => {
  controller.getAllRevenueCategories(req, res);
});

router.post("/add", (req, res) => {
  controller.addRevenueCategory(req, res);
});

router.delete("/delete", (req, res) => {
  controller.deleteRevenueCategory(req, res);
});

router.put("/update", (req, res) => {
  controller.udpateRevenueCategoryById(req, res);
});

router.post("/payment", (req, res) => {
  controller.saveIncomePaymentDetails(req, res);
});

module.exports = router;

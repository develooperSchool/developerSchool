var express = require("express");
const controller = require("../controllers/revenue.controller");

var router = express.Router();

router.get("/", (req, res) => {
  controller.getAllRevenueCategories(req, res);
});

router.post("/add", (req, res) => {
  controller.addRevenueCategory(req, res);
});

router.delete("/delete/:id", (req, res) => {
  controller.deleteRevenueCategory(req, res);
});

router.put("/update/:id", (req, res) => {
  controller.udpateRevenueCategoryById(req, res);
});

router.post("/payment", (req, res) => {
  controller.saveIncomePaymentDetails(req, res);
});

router.get("/income", (req, res) => {
  controller.getAllIncomeDetils(req, res);
});

router.get("/income/:id", (req, res) => {
  controller.getIncomeDetilsById(req, res);
});

router.post("/expense", (req, res) => {
  controller.saveExpensePaymentDetails(req, res);
});

router.get("/expenses", (req, res) => {
  controller.getAllExpenseDetils(req, res);
});

router.get("/expense/:id", (req, res) => {
  controller.getExpenseDetilsById(req, res);
});

module.exports = router;

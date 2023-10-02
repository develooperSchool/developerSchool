var express = require("express");
const validation = require("../middlewares/validations/revenue.validation.middleware");
const controller = require("../controllers/revenue.controller");

var router = express.Router();

router.get("/", (req, res) => {
  controller.getAllRevenueCategories(req, res);
});

router.post("/add", (req, res) => {
  controller.addRevenueCategory(req, res);
});

router.delete(
  "/delete/:id",
  validation.deleteRevenueCategoryValidation,
  controller.deleteRevenueCategory
);

router.put(
  "/update/:id",
  validation.udpateRevenueCategoryByIdValidation,
  controller.udpateRevenueCategoryById
);

router.post(
  "/payment",
  validation.paymentValidation,
  controller.saveIncomePaymentDetails
);

router.get("/income", (req, res) => {
  controller.getAllIncomeDetils(req, res);
});

router.get(
  "/income/:id",
  validation.getIncomeDetilsByIdValidation,
  controller.getIncomeDetilsById
);

router.post("/expense", (req, res) => {
  controller.saveExpensePaymentDetails(req, res);
});

router.get("/expenses", (req, res) => {
  controller.getAllExpenseDetils(req, res);
});

router.get(
  "/expense/:id",
  validation.getExpenseDetilsByIdValidation,
  controller.getExpenseDetilsById
);

module.exports = router;

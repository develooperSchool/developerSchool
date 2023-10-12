var express = require("express");
const validation = require("../middlewares/validations/revenue.validation.middleware");
const controller = require("../controllers/revenue.controller");

var router = express.Router();

router.get("/", controller.getAllRevenueCategories);

router.post(
  "/add",
  validation.addRevenueCategoryValidation,
  controller.addRevenueCategory
);

router.get(
  "/category/:id",
  validation.getRevenueCategoryByIdValidation,
  controller.getRevenueCategoryById
);

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

router.get("/expenses", controller.getAllExpenseDetils);

router.post(
  "/expense",
  validation.saveOtherExpenseDetailsValidation,
  controller.saveExpensePaymentDetails
);

router.get(
  "/expense/:id",
  validation.getExpenseDetilsByIdValidation,
  controller.getExpenseDetilsById
);

module.exports = router;

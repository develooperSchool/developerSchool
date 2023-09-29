var express = require("express");
const controller = require("../controllers/revenue.controller");
const util = require("../utils/revenue.utils");
const {
  INVALID_ID,
  INVALID_USER_ID,
  INVALID_REVENUE_CATEGORY_ID,
  INVALID_STUDENT_ID,
  AMOUNT_CANNOT_BE_ZERO,
} = require("../utils/revenue.contants");

var router = express.Router();

router.get("/", (req, res) => {
  controller.getAllRevenueCategories(req, res);
});

router.post("/add", (req, res) => {
  controller.addRevenueCategory(req, res);
});

router.use("/delete/:id", (req, res, next) => {
  if (util.isInvalidId(req.params.id)) res.status(400).send(INVALID_ID);
  else next();
});

router.delete("/delete/:id", (req, res) => {
  controller.deleteRevenueCategory(req, res);
});

router.use("/update/:id", (req, res, next) => {
  if (util.isInvalidId(req.params.id)) res.status(400).send(INVALID_ID);
  else next();
});

router.put("/update/:id", (req, res) => {
  controller.udpateRevenueCategoryById(req, res);
});

router.use("/payment", (req, res, next) => {
  if (
    util.isNullOrUndefined(req.body.userId) ||
    util.isInvalidId(req.body.userId)
  ) {
    res.status(400).send(INVALID_USER_ID);
  }

  if (util.isInvalidId(req.body.revenueCategoryId)) {
    res.status(400).send(INVALID_REVENUE_CATEGORY_ID);
  }

  if (
    req.body.revenueCategoryId === 1 ||
    req.body.revenueCategoryId === 2 ||
    req.body.revenueCategoryId === 3 ||
    req.body.revenueCategoryId === 4
  ) {
    if (
      util.isNullOrUndefined(req.body.studentId) ||
      util.isInvalidId(req.body.studentId)
    ) {
      res.status(400).send(INVALID_STUDENT_ID);
    }
  }

  if (req.body.revenueCategoryId === 1) {
    if (
      util.isNullOrUndefined(req.body.totalFees) ||
      util.isNullOrUndefined(req.body.paidFees) ||
      util.isNullOrUndefined(req.body.balanceFees)
    ) {
      res.status(400).send(INVALID_FEE_DETAILS);
    }
  }

  if (util.isInvalidAmount(req.body.amount)) {
    res.status(400).send(AMOUNT_CANNOT_BE_ZERO);
  }
});

router.post("/payment", (req, res) => {
  controller.saveIncomePaymentDetails(req, res);
});

router.get("/income", (req, res) => {
  controller.getAllIncomeDetils(req, res);
});

router.use("/income/:id", (req, res, next) => {
  if (util.isInvalidId(req.params.id)) res.status(400).send(INVALID_ID);
  else next();
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

router.use("/expense/:id", (req, res, next) => {
  if (util.isInvalidId(req.params.id)) res.status(400).send(INVALID_ID);
  else next();
});

router.get("/expense/:id", (req, res) => {
  controller.getExpenseDetilsById(req, res);
});

module.exports = router;

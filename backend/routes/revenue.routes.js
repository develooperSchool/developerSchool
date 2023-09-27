var express = require("express");
const controller = require("../controllers/revenue.controller");
const util = require("../utils/revenue.utils");

var router = express.Router();
let status = 0;
let messsage = "";
let body = {};

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

router.use("/payment", (req, res, next) => {
  if (
    util.isNullOrUndefined(req.body.userId) ||
    util.isInvalidId(req.body.userId)
  ) {
    status = 400;
    messsage = "Invalid User Id";
  }

  if (util.isInvalidId(req.body.revenueCategoryId)) {
    status = 400;
    messsage = "Invalid Revenue Category Id";
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
      status = 400;
      messsage = "Invalid Student Id";
    }
  }

  if (req.body.revenueCategoryId === 1) {
    if (
      util.isNullOrUndefined(req.body.totalFees) ||
      util.isNullOrUndefined(req.body.paidFees) ||
      util.isNullOrUndefined(req.body.balanceFees)
    ) {
      status = 400;
      messsage = "Invalid Fee Details";
    }
  }

  if (util.isInvalidAmount(req.body.amount)) {
    status = 400;
    messsage = "Amount cannot be zero";
  }

  if (status !== 0 || messsage !== "") {
    res.status(status).send(messsage);
  } else {
    next();
  }
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

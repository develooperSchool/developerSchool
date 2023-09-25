const service = require("../services/revenue.service");

const getAllRevenueCategories = (req, res) => {
  service
    .getAllRevenueCategories() // calling getAllRevenueCategories from service which returns all the revenue categories
    .then((resp) => {
      console.log(resp);
      res.status(200).send(resp);
    })
    .catch((err) => {
      console.log(err);
    });
};

const addRevenueCategory = (req, res) => {
  service
    .addRevenueCategory(req.body.name)
    .then(() => {
      // console.log(resp);
      res.status(200).send("ADDED SUCCESSFULLY");
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteRevenueCategory = (req, res) => {
  console.log(req.query.name);
  service
    .deleteRevenueCategory(req.query.name)
    .then(() => {
      // console.log(resp);
      res.status(200).send("DELETED SUCCESSFULLY");
    })
    .catch((err) => {
      console.log(err);
    });
};

const udpateRevenueCategoryById = (req, res) => {
  console.log(req.query.id, req.body.name);
  service
    .udpateRevenueCategoryById(req.query.id, req.body.name)
    .then(() => {
      // console.log(resp);
      res.status(200).send("UPDATE SUCCESSFULLY");
    })
    .catch((err) => {
      console.log(err);
    });
};
const saveIncomePaymentDetails = (req, res) => {
  console.log(req.body);
  service
    .saveIncomePaymentDetails(req.body)
    .then(() => {
      // console.log(resp);
      res.status(200).send("INCOME PAYMENT SUCCESSFUL");
    })
    .catch((err) => {
      console.log(err);
    });
};

const saveExpensePaymentDetails = (req, res) => {
  console.log(req.body);
  service
    .saveExpensePaymentDetails(req.body)
    .then(() => {
      // console.log(resp);
      res.status(200).send("EXPENSE PAYMENT SUCCESSFUL");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  getAllRevenueCategories,
  addRevenueCategory,
  deleteRevenueCategory,
  udpateRevenueCategoryById,
  saveIncomePaymentDetails,
  saveExpensePaymentDetails,
};

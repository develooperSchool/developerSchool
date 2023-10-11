const service = require("../services/revenue.service");

const getAllRevenueCategories = (req, res) => {
  service
    .getAllRevenueCategories()
    .then((resp) => {
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
      res.status(200).send("ADDED SUCCESSFULLY");
    })
    .catch((err) => {
      console.log(err);
    });
};

const getRevenueCategoryById = (req, res) => {
  console.log(req.params.id);
  service
    .getRevenueCategoryById(req, res)
    .then((resp) => {
      res.status(200).send(resp);
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteRevenueCategory = (req, res) => {
  console.log(req.params.id);
  service
    .deleteRevenueCategory(req, res)
    .then(() => {
      res.status(200).send("DELETED SUCCESSFULLY");
    })
    .catch((err) => {
      console.log(err);
    });
};

const udpateRevenueCategoryById = (req, res) => {
  console.log(req.params.id, req.body.name);
  service
    .udpateRevenueCategoryById(req.params.id, req.body.name)
    .then(() => {
      res.status(200).send("UPDATE SUCCESSFULLY");
    })
    .catch((err) => {
      console.log(err);
    });
};
const saveIncomePaymentDetails = (req, res) => {
  service
    .saveIncomePaymentDetails(req, res)
    .then((message) => {
      res.status(200).send(message);
    })
    .catch((err) => {
      console.log(err);
    });
};

const saveExpensePaymentDetails = (req, res) => {
  service
    .saveExpensePaymentDetails(req, res)
    .then(() => {
      res.status(200).send("EXPENSE PAYMENT SUCCESSFUL");
    })
    .catch((err) => {
      console.log(err);
    });
};

const getAllIncomeDetils = (req, res) => {
  service
    .getAllIncomeDetils(res)
    .then((resp) => {
      res.status(200).send(resp);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getIncomeDetilsById = (req, res) => {
  service
    .getIncomeDetilsById(req, res)
    .then((resp) => {
      res.status(200).send(resp);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getAllExpenseDetils = (req, res) => {
  service
    .getAllExpenseDetils(res)
    .then((resp) => {
      res.status(200).send(resp);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getExpenseDetilsById = (req, res) => {
  service
    .getExpenseDetilsById(req, res)
    .then((resp) => {
      res.status(200).send(resp);
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
  getAllIncomeDetils,
  getIncomeDetilsById,
  getAllExpenseDetils,
  getExpenseDetilsById,
  getRevenueCategoryById,
};

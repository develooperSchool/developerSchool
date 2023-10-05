const dao = require("../dao/revenue.dao");

const getAllRevenueCategories = async () => {
  let rows = [];
  await dao
    .getAllRevenueCategories()
    .then((res) => {
      rows = res;
    })
    .catch((err) => {
      console.log(err);
    });

  return rows;
};

const addRevenueCategory = async (name) => {
  // let rows = [];
  await dao
    .addRevenueCategory(name)
    .then(() => {
      // rows = res;
    })
    .catch((err) => {
      console.log(err);
    });

  // return rows;
};
const deleteRevenueCategory = async (req, res) => {
  // let rows = [];
  await dao
    .deleteRevenueCategory(req, res)
    .then(() => {
      // rows = res;
    })
    .catch((err) => {
      console.log(err);
    });
};

const udpateRevenueCategoryById = async (id, name) => {
  // let rows = [];
  await dao
    .udpateRevenueCategoryById(id, name)
    .then(() => {
      // rows = res;
    })
    .catch((err) => {
      console.log(err);
    });
};

const saveIncomePaymentDetails = async (body) => {
  // let rows = [];
  await dao
    .saveIncomePaymentDetails(body)
    .then(() => {
      // rows = res;
    })
    .catch((err) => {
      console.log(err);
    });
};

const saveExpensePaymentDetails = async (req, res) => {
  let message = "";
  await dao
    .saveExpensePaymentDetails(req, res)
    .then((msg) => {
      message = msg;
    })
    .catch((err) => {
      console.log(err);
    });
  return message;
};

const getAllIncomeDetils = async () => {
  let rows = [];
  await dao
    .getAllIncomeDetils()
    .then((res) => {
      rows = res;
    })
    .catch((err) => {
      console.log(err);
    });

  return rows;
};

const getIncomeDetilsById = async (req, res) => {
  let rows = [];
  await dao
    .getIncomeDetilsById(req, res)
    .then((res) => {
      rows = res;
    })
    .catch((err) => {
      console.log(err);
    });

  return rows;
};

const getAllExpenseDetils = async (res) => {
  let rows = [];
  await dao
    .getAllExpenseDetils(res)
    .then((res) => {
      rows = res;
    })
    .catch((err) => {
      console.log(err);
    });

  return rows;
};

const getExpenseDetilsById = async (req, res) => {
  let rows = [];
  await dao
    .getExpenseDetilsById(req, res)
    .then((res) => {
      rows = res;
    })
    .catch((err) => {
      console.log(err);
    });

  return rows;
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
};

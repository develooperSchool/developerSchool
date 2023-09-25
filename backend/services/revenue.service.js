const dao = require("../dao/revenue.dao");

const getAllRevenueCategories = async () => {
  let rows = [];
  await dao
    .getAllRevenueCategories() // calling getAllRevenueCategories from dao which returns all the revenue categories
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
const deleteRevenueCategory = async (name) => {
  // let rows = [];
  await dao
    .deleteRevenueCategory(name)
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

const saveExpensePaymentDetails = async (body) => {
  // let rows = [];
  await dao
    .saveExpensePaymentDetails(body)
    .then(() => {
      // rows = res;
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

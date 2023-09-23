const dao = require("../dao/revenue.dao");

const addRevenueCategory = async () => {
  let rows = [];
  await dao
    .addRevenueCategory()
    .then((res) => {
      rows = res;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally((resp) => {
      if (resp) return resp;
    });

  return rows;
};

module.exports = { addRevenueCategory };

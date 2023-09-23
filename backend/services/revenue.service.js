// import addRevenueCategoryDao from "../dao/revenue.dao";
const dao = require("../dao/revenue.dao");

const addRevenueCategoryService = async () => {
  let rows = [];
  await dao
    .addRevenueCategoryDao()
    .then((res) => {
      console.log("inside service: ", res);
      rows = res;
      // return res;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally((resp) => {
      if (resp) return resp;
    });

  return rows;
};

module.exports = { addRevenueCategoryService };
// export default addRevenueCategoryService;

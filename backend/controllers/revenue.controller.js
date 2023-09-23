// import addRevenueCategoryService from "../services/revenue.service";
const service = require("../services/revenue.service");

const addRevenueCategoryController = (req, res) => {
  service
    .addRevenueCategoryService()
    .then((resp) => {
      console.log("inside controller", resp);
      res.status(200).send(resp);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { addRevenueCategoryController };

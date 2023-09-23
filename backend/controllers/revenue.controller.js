const service = require("../services/revenue.service");

const addRevenueCategory = (req, res) => {
  service
    .addRevenueCategory() // calling addRevenueCategory from service which returns all the revenue categories
    .then((resp) => {
      res.status(200).send(resp);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { addRevenueCategory };

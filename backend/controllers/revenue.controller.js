const service = require("../services/revenue.service");

const addRevenueCategory = (req, res) => {
  service
    .addRevenueCategory()
    .then((resp) => {
      res.status(200).send(resp);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { addRevenueCategory };

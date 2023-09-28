var express = require("express");
const controller = require("../controllers/revenue.controller");

var router = express.Router();

// api/v1/revenue/new ==> calls the addRevenueCategory() from the controller
router.get("/", (req, res) => {
  controller.addRevenueCategory(req, res);
});


module.exports = router;

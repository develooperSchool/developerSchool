var express = require("express");
var router = express.Router();
const controller = require("../controllers/user.controller");
/* GET users listing. */
router.get("/", function (req, res) {
  controller.getAllUsers(req, res);
});

router.get("/email", function (req, res) {
  controller.getEmailById(req, res);
});

router.get("/:id", function (req, res) {
  controller.getUserById(req, res);
});

router.post("/add", function (req, res) {
  controller.addUser(req, res);
});

router.delete("/delete/:id", function (req, res) {
  controller.deleteUser(req, res);
});

router.put("/update/:id", function (req, res) {
  controller.updateUser(req, res);
});

router.post("/signin", function (req, res) {
  controller.signInUser(req, res);
});

module.exports = router;

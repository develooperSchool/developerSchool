var express = require("express");
var router = express.Router();
const controller = require("../controllers/user.controller");
const validation = require("../middlewares/users.validation.middleware");

/* GET users listing. */
router.get("/", function (req, res) {
  controller.getAllUsers(req, res);
});

router.use("/", (req, res, next) => {
  validation.getUserByEmailIdValidation(req, res, next);
});

router.get("/email", function (req, res) {
  controller.getUserByEmailId(req, res);
});

router.use("/:id", (req, res, next) => {
  validation.getUserByIdValidation(req, res, next);
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

router.post("/checkEmail", function (req, res) {
  controller.checkEmail(req, res);
});

module.exports = router;

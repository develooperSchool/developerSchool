var express = require("express");
var router = express.Router();
const controller = require("../controllers/user.controller");
const validation = require("../middlewares/users.validation.middleware");

// const {
//   getUserByIdValidation,
// } = require("../../backend/middlewares/users.validation.middleware");

/* GET users listing. */
router.get("/", function (req, res) {
  controller.getAllUsers(req, res);
});

router.get(
  "/email",
  validation.getUserByEmailValidation,
  controller.getUserByEmailId
);

// router.get(
//   "/email",
//   validation.getUserByEmailIdValidation,
//   controller.getUserByEmailId
// );

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

router.post("/email/checkEmail", function (req, res) {
  controller.checkEmail(req, res);
});

router.get("/:id", validation.getUserByIdValidation, controller.getUserById);

module.exports = router;

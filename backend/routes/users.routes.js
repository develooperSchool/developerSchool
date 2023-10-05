var express = require("express");
var router = express.Router();
const controller = require("../controllers/user.controller");
const validation = require("../middlewares/users.validation.middleware");
const { updateUser } = require("../dao/user.dao");

/* GET ALL USERS  */
router.get("/", function (req, res) {
  controller.getAllUsers(req, res);
});

/*GET ALL ADMINS */
router.get("/allAdmins", (req, res) => {
  controller.getAllAdmins(req, res);
});

/*GET ALL MENTORS */
router.get("/allMentors", (req, res) => {
  controller.getAllMentors(req, res);
});

/*GET ALL GUEST */
router.get("/allGuest", (req, res) => {
  controller.getAllGuest(req, res);
});

/*GET ALL STUDENT */
router.get("/allStudent", (req, res) => {
  controller.getAllStudent(req, res);
});

/* GET USER BY EMAIL ID ---- WITH VALIDATION ---- */
router.get(
  "/email",
  validation.getUserByEmailValidation,
  controller.getUserByEmailId
);

/* ADD USERS --- WITH VALIDATIONS---- */
router.post("/add", validation.addUserValidation, controller.addUser);

/* DELETE USERS  ---- WITH VALIDATIONS------ */
router.delete(
  "/delete/:id",
  validation.deleteUserByIdValidation,
  controller.deleteUser
);

/* UPDATE USERS  ----- WITH VALIDATION----- */
router.put(
  "/update/:id",
  validation.updateUserByIdValidation,
  controller.updateUser
);

/* SIGNIN USERS -- WITH VALIDATION--- */
router.post("/signin", validation.signInValidation, controller.signInUser);

/* CHECK MAIL ---- WITH VALIDATION---- */
router.post("/email", validation.checkEmailValidation, controller.checkEmail);

/* GET USER BY ID ---WITH VALIDATION ---- */
router.get("/:id", validation.getUserByIdValidation, controller.getUserById);

module.exports = router;

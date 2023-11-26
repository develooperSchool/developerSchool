// const util = require("../utils/revenue.utils");
const userUtil = require("../utils/users.utils");
const InvalidIdError = require("../errors/InvalidIdError");
const InvalidEmailError = require("../errors/InvalidEmailError");
const InvalidPasswordError = require("../errors/InvalidPasswordError");
const InvalidNameError = require("../errors/InvalidNameError");
const { INVALID_CONTACT } = require("../utils/revenue.contants");
const InvalidContactError = require("../errors/InvalidContactError");
const InvalidAddressError = require("../errors/InvalidAddressError");
const InvalidQualificationError = require("../errors/InvalidQualificationError");
const InvalidPassingYearError = require("../errors/InvalidPassingYearError");
const InvalidDobError = require("../errors/InvalidDobError");
const InvalidGenderError = require("../errors/InvalidGenderError");

// const { user } = require("./user.schema");

/* GET USER BY ID VALIDATION */
const getUserByIdValidation = (req, res, next) => {
  if (userUtil.isInvalidId(req.params.id))
    throw new InvalidIdError("GIVEN ID TO GET USER IS INVALID", res);
  else next();
};

/* GET USER BY EMAIL ID VALIDATION */
const getUserByEmailValidation = (req, res, next) => {
  if (userUtil.isInvalidEmailId(req.query.email))
    throw new InvalidEmailError("Given email is not valid", res);
  else next();
};

/* DELETE USER BY ID VALIDATION */
const deleteUserByIdValidation = (req, res, next) => {
  if (userUtil.isInvalidId(req.params.id))
    throw new InvalidIdError("INVALID ID", res);
  else next();
};

/* UPDATE USER BY ID VALIDATION */
const updateUserByIdValidation = (req, res, next) => {
  if (userUtil.isInvalidId(req.params.id))
    throw new InvalidIdError("INVALID ID", res);
  else next();
};

/**ADD USER VALIDATION */
const addUserValidation = (req, res, next) => {
  if (userUtil.isInvalidName(req.body.firstName))
    throw new InvalidNameError("FIRST NAME INVALID", res);

  if (userUtil.isInvalidName(req.body.lastName))
    throw new InvalidNameError("LAST NAME INVALID", res);

  if (userUtil.isInvalidEmailId(req.body.email))
    throw new InvalidEmailError("USER EMAIL INVALID", res);

  if (userUtil.isInvalidContact(req.body.contact))
    throw new InvalidContactError("USER CONTACT NOT VALID", res);

  if (userUtil.isInvalidAddress(req.body.address))
    throw new InvalidAddressError("ADDRESS IS NOT VALID", res);

  if (userUtil.isInvalidQualification(req.body.qualification))
    throw new InvalidQualificationError("QUALIFICATION IS NOT VALID", res);

  if (userUtil.isInvalidPassingYear(req.body.passingYear))
    throw new InvalidPassingYearError("INVALID PASSING YEAR");

  if (userUtil.isInvalidDob(req.body.dob))
    throw new InvalidDobError("DATE SHOULD BE IN YYYY-MM-DD", res);

  if (userUtil.isInvalidGender(req.body.gender))
    throw new InvalidGenderError("INVALID NAME", res);

  if (userUtil.isInvalidName(req.body.castCategory))
    throw new InvalidNameError("INVALID NAME", res);

  if (userUtil.isInvalidName(req.body.subcast))
    throw new InvalidNameError("INVALID NAME", res);
  else next();
};

/**ADD ENROLLMENT VALIDATION */
const addEnrollmentValidation = (req, res, next) => {
  if (userUtil.isInvalidId(req.body.userId))
    throw new InvalidIdError("INVALID USER ID", res);
  if (userUtil.isInvalidId(req.body.courseId))
    throw new InvalidIdError("INVALID COURSE ID", res);
  else next();
};

/**ADD FACULTY ENROLLMENT VALIDATION */
const addFacultyAllotmentValidation = (req, res, next) => {
  if (userUtil.isInvalidId(req.body.userId))
    throw new InvalidIdError("INVALID USER ID", res);
  if (userUtil.isInvalidId(req.body.subjectId))
    throw new InvalidIdError("INVALID SUBJECT ID", res);
  else next();
};

/**UPDATE ENROLLMENT VALIDATION */
const updateEnrollmentValidation = (req, res, next) => {
  if (userUtil.isInvalidId(req.params.id))
    throw new InvalidIdError("INVALID ID", res);
  else next();
};

/**UPDATE FACULTY ALLOTMENT VALIDATION */
const updateFacultyAllotmentValidation = (req, res, next) => {
  if (userUtil.isInvalidId(req.params.id))
    throw new InvalidIdError("INVALID ID", res);
  else next();
};

/**DELETE ENROLLMENT VALIDATION */
const deleteEnrollmentValidation = (req, res, next) => {
  if (userUtil.isInvalidId(req.params.id))
    throw new InvalidIdError("INVALID ID", res);
  else next();
};

/**DELETE FACULTY ALLOTMENT VALIDATION */
const deleteFacultyAllotmentValidation = (req, res, next) => {
  if (userUtil.isInvalidId(req.params.id))
    throw new InvalidIdError("INVALID ID", res);
  else next();
};

/* SIGN IN USER VALIDATION */
const signInValidation = (req, res, next) => {
  if (userUtil.isInvalidEmailId(req.body.email))
    throw new InvalidEmailError("USER NAME INVALID", res);
  if (userUtil.isInvalidPassword(req.body.password))
    throw new InvalidPasswordError("PASSWORD MUST HAVE 8 CHARACTERS", res);
  else next();
};

/* CHECK MAIL ID VALIDATION */
const checkEmailValidation = (req, res, next) => {
  if (userUtil.isInvalidEmailId(req.body.email))
    throw new InvalidEmailError("Given email is not valid", res);
  else next();
};

module.exports = {
  getUserByEmailValidation,
  getUserByIdValidation,
  checkEmailValidation,
  deleteUserByIdValidation,
  updateUserByIdValidation,
  signInValidation,
  addUserValidation,
  updateEnrollmentValidation,
  deleteEnrollmentValidation,
  addEnrollmentValidation,
  addFacultyAllotmentValidation,
  updateFacultyAllotmentValidation,
  deleteFacultyAllotmentValidation,
};

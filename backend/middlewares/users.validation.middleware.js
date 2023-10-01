const util = require("../utils/revenue.utils");
const InvalidIdError = require("../errors/InvalidIdError");

const { user, userId } = require("./user.schema");

// const getUserByIdValidation = (req, res, next) => {
//   if (util.isInvalidId(req.params.id))
//     throw new InvalidIdError("GIVEN ID TO GET USER IS INVALID", res);
//   else next();
// };

const getUserByEmailValidation = async (req, res, next) => {
  const value = await user.validate({ email: req.query.email });
  if (value.error) {
    res.json({ success: 0, message: value.error.details[0].message });
  } else {
    next();
  }
};

// const getUserByIdValidation = async (req, res, next) => {
//   const value = await user.validate({ id: req.params.id });
//   if (value.error) {
//     res.json({ success: 0, message: value.error.details[0].message });
//   } else {
//     next();
//   }
// };

module.exports = { getUserByEmailValidation };

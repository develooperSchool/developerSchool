const util = require("../utils/revenue.utils");
const InvalidIdError = require("../errors/InvalidIdError");

const getUserByIdValidation = (req, res, next) => {
  if (util.isInvalidId(req.params.id))
    throw new InvalidIdError("GIVEN ID TO GET USER IS INVALID", res);
  else next();
};

const getUserByEmailIdValidation = (req, res, next) => {};

module.exports = { getUserByIdValidation };

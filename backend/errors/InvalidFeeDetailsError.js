const { INVALID_FEE_DETAILS } = require("../utils/app.constants");
const GlobalErrorHandler = require("./GlobalErrorHandler");
const HttpStatusCode = require("../utils/HttpStatusCode");

class InvalidFeeDetailsError extends GlobalErrorHandler {
  constructor(description, res) {
    super(
      INVALID_FEE_DETAILS,
      HttpStatusCode.BAD_REQUEST,
      description,
      new Date(Date.now()),
      res
    );
  }
}

module.exports = InvalidFeeDetailsError;

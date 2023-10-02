const { AMOUNT_CANNOT_BE_ZERO } = require("../utils/app.constants");
const GlobalErrorHandler = require("./GlobalErrorHandler");
const HttpStatusCode = require("../utils/HttpStatusCode");

class InvalidAmountError extends GlobalErrorHandler {
  constructor(description, res) {
    super(
      AMOUNT_CANNOT_BE_ZERO,
      HttpStatusCode.BAD_REQUEST,
      description,
      new Date(Date.now()),
      res
    );
  }
}

module.exports = InvalidAmountError;

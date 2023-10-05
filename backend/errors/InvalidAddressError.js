const { INVALID_ADDRESS } = require("../utils/revenue.contants");
const GlobalErrorHandler = require("./GlobalErrorHandler");
const HttpStatusCode = require("../utils/HttpStatusCode");

class InvalidAddressError extends GlobalErrorHandler {
  constructor(description, res) {
    super(
      INVALID_ADDRESS,
      HttpStatusCode.BAD_REQUEST,
      description,
      new Date(Date.now()),
      res
    );
  }
}

module.exports = InvalidAddressError;

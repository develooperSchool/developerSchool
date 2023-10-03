const { INVALID_DOB } = require("../utils/revenue.contants");
const GlobalErrorHandler = require("./GlobalErrorHandler");
const HttpStatusCode = require("../utils/HttpStatusCode");

class InvalidDobError extends GlobalErrorHandler {
  constructor(description, res) {
    super(
      INVALID_DOB,
      HttpStatusCode.BAD_REQUEST,
      description,
      new Date(Date.now()),
      res
    );
  }
}

module.exports = InvalidDobError;

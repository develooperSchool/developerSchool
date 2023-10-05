const { INVALID_DOB } = require("../utils/app.constants");
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

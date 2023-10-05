const { INVALID_PASSWORD } = require("../utils/app.constants");
const GlobalErrorHandler = require("./GlobalErrorHandler");
const HttpStatusCode = require("../utils/HttpStatusCode");

class InvalidPasswordError extends GlobalErrorHandler {
  constructor(description, res) {
    super(
      INVALID_PASSWORD,
      HttpStatusCode.BAD_REQUEST,
      description,
      new Date(Date.now()),
      res
    );
  }
}

module.exports = InvalidPasswordError;

const { INVALID_EMAIL } = require("../utils/revenue.contants");
const GlobalErrorHandler = require("./GlobalErrorHandler");
const HttpStatusCode = require("../utils/HttpStatusCode");

class InvalidEmailError extends GlobalErrorHandler {
  constructor(description, res) {
    super(
      INVALID_EMAIL,
      HttpStatusCode.BAD_REQUEST,
      description,
      new Date(Date.now()),
      res
    );
  }
}

module.exports = InvalidEmailError;

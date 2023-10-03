const { INVALID_CONTACT } = require("../utils/revenue.contants");
const GlobalErrorHandler = require("./GlobalErrorHandler");
const HttpStatusCode = require("../utils/HttpStatusCode");

class InvalidContactError extends GlobalErrorHandler {
  constructor(description, res) {
    super(
      INVALID_CONTACT,
      HttpStatusCode.BAD_REQUEST,
      description,
      new Date(Date.now()),
      res
    );
  }
}

module.exports = InvalidContactError;

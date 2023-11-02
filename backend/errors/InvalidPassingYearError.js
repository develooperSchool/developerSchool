const { INVALID_PASSING_YEAR } = require("../utils/app.constants");
const GlobalErrorHandler = require("./GlobalErrorHandler");
const HttpStatusCode = require("../utils/HttpStatusCode");

class InvalidPassingYearError extends GlobalErrorHandler {
  constructor(description, res) {
    super(
      INVALID_PASSING_YEAR,
      HttpStatusCode.BAD_REQUEST,
      description,
      new Date(Date.now()),
      res
    );
  }
}

module.exports = InvalidPassingYearError;

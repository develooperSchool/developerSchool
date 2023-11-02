const { INCOME_DETAILS_NOT_FOUND } = require("../utils/app.constants");
const GlobalErrorHandler = require("./GlobalErrorHandler");
const HttpStatusCode = require("../utils/HttpStatusCode");

class IncomeDetailsNotFoundError extends GlobalErrorHandler {
  constructor(description, res) {
    super(
      INCOME_DETAILS_NOT_FOUND,
      HttpStatusCode.NOT_FOUND,
      description,
      new Date(Date.now()),
      res
    );
  }
}

module.exports = IncomeDetailsNotFoundError;

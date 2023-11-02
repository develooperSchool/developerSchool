const { ERROR_SAVING_INCOME_DETAILS } = require("../utils/app.constants");
const GlobalErrorHandler = require("./GlobalErrorHandler");
const HttpStatusCode = require("../utils/HttpStatusCode");

class SaveIncomeError extends GlobalErrorHandler {
  constructor(description, res) {
    super(
      ERROR_SAVING_INCOME_DETAILS,
      HttpStatusCode.INTERNAL_SERVER_ERROR,
      description,
      new Date(Date.now()),
      res
    );
  }
}

module.exports = SaveIncomeError;

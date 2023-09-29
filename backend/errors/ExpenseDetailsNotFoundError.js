const { EXPENSE_DETAILS_NOT_FOUND } = require("../utils/revenue.contants");
const GlobalErrorHandler = require("./GlobalErrorHandler");
const HttpStatusCode = require("../utils/HttpStatusCode");

class ExpenseDetailsNotFoundError extends GlobalErrorHandler {
  constructor(description, res) {
    super(
      EXPENSE_DETAILS_NOT_FOUND,
      HttpStatusCode.NOT_FOUND,
      description,
      new Date(Date.now()),
      res
    );
  }
}

module.exports = ExpenseDetailsNotFoundError;

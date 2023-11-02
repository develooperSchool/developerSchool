const { INVALID_REVENUE_CATEGORY_NAME } = require("../utils/app.constants");
const GlobalErrorHandler = require("./GlobalErrorHandler");
const HttpStatusCode = require("../utils/HttpStatusCode");

class InvalidRevenueCategoryError extends GlobalErrorHandler {
  constructor(description, res) {
    super(
      INVALID_REVENUE_CATEGORY_NAME,
      HttpStatusCode.BAD_REQUEST,
      description,
      new Date(Date.now()),
      res
    );
  }
}

module.exports = InvalidRevenueCategoryError;

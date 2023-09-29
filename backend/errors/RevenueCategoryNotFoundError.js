const { REVENUE_CATEGORY_NOT_FOUND } = require("../utils/revenue.contants");
const GlobalErrorHandler = require("./GlobalErrorHandler");
const HttpStatusCode = require("../utils/HttpStatusCode");

class RevenueCatogoryNotFoundError extends GlobalErrorHandler {
  constructor(description, res) {
    super(
      REVENUE_CATEGORY_NOT_FOUND,
      HttpStatusCode.NOT_FOUND,
      description,
      new Date(Date.now()),
      res
    );
  }
}

module.exports = RevenueCatogoryNotFoundError;

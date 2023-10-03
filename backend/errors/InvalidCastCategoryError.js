const { INVALID_CASTCATEGORY } = require("../utils/revenue.contants");
const GlobalErrorHandler = require("./GlobalErrorHandler");
const HttpStatusCode = require("../utils/HttpStatusCode");

class InvalidCastCategoryError extends GlobalErrorHandler {
  constructor(description, res) {
    super(
      INVALID_CASTCATEGORY,
      HttpStatusCode.BAD_REQUEST,
      description,
      new Date(Date.now()),
      res
    );
  }
}

module.exports = InvalidCastCategoryError;

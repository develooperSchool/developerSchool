const { SQL_ERROR } = require("../utils/app.constants");
const GlobalErrorHandler = require("./GlobalErrorHandler");
const HttpStatusCode = require("../utils/HttpStatusCode");

class SqlError extends GlobalErrorHandler {
  constructor(description, res) {
    super(
      SQL_ERROR,
      HttpStatusCode.INTERNAL_SERVER_ERROR,
      description,
      new Date(Date.now()),
      res
    );
  }
}

module.exports = SqlError;

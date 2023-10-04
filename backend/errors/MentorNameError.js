const { NAME_NOT_FOUND } = require("../utils/app.constants");
const GlobalErrorHandler = require("./GlobalErrorHandler");
const HttpStatusCode = require("../utils/HttpStatusCode");

class MentorNameError extends GlobalErrorHandler {
  constructor(description, res) {
    super(
      NAME_NOT_FOUND,
      HttpStatusCode.BAD_REQUEST,
      description,
      new Date(Date.now()),
      res
    );
  }
}

module.exports = MentorNameError;




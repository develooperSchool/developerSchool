class GlobalErrorHandler extends Error {
  constructor(message, statusCode, description, timeStamp, res) {
    super(description);

    // Error.captureStackTrace(this);
    this.handlerError(message, statusCode, description, timeStamp, res);
  }

  handlerError = (message, statusCode, description, timeStamp, res) => {
    res
      .status(statusCode)
      .send({ message, statusCode, description, timeStamp });
  };
}

module.exports = GlobalErrorHandler;

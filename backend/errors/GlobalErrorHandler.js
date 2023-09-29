class GlobalErrorHandler extends Error {
  constructor(name, httpCode, description, res) {
    super(description);
    this.name = name;
    this.httpCode = httpCode;
    this.description = description;

    Error.captureStackTrace(this);
    this.handlerError(name, httpCode, description, res);
  }

  handlerError = (name, httpCode, description, res) => {
    res.send({ name, httpCode, description });
  };
}

module.exports = GlobalErrorHandler;

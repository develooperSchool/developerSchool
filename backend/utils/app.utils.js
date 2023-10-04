const isNullOrUndefined = (input) => {
  return input === null || input === undefined || input === "";
};

const isInvalidId = (input) => {
  return !/^[0-9]+$/.test(input) || parseInt(input) <= 0;
};

const isInvalidAmount = (amount) => {
  return parseInt(amount) <= 0;
};

const isInvalidEmailId = (input) => {
  return !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(input);
};

const isInvalidName = (input) => {
  return !/^[A-Za-z]{2,20}/.test(input);
};

const isInvalidPassword = (input) => {
  return String(input).length < 8;
};

const isInvalidContact = (input) => {
  return !/^\d{10}$/.test(input);
};

const isInvalidAddress = (input) => {
  return !/.+/.test(input);
};

const isInvalidQualification = (input) => {
  return !/^[A-Za-z0-9\s.,]{2,100}$/.test(input);
};

const isInvalidPassingYear = (input) => {
  return !/^(19|20)\d{2}$/.test(input);
};

const isInvalidDob = (input) => {
  return !/^(?:19|20)\d\d-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12][0-9]|3[01])$/.test(
    input
  );
};

const isInvalidGender = (input) => {
  return !/^(Male|Female|Other)$/i.test(input);
};

const respond = (status, message, res, next) => {
  if (status !== 0 || message !== "") {
    res.status(status).send(message);
  } else next();
};

module.exports = {
  isNullOrUndefined,
  isInvalidId,
  isInvalidAmount,
  isInvalidEmailId,
  isInvalidName,
  isInvalidPassword,
  isInvalidContact,
  isInvalidAddress,
  isInvalidQualification,
  isInvalidPassingYear,
  isInvalidDob,
  isInvalidGender,
  respond,
};

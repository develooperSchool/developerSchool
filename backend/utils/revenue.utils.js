const isNullOrUndefined = (field) => {
  return field === null || field === undefined || field === "";
};

const isInvalidId = (field) => {
  return parseInt(field) <= 0;
};

const isInvalidAmount = (amount) => {
  return parseInt(amount) <= 0;
};
module.exports = { isNullOrUndefined, isInvalidId, isInvalidAmount };

const isInvalidId = (input) => {
  return !/^[0-9]+$/.test(input) || parseInt(input) <= 0;
};

const isInvalidEmailId = (input) => {
  return;
};

module.exports = {
  isInvalidId,
};

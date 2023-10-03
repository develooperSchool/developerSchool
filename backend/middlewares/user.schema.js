const joi = require("@hapi/joi");

const schema = {
  user: joi.object({
    email: joi.string().email().required(),
  }),
};

module.exports = schema;

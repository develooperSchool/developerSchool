const joi = require("@hapi/joi");

const schema = {
  user: joi.object({
    email: joi.string().email().required(),
  }),
};

// const schema = {
//   user: joi.object({
//     id: joi.string().min(3),
//   }),
// };

module.exports = { schema };

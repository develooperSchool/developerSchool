const util = require("../../utils/app.utils");
const InvalidIdError = require("../../errors/InvalidIdError");

const getCurriculumByIdValidation = (req, res, next) => {
  if (util.isInvalidId(req.params.curriculumId)) throw new InvalidIdError("ID GIVEN TO FETCH CURRICULUM IS INVALID", res);
  else next();
};

module.exports  = {getCurriculumByIdValidation};
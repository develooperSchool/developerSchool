const util = require("../../utils/app.utils");
const InvalidIdError = require("../../errors/InvalidIdError");

const getCourseByIdValidation = (req, res, next) => {
  if (util.isInvalidId(req.params.courseId)) throw new InvalidIdError("ID GIVEN TO FETCH COURSE IS INVALID", res);
  else next();
};

module.exports  = {getCourseByIdValidation};
const util = require("../../utils/app.utils")
const InvalidIdError = require("../../errors/InvalidIdError")

const deleteMentorByIdValidation = (req, res, next) => {
    if (util.isInvalidId(req.params.id)) {
        throw new InvalidIdError("ID GIVEN TO DELETE MENTOR IS INVALID", res);
    }
    else next();
}

const getMentorByIdValidation = (req, res, next) => {
    if (util.isInvalidId(req.params.id)) {
        throw new InvalidIdError("ID GIVEN TO FETCH MENTOR IS INVALID", res);
    }
    else next();
}

const addMentorValidation = (req,res,next) =>{

}

module.exports = { deleteMentorByIdValidation, getMentorByIdValidation, addMentorValidation };

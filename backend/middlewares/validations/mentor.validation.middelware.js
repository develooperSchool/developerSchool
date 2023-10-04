const util = require("../../utils/app.utils")
const InvalidIdError = require("../../errors/InvalidIdError")
const MentorNameError=require("../../errors/MentorNameError")

const deleteMentorByIdValidation = (req, res, next) => {
    if (util.isInvalidId(req.params.id)) {
        throw new MentorNameError("ID GIVEN TO DELETE MENTOR IS INVALID", res);
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
if(util.isNullOrUndefined(req.body.mentor_name)){
throw new MentorNameError("THE GIVEN MENTOR NAME IS INVALID",res)
}
else next();
}

module.exports = { deleteMentorByIdValidation, getMentorByIdValidation, addMentorValidation };

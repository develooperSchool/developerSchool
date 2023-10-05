const util = require("../../utils/app.utils")
const InvalidIdError = require("../../errors/InvalidIdError")
const InvalidNameError = require("../../errors/InvalidNameError");

const deleteMentorByIdValidation = (req, res, next) => {
    if (util.isInvalidId(req.params.id)) {
        throw new InvalidIdError("ID GIVEN TO DELETE MENTOR IS INVALID", res);
    }
    else next();
}

// const getMentorByIdValidation = (req, res, next) => {
//     if (util.isInvalidId(req.params.id)) {
//         throw new InvalidIdError("ID GIVEN TO FETCH MENTOR IS INVALID", res);
//     }
//     else next();
// }

const addMentorValidation = (req,res,next) =>{
if(util.isInvalidName(req.body.mentorName)){
throw new InvalidNameError("THE GIVEN MENTOR NAME IS INVALID",res)
}
if(util.isInvalidId(req.body.roleId)){ 
    throw new InvalidIdError("THE ENTERED ROLE ID IS INVALID", res)
}
if(util.isInvalidId(req.body.courseId)){
    throw new InvalidIdError("THE ENTERED COURSE ID IS INVALID",res)
}
if(util.isInvalidId(req.body.userId)){
    throw new InvalidIdError("THE ENTERED USER ID IS INVALID",res)
}

else next();
}

const updateMentorValidation = (req,res,next) =>{
    if(util.isInvalidId(req.params.id)){
     throw new InvalidIdError("ID GIVEN TO UPDATE MENTOR IS INVALID",res)
    }
    if(util.isInvalidId(req.body.roleId)){ 
    throw new InvalidIdError("THE ENTERED ROLE ID IS INVALID", res)
    }
    if(util.isInvalidId(req.body.courseId)){
    throw new InvalidIdError("THE ENTERED COURSE ID IS INVALID",res)    
    }
    if(util.isInvalidId(req.body.userId)){
    throw new InvalidIdError("THE ENTERD USER ID IS INVALID",res)
    }
    else next();
    
}
module.exports = { deleteMentorByIdValidation, addMentorValidation, updateMentorValidation };

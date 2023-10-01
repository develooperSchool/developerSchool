   
const joi=require("@hapi/joi");

const schema ={
  mentor: joi.object({
    mentorName:joi.string().min(2).max(5).required(),
    roleId: joi.required(),
    courseId:joi.required(),
    userId:joi.required()
  })
};

module.exports=schema;

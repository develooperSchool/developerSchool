
const {mentor} =require("./mentor.schema")

const addMentorValidation = async (req,res,next)=>{
    const value= await mentor.validate(req.body);
    if(value.error){
        res.json({
            error:"your name is invalid",
            message:value.error.details[0].message
        })
    } else{
        next();
    }
}


module.exports ={
    addMentorValidation
}


const service=require('../services/mentor.service')

// get method 
const getAllMentors = (req, res) => {
    service.getAllMentors()
    .then((result) => {
        // console.log("controlller: ",result)

        res.status(200).send(result)
    })
    .catch((err) => res.status(500).send(err));
}
// post method 

const addMentorController=(req,res)=>{
    service.
    addMentor(req.body)
    .then((result)=>{
        console.log(result)
        res.status(201).send(req.body)
    }).catch((error)=>{
        console.log(error)
        res.status(500).send(error)
    })
}

// getMentorById 
const getMentorByIdController=(req,res)=>{
    console.log(req.params.id);
    service.getMentorById(req,res)
    .then((resp)=>{
        resp.status(200).send(resp)
    })
    .catch((err)=>{
      console.log(err)
    })
}

// put method 

const updateMentor=(req,res)=>{
    let id= req.params.id;
    const {mentorName, roleId, courseId, userId} = req.body;
    service.updateMentor(id,req.body)
    .then((result)=>{
        obj = {
            id, 
            mentorName, 
            roleId,
            courseId,
            userId
        }
        res.status(201).send(obj)
    }).catch((error)=>{
        console.log(error)
        res.status(500).send(error)
    });
}

const deleteMentorById =(req,res)=>{
service.deleteMentorById(req.params.id)
.then((msg)=>{
    res.status(200).send(msg);
}).catch((err)=>{
    res.status(500).send(err);
})
}

module.exports ={getAllMentors, addMentorController,updateMentor,deleteMentorById,getMentorByIdController};

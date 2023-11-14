const dao=require('../dao/mentor.dao');

// get method  

const getAllMentors = async () => {
    let rows = [];
    await dao.getAllMentors()
    .then((result)  => {
        // return result
        rows = result
        // console.log("service: ",rows)

    }).catch((err) => {
        console.log(err)
    }).finally((result)=> {
        // console.log(rows)
    });

    // console.log("service: ",rows)
    return rows;
}

// post method 

const addMentor =async(body)=>{
let rows = []
let status="";
await dao
.addMentor(body)  //get all addmentor from dao which returns all the mentor categories
.then(()=>{
    status = "SUCCESS"
}).catch((error)=>{
    console.log(error)
    status = "FAILURE"
});
return status;
};

// getMentorById
const getMentorById = async (req, res) => {
    let rows = [];
    await dao.getMentorById(req, res)
      .then((res) => {
        rows = res;
      })
      .catch((err) => {
        console.log(err);
      });
    return rows;
  };
  
// put method 

const updateMentor =async(id,body)=>{
let rows =[]
await
 dao.updateMentor(id,body)
.then(()=>
{console.log("success")
})
.catch((error)=>{
    console.log(error)
});
 return rows
}

// delete method 
const deleteMentorById=async(id)=>{
    let message = "";
 await dao.deleteMentorById(id)
 .then((msg) => {
    console.log(msg)
    message = msg;
 }).catch((err)=>{
    console.log(err)
 });
 return message;
}


module.exports={getAllMentors, addMentor,updateMentor,deleteMentorById ,getMentorById};

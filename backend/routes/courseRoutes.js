 var express = require("express")

 
//  import { body , validationResult } from 'express-validator'

//  const validation = express.validation('express-validator')

//  const pool = require("../config/db-config")

 const courseController = require("../controllers/course.controller");
const { validationResult } = require("express-validator");
const { query } = require("express-validator");






 var courseRouter = express.Router()


 courseRouter.get("/",courseController.getAllCourses)

 courseRouter.get('/:courseId', courseController.getCourseById);

 courseRouter.post("/add",(req, res) => {
  
  

    courseController.getCreatecourse(req, res);

  

  });

  courseRouter.put("/update/:id", (req, res) => {
    courseController.udpateCourseById(req, res);
  });

  courseRouter.delete("/delete/:id", (req, res) => {
    courseController.deleteCourse(req, res);
  });
  
//  courseRouter.get("/",(req,res)=>{

   

//     const quary = "select * from courses"

//     pool.query(quary)
//     .then((resp) => {
//         res.send(resp)
//     })
//     .catch((error) => {
//         res.send(error)
//     });
    
    // pool.execute(quary, (err, result) => {
    //     if(err) {
    //         res.send(err);
    //     } else{
    //         res.send(result)
    //     }
    // })

//  })


//  courseRouter.post("/addcourse",(req,res)=>{

//     const {course_name,course_duration,course_fees} = req.body
//     const values = [course_name,course_duration,course_fees]
//     const query = "INSERT INTO courses (courseName,course_duration,courseFees) values (?,?,?)";

//     pool.query(query,values,(error,result)=>{
//         if(error){

//             console.log(error)
//         }
//         else res.send(result)
//     })

//     course.addCourseController(req,res)
//     res.status(201).json({
//         msg:"getAllCourse"
//     })
//  })


//  courseRouter.put('/update/:courseId', (req, res) => {

//   res.status(200).json({
//     msg:"update"
//   })

//     const { course_name,course_duration,course_fees} = req.body;
//     const id = req.params.courseId;
//     const query = "UPDATE courses SET course_name = ? , course_duration = ? , course_fees = ? WHERE id = ?";
//   const values = {course_name,course_duration,course_fees}

//   });

// courseRouter.put("/update/:course_id",course.update)


 module.exports=courseRouter
 
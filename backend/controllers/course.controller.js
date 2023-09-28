// const service = require("../services/course.service");

// const addCourseController=(req,res)=>{
//     service
//     .addCourseService()
//     .then((res)=>{
// console.log(res)
// res.status(201).send(res)
//     }).catch((error)=>{
//         console.log(error)
//     })
// }

// async function update(req, res) {
//     const { course_id } = req.params;
//     const course = req.body;
  
//     await service.updatecourses(course_id, course);
//     res.status(204).send();
//   }

// module.exports={
//     addCourseController,
//     update
// }


const service = require('../services/course.service')



async function getAllCourses(req, res) {
    const courses = await service.getAllCourses();
    res.json(courses);
  }

  async function getCourseById(req, res) {
    const { courseId } = req.params;
    const course = await service.getCourseById(courseId);
    if (!course) {
      res.status(404).json({ error: 'Course not found' });
    } else {
      res.json(course);
    }
  }

  const getCreatecourse = (req, res) => {
    console.log(req.body);
    service
      .getCreatecourse(req.body)
      .then(() => {
        // console.log(resp);
        res.status(200).send("create");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const udpateCourseById = (req, res) => {
    console.log(req.params.id, req.body);
    service
      .udpateCourseById(req.params.id, req.body)
      .then(() => {
        // console.log(resp);
        res.status(200).send("UPDATE SUCCESSFULLY");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteCourse = (req, res) => {
    service
      .deleteCourse(req.params.id)
      .then(() => {
        // console.log(resp);
        res.status(200).send("DELETED SUCCESSFULLY");
      })
      .catch((err) => {
        console.log(err);
      });
  };



  module.exports={
    getAllCourses,
    getCourseById,
    getCreatecourse,
    udpateCourseById,
    deleteCourse
}


const dao  = require('../dao/course.dao')

// const dao = require("../dao/course.dao");


// const addCourseService = async () => {
//     let rows = [];
//     await dao
//       .addCourse()
//       .then((res) => {
//         console.log("inside service: ", res);
//         rows = res;
//         // return res;
//       })
//       .catch((err) => {
//         console.log(err);
//       })
//       .finally((resp) => {
//         if (resp) return resp;
//       });
  
//     return rows;
//   };


//   async function updatecourses(course_id, course) {
//     return await dao.updateCourse(course_id, course);
//   }
  
//   module.exports = {
//      addCourseService,
//      updatecourses
//      };


async function getAllCourses() {
  return await dao.getAllCourses();
}


async function getCourseById(courseId) {
  return await dao.getCourseById(courseId);
}


const getCreatecourse = async (id, body) => {
  // let rows = [];
  await dao
    .getCreatecourse(id, body)
    .then(() => {
      // rows = res;
    })
    .catch((err) => {
      console.log(err);
    });
};

const udpateCourseById = async (id, body) => {
  // let rows = [];
  await dao
    .udpateCourseById(id, body)
    .then(() => {
      // rows = res;
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteCourse = async (id) => {
  // let rows = [];
  console.log(id)
  await dao
    .deleteCourse(id)
    .then(() => {
      // rows = res;
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

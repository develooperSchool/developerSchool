

const pool = require("../config/db-config")



// const addCourse = async () => {
//     let row = [];
//     try {
//       const [rows, fields] = await db.query("SELECT * FROM courses");
//       row = rows;
//       console.log("inside dao: ", row);
//     } catch (err) {
//       console.error(err);
//       //res.status(500).json({ error: "Something went wrong" });
//     }
//     return row;
//   };



  
// async function updateCourse(course_id, course) {
//   await pool.execute('UPDATE courses SET course_name = ?, course_duration = ?, course_fees = ? WHERE id = ?', [
//     course.course_name,
//     course.course_duration,
//     course.course_fees,
//     course_id,
//   ]);
// }
  
//   module.exports = {
//      addCourse,
//      updateCourse 
//     };



const mysql = require('mysql2/promise');
const dbConfig = {
  host: 'srv944.hstgr.io',
  user: 'u904598717_dev_ds',
  password: 'Dev_ds@123',
  database: 'u904598717_dev_ds',
};



async function getAllCourses() {
  const connection = await mysql.createConnection(dbConfig);
  const [rows] = await connection.execute('SELECT * FROM courses');
  connection.end();
  return rows;
}


async function getCourseById(courseId) {
  const connection = await mysql.createConnection(dbConfig);
  const [rows] = await connection.execute('SELECT * FROM courses WHERE course_id = ?', [courseId]);
  connection.end();
  return rows[0];
}


const getCreatecourse = async (body) => {
  const {
    course_name,
    course_duration,
    course_fees
  } = body;

  let query = "";
  let row = [],
    values = [];
  try {
    // if (parseInt(revenueCategoryId) === 1) {
    values = [
      course_name,
      course_duration,
      course_fees
    ];
    query =
      "INSERT INTO courses (course_name,course_duration,course_fees) " +
      "VALUES(?, ?, ?)";
    // } else {
    //   values = [userId, revenueCategoryId, amount];
    //   query =
    //     "INSERT INTO income (user_id, revenue_category_id, amount) " +
    //     "VALUES(?, ?, ?)";
    // }
    const rows = pool.query(query, values);
    console.log("result", rows);
    row = rows;
  } catch (err) {
    console.error(err);
  }
  return row;
};

const udpateCourseById = async (id, body) => {
  const {course_name, course_duration, course_fees} = body;
  let row = [course_name, course_duration, course_fees,id];
  try {
    let query = "UPDATE courses SET course_name = ?, course_duration = ? , course_fees = ?  WHERE course_id = ?";
    const rows = pool.query(query, row);
    console.log("result", rows);
  } catch (err) {
    console.error(err);
  }
  return row;
};

const deleteCourse= async (course_id) => {
  let row = [course_id];
  console.log(row)
  try {
    let query = "DELETE FROM  courses WHERE course_id = ? ";
    const rows = pool.execute(query, row);
    console.log("result", rows);
  } catch (err) {
    console.error(err);
  }
  return row;
};


module.exports={
  getAllCourses,
  getCourseById,
  getCreatecourse,
  udpateCourseById,
  deleteCourse
}
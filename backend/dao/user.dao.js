const db = require("../config/db-config");

const getAllUsers = async () => {
  let row = [];
  try {
    const [rows] = await db.query(
      "SELECT * FROM user_profile order by user_id"
    );
    row = rows;
  } catch (err) {
    console.log(err);
  }
  return row;
};
const getAllEnrollments = async () => {
  let row = [];
  try {
    const [rows] = await db.query(
      "select * from enrollment order by enrollment_id"
    );
    row = rows;
  } catch (err) {
    console.log(err);
  }
  return row;
};

const getAllAllotments = async () => {
  let row = [];
  try {
    const [rows] = await db.query(
      "select * from faculty_allotment order by allotment_id"
    );
    row = rows;
  } catch (err) {
    console.log(err);
  }
  return row;
};

const getAllAdmins = async () => {
  let row = [];
  try {
    const [rows] = await db.query("select * from user_profile where role_id=1");
    row = rows;
  } catch (err) {
    console.log(err);
  }
  return row;
};

const getAllMentors = async () => {
  let row = [];
  try {
    const [rows] = await db.query("select * from user_profile where role_id=2");
    row = rows;
  } catch (err) {
    console.log(err);
  }
  return row;
};

const getAllGuest = async () => {
  let row = [];
  try {
    const [rows] = await db.query("select * from user_profile where role_id=4");
    row = rows;
  } catch (err) {
    console.log(err);
  }
  return row;
};

const getAllStudent = async () => {
  let row = [];
  try {
    const [rows] = await db.query("select * from user_profile where role_id=3");
    row = rows;
  } catch (err) {
    console.log(err);
  }
  return row;
};

const add = async (body) => {
  try {
    const { firstName, lastName } = body;
    console.log(firstName, lastName);
    const values = [firstName, lastName];

    const query =
      "INSERT INTO user_profile (first_name,last_name) values (?,?) ";

    const rows = await db.execute(query, values);
    console.log(rows);
  } catch (err) {
    console.log(err);
  }
};

const addEnrollments = async (body) => {
  try {
    const { userId, courseId } = body;
    const values = [userId, courseId];
    const query = "insert into enrollment (user_id, course_id) values (? ,?)";
    const rows = await db.execute(query, values);
    console.log(rows);
  } catch (err) {
    console.log(err);
  }
};

/** ADD FACULTY ALLOTMENT */
const addFacultyAllotment = async (body) => {
  try {
    const { userId, subjectId } = body;
    const values = [userId, subjectId];
    const query =
      "insert into faculty_allotment (user_id, subject_id) values (? ,?)";
    const rows = await db.execute(query, values);
    console.log(rows);
  } catch (err) {
    console.log(err);
  }
};

const addUser = async (body) => {
  console.log(body);
  try {
    const {
      firstName,
      lastName,
      email,
      contact,
      address,
      qualification,
      passingYear,
      dob,
      gender,
      castCategory,
      subcast,
    } = body;

    const values = [
      firstName,
      lastName,
      email,
      contact,
      address,
      qualification,
      passingYear,
      dob,
      gender,
      castCategory,
      subcast,
    ];

    const query =
      "INSERT INTO user_profile (first_name,last_name,email_id,contact, address, qualification,passing_year,dob, gender,cast_category, subcast) values (?,?,?,?,?,?,?,?,?,?,?) ";

    const rows = await db.execute(query, values);
    console.log(rows);
  } catch (err) {
    console.log(err);
  }
};

const signInUser = async (body) => {
  let row = [];
  try {
    const { email, password } = body;
    const values = [email, password];
    const query =
      "select * from user_profile where email_id = ? and password =? ";
    const rows = await db.execute(query, values);
    row = rows[0];
    console.log(rows);
  } catch (err) {
    console.log(err);
  }
  return row;
};

const deleteUser = async (user_id) => {
  let row = [user_id];
  try {
    const query = "DELETE FROM user_profile WHERE user_id = ?";
    const [rows, fields] = await db.execute(query, row);
    console.log("result", rows);
    row = rows;
  } catch (err) {
    console.log(err);
  }
  return row;
};

/** DELETE ENROLLMENTS */
const deleteEnrollment = async (enrollment_id) => {
  let row = [enrollment_id];
  try {
    const query = "delete from enrollment where enrollment_id =?";
    const [rows, fields] = await db.execute(query, row);
    row = rows;
  } catch (err) {
    console.log(err);
  }
  return row;
};

/** DELETE FACULTY ALLOTMENT */
const deleteFacultyAllotment = async (allotment_id) => {
  let row = [allotment_id];
  try {
    const query = "delete from faculty_allotment where allotment_id =?";
    const [rows, fields] = await db.execute(query, row);
    row = rows;
  } catch (err) {
    console.log(err);
  }
  return row;
};

/** UPDATE USERS */
const updateUser = async (user_id, body) => {
  let row = [user_id, body];
  try {
    let query =
      "update user_profile SET first_name = ?,last_name = ?,email_id = ? ,contact = ?, address = ?, qualification = ?, passing_year = ? ,dob = ?, gender = ?, cast_category = ?, subcast = ? where user_id = ? ";
    const {
      first_name,
      last_name,
      email_id,
      contact,
      address,
      qualification,
      passing_year,
      dob,
      gender,
      cast_category,
      subcast,
    } = body;

    const values = [
      first_name,
      last_name,
      email_id,
      contact,
      address,
      qualification,
      passing_year,
      dob,
      gender,
      cast_category,
      subcast,
      user_id,
    ];
    const [rows, fields] = await db.query(query, values);
    // console.log("result", rows);
    row = rows;
  } catch (err) {
    console.log(err);
  }
  return row;
};

/** UPDATE ENROLLMENTS */
const updateEnrollment = async (enrollment_id, body) => {
  let row = [enrollment_id, body];
  try {
    const query =
      "update enrollment set user_id = ?, course_id =? where enrollment_id =?";
    const { userId, courseId } = body;
    const values = [userId, courseId, enrollment_id];
    const [rows, fields] = await db.query(query, values);
    row = rows;
  } catch (err) {
    console.log(err);
  }
  return row;
};

/** UPDATE FACULTY ALLOTMENT */
const updateFacultyAllotment = async (allotment_id, body) => {
  let row = [allotment_id, body];
  try {
    const query =
      "update faculty_allotment set user_id = ?, subject_id =? where allotment_id =?";
    const { userId, subjectId } = body;
    const values = [userId, subjectId, allotment_id];
    const [rows, fields] = await db.query(query, values);
    row = rows;
  } catch (err) {
    console.log(err);
  }
  return row;
};

const getUserByEmailId = async (email_id) => {
  let row = [];
  try {
    let query = "SELECT * FROM user_profile where email_id = ?";

    const values = [email_id];

    const rows = await db.query(query, values);
    console.log("result", rows);
    // console.log("fields", fields);
    row = rows[0];
  } catch (err) {
    console.log(err);
  }
  return row;
};
const getUserById = async (user_id) => {
  let row = [];
  try {
    let query = "SELECT * FROM user_profile where user_id = ?";
    const values = [user_id];
    const [rows, fields] = await db.query(query, values);
    // console.log("result", rows);
    row = rows;
  } catch (err) {
    console.log(err);
  }
  return row;
};

// reset password
const resetpassword = async (email_id, password) => {
  let result = "";
  try {
    const values = [password, email_id];
    let query = "update user_profile set password =? where email_id=?";
    const [rows, fields] = await db.query(query, values);
    if (rows.affectedRows > 0) result = "password reset successfully";
    else result = "failed to reset password";
  } catch (err) {
    console.log(err);
  }
  console.log(result);
  return result;
};

const checkEmail = async (body) => {
  let row = [];
  try {
    const { email } = body;
    let query = "SELECT * FROM user_profile where email_id = ?";

    const values = [email];

    const rows = await db.query(query, values);
    // console.log("result", rows);
    // console.log("fields", fields);
    row = rows[0];
  } catch (err) {
    console.log(err);
  }
  return row;
};

module.exports = {
  getAllUsers,
  addUser,
  add,
  deleteUser,
  updateUser,
  getUserByEmailId,
  getUserById,
  signInUser,
  resetpassword,
  checkEmail,
  getAllAdmins,
  getAllMentors,
  getAllGuest,
  getAllStudent,
  getAllEnrollments,
  addEnrollments,
  updateEnrollment,
  deleteEnrollment,
  getAllAllotments,
  addFacultyAllotment,
  updateFacultyAllotment,
  deleteFacultyAllotment,
};

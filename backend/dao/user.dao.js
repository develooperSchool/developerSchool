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

const addUser = async (body) => {
  console.log(body);
  try {
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
    ];

    const query =
      "INSERT INTO user_profile (first_name,last_name,email_id,contact, address, qualification,passing_year,dob, gender,cast_category, subcast) values (?,?,?,?,?,?,?,?,?,?,?) ";

    const rows = await db.execute(query, values);
    console.log(rows);
  } catch (err) {
    console.log(err);
  }
};

const deleteUser = async (user_id) => {
  let row = [user_id];
  try {
    const query = "DELETE FROM user_profile WHERE user_id = ?";
    const rows = await db.execute(query, row);
    console.log("result", rows);
  } catch (err) {
    console.log(err);
  }
  return row;
};

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
    const rows = await db.query(query, values);
    console.log("result", rows);
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
};

const pool = require("../config/db-config")


const mysql = require('mysql2/promise');
const dbConfig = {
  host: 'srv944.hstgr.io',
  user: 'u904598717_dev_ds',
  password: 'Dev_ds@123',
  database: 'u904598717_dev_ds',
};


async function getAllCurriculum() {
    const connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.execute('SELECT * FROM curriculum');
    connection.end();
    return rows;
  }

  async function getCurriculumById(Id) {
    const connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.execute('SELECT * FROM curriculum WHERE topic_id = ?', [Id]);
    connection.end();
    return rows[0];
  }

  const getCreateCurriculum = async (body) => {
    const {course_subject} = body;
  
    let query = "";
    let row = [],
      values = [];
    try {
      // if (parseInt(revenueCategoryId) === 1) {
      values = [course_subject]
       
      
      
      query =
        "INSERT INTO curriculum (course_subject)" +
        "VALUES(?)" 
        
    
      const rows = pool.query(query, values);
      console.log("result", rows);
      row = rows;
    } catch (err) {
      console.error(err);
    }
    return row;
  };

  const udpateCurriculumById = async (id, body) => {
    const {course_subject} = body;
    let row = [course_subject,id];
    try {
      let query = "UPDATE curriculum SET course_subject = ? WHERE topic_id = ?";
      const rows = pool.query(query, row);
      console.log("result", rows);
    } catch (err) {
      console.error(err);
    }
    return row;
  };

  const deleteCurriculum= async (id) => {
    let row = [id];
    console.log(row)
    try {
      let query = "DELETE FROM curriculum WHERE topic_id = ? ";
      const rows = pool.execute(query, row);
      console.log("result", rows);
    } catch (err) {
      console.error(err);
    }
    return row;
  };


  module.exports = {
    getAllCurriculum,
    getCurriculumById,
    getCreateCurriculum,
    udpateCurriculumById,
    deleteCurriculum
  }
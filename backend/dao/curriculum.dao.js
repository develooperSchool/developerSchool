// const mysql = require('mysql');
const db = require("../config/db-config");

// const connection = mysql.createConnection({
//     host: "srv944.hstgr.io",
//     user: "u904598717_dev_ds",
//     password: "Dev_ds@123",
//     database: "u904598717_dev_ds"
// });

// connection.connect();

class CurriculumDao {
  getAllCurriculumEntries(callback) {
    db.query('SELECT * FROM ', callback);
  }

//   getCurriculumEntryById(id, callback) {
//     connection.query('SELECT * FROM curriculum_entries WHERE id = ?', [id], callback);
//   }

//   createCurriculumEntry(entry, callback) {
//     connection.query('INSERT INTO curriculum_entries SET ?', entry, callback);
//   }

//   updateCurriculumEntry(id, entry, callback) {
//     connection.query('UPDATE curriculum_entries SET ? WHERE id = ?', [entry, id], callback);
//   }

//   deleteCurriculumEntry(id, callback) {
//     connection.query('DELETE FROM curriculum_entries WHERE id = ?', [id], callback);
//   }
}

module.exports = new CurriculumDao();

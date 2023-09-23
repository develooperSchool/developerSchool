const db = require("../config/db-config");

const addRevenueCategory = async () => {
  let row = [];
  try {
    const [rows, fields] = await db.query("SELECT * FROM revenue_category");
    row = rows;
  } catch (err) {
    console.error(err);
  }
  return row;
};

module.exports = { addRevenueCategory };

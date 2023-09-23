const db = require("../config/db-config");

const addRevenueCategoryDao = async () => {
  let row = [];
  try {
    const [rows, fields] = await db.query("SELECT * FROM revenue_category");
    row = rows;
    console.log("inside dao: ", row);
  } catch (err) {
    console.error(err);
    //res.status(500).json({ error: "Something went wrong" });
  }
  return row;
};

module.exports = { addRevenueCategoryDao };

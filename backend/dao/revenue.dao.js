const db = require("../config/db-config");

const addRevenueCategoryDao = async () => {
  try {
    const [rows, fields] = await db.query("SELECT * FROM revenue_category");
    console.log("inside dao", rows);
    return rows;
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
};

module.exports = addRevenueCategoryDao;

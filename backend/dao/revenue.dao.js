const db = require("../config/db-config");

const getAllRevenueCategories = async () => {
  let row = [];
  try {
    const [rows, fields] = await db.query(
      "SELECT * FROM revenue_category order by id"
    );
    row = rows;
  } catch (err) {
    console.error(err);
  }
  return row;
};

const addRevenueCategory = async (name) => {
  let row = [name];
  try {
    let query = "INSERT INTO revenue_category (name) VALUES(?)";
    const [rows] = db.execute(query, row);
    console.log("result", rows);
  } catch (err) {
    console.error(err);
  }
  return row;
};

const deleteRevenueCategory = async (name) => {
  let row = [name];
  try {
    let query = "DELETE FROM  revenue_category WHERE name = ? ";
    const rows = db.execute(query, row);
    console.log("result", rows);
  } catch (err) {
    console.error(err);
  }
  return row;
};

const udpateRevenueCategoryById = async (id, name) => {
  let row = [name, id];
  try {
    let query = "UPDATE revenue_category SET name = ? WHERE id = ?";
    const rows = db.query(query, row);
    console.log("result", rows);
  } catch (err) {
    console.error(err);
  }
  return row;
};

const saveIncomePaymentDetails = async (body) => {
  const {
    userId,
    studentId,
    revenueCategoryId,
    amount,
    totalFees,
    paidFees,
    balanceFees,
  } = body;

  let query = "";
  let row = [],
    values = [];
  try {
    if (parseInt(revenueCategoryId) === 1) {
      values = [
        userId,
        studentId,
        revenueCategoryId,
        amount,
        totalFees,
        paidFees,
        balanceFees,
      ];
      query =
        "INSERT INTO income (user_id, student_id, revenue_category_id, amount, total_fees, paid_fees, balance_fees) " +
        "VALUES(?, ?, ?, ?, ?, ?, ?)";
    } else {
      values = [userId, revenueCategoryId, amount];
      query =
        "INSERT INTO income (user_id, revenue_category_id, amount) " +
        "VALUES(?, ?, ?)";
    }
    const rows = db.query(query, values);
    console.log("result", rows);
    row = rows;
  } catch (err) {
    console.error(err);
  }
  return row;
};

module.exports = {
  getAllRevenueCategories,
  addRevenueCategory,
  deleteRevenueCategory,
  udpateRevenueCategoryById,
  saveIncomePaymentDetails,
};

const db = require("../config/db-config");
const ExpenseDetailsNotFoundError = require("../errors/ExpenseDetailsNotFoundError");
const IncomeDetailsNotFoundError = require("../errors/IncomeDetailsNotFoundError");
const RevenueCatogoryNotFoundError = require("../errors/RevenueCategoryNotFoundError");
const SqlError = require("../errors/SqlError");

const getAllRevenueCategories = async () => {
  let row = [];
  try {
    const [rows] = await db.query("SELECT * FROM revenue_category order by id");
    row = rows;
    console.log("fields", fields)
  } catch (err) {
    throw new SqlError(String(err.message).toUpperCase(), res);
  }
  return row;
};

const addRevenueCategory = async (name) => {
  let row = [name];
  try {
    let query = "INSERT INTO revenue_category (name) VALUES(?)";
    const [rows, fields] = await db.execute(query, row);
    console.log("result", rows);
  } catch (err) {
    throw new SqlError(String(err.message).toUpperCase(), res);
  }
  return row;
};

const deleteRevenueCategory = async (req, res) => {
  let id = req.params.id;
  try {
    let query = "DELETE FROM revenue_category WHERE id = ? ";
    const [result, fields] = await db.query(query, [id]);
    if (result.affectedRows == 0)
      throw new RevenueCatogoryNotFoundError(
        "REVENUE CATEGORY NOT FOUND FOR ID " + id,
        res
      );
  } catch (err) {
    throw new SqlError(String(err.message).toUpperCase(), res);
  }
};

const udpateRevenueCategoryById = async (id, name) => {
  let row = [name, id];
  try {
    let query = "UPDATE revenue_category SET name = ? WHERE id = ?";
    const [rows, fields] = await db.query(query, row);
    console.log("result", rows);
  } catch (err) {
    throw new SqlError(String(err.message).toUpperCase(), res);
  }
  return row;
};

const saveIncomePaymentDetails = async (req, res) => {
  let message = "";
  const {
    userId,
    studentId,
    revenueCategoryId,
    amount,
    totalFees,
    paidFees,
    balanceFees,
  } = req.body;

  try {
    let values = [
      userId,
      studentId,
      revenueCategoryId,
      amount,
      totalFees,
      paidFees,
      balanceFees,
    ];
    let query =
      "INSERT INTO income (user_id, student_id, revenue_category_id, amount, total_fees, paid_fees, balance_fees) " +
      "VALUES(?, ?, ?, ?, ?, ?, ?)";
    const [rows, fields] = await db.query(query, values);
    if (rows.affectedRows === 0)
      throw new SaveIncomeError("COULD NOT SAVE INCOME DETIAILS", res);
    else message = "SUCCESSFULLY SAVED INCOME DETAILS";
  } catch (err) {
    throw new SqlError(String(err.message).toUpperCase(), res);
  }
  return message;
};

const saveExpensePaymentDetails = async (req, res) => {
  const { revenueCategoryId, amount, mentorId, remark } = req.body;

  let query = "";
  let message = "";
  let values = [];

  try {
    values = [revenueCategoryId, amount, mentorId, remark];
    query =
      "INSERT INTO expense (revenue_category_id, amount, mentor_id, remark)" +
      "VALUES(?, ?, ?, ?)";
    const [rows, fields] = await db.query(query, values);
    if (rows.affectedRows === 0)
      throw new SaveExpenseError("COULD NOT SAVE EXPENSE DETIAILS", res);
    else message = "SUCCESSFULLY SAVED EXPENSE DETAILS";
  } catch (err) {
    throw new SqlError(String(err.message).toUpperCase(), res);
  }
  return message;
};

const getAllIncomeDetils = async (res) => {
  let row = [];
  try {
    const [rows, fields] = await db.query(
      "SELECT * FROM income ORDER BY income_id"
    );
    row = rows;
  } catch (err) {
    throw new SqlError(String(err.message).toUpperCase(), res);
  }
  return row;
};

const getIncomeDetilsById = async (req, res) => {
  let id = req.params.id;
  let row = [];
  try {
    const [rows, fields] = await db.query(
      "SELECT * FROM income WHERE income_id = ?",
      [id]
    );
    if (rows.length > 0) row = rows;
    else
      throw new IncomeDetailsNotFoundError(
        "INCOME DETAILS NOT FOUND FOR ID " + id,
        res
      );
  } catch (err) {
    throw new SqlError(String(err.message).toUpperCase(), res);
  }
  return row;
};

const getAllExpenseDetils = async (res) => {
  let row = [];
  try {
    const [rows, fields] = await db.query(
      "SELECT * FROM expense ORDER BY expense_id"
    );
    row = rows;
  } catch (err) {
    throw new SqlError(String(err.message).toUpperCase(), res);
  }
  return row;
};

const getExpenseDetilsById = async (req, res) => {
  let row = [];
  let id = req.params.id;
  try {
    const [rows, fields] = await db.query(
      "SELECT * FROM expense WHERE expense_id = ?",
      [id]
    );
    if (rows.length > 0) row = rows;
    else
      throw new ExpenseDetailsNotFoundError(
        "EXPENSE DETAILS NOT FOUND FOR ID " + id,
        res
      );
  } catch (err) {
    throw new SqlError(String(err.message).toUpperCase(), res);
  }
  return row;
};

module.exports = {
  getAllRevenueCategories,
  addRevenueCategory,
  deleteRevenueCategory,
  udpateRevenueCategoryById,
  saveIncomePaymentDetails,
  saveExpensePaymentDetails,
  getAllIncomeDetils,
  getAllExpenseDetils,
  getIncomeDetilsById,
  getExpenseDetilsById,
};

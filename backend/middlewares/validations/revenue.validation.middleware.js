const util = require("../../utils/app.utils");
const InvalidIdError = require("../../errors/InvalidIdError");
const InvalidFeeDetailsError = require("../../errors/InvalidFeeDetailsError");
const InvalidAmountError = require("../../errors/InvalidAmountError");

const deleteRevenueCategoryValidation = (req, res, next) => {
  if (util.isInvalidId(req.params.id))
    throw new InvalidIdError(
      "THE ID GIVEN TO DELETE REVENUE CATEGORY IS INVALID",
      res
    );
  else next();
};

const udpateRevenueCategoryByIdValidation = (req, res, next) => {
  if (util.isInvalidId(req.params.id))
    throw new InvalidIdError(
      "THE ID GIVEN TO UPDATE REVENUE CATEGORY IS INVALID",
      res
    );
  else next();
};

const paymentValidation = (req, res, next) => {
  if (
    util.isNullOrUndefined(req.body.userId) ||
    util.isInvalidId(req.body.userId)
  ) {
    throw new InvalidIdError("THE ENTERED USER ID IS INVALID", res);
  }

  if (util.isInvalidId(req.body.revenueCategoryId)) {
    throw new InvalidIdError("THE ENTERED REVENUE CATEGORY ID IS INVALID", res);
  }

  if (
    req.body.revenueCategoryId === 1 ||
    req.body.revenueCategoryId === 2 ||
    req.body.revenueCategoryId === 3 ||
    req.body.revenueCategoryId === 4
  ) {
    if (
      util.isNullOrUndefined(req.body.studentId) ||
      util.isInvalidId(req.body.studentId)
    ) {
      throw new InvalidIdError("THE ENTERED STUDENT IS NOT VALID", res);
    }
  }

  if (req.body.revenueCategoryId === 1) {
    if (
      util.isNullOrUndefined(req.body.totalFees) ||
      util.isNullOrUndefined(req.body.paidFees) ||
      util.isNullOrUndefined(req.body.balanceFees)
    ) {
      throw new InvalidFeeDetailsError("FEE DETAILS MUST BE APPROPRIATE", res);
    }
  }

  if (util.isInvalidAmount(req.body.amount)) {
    throw new InvalidAmountError("CAN'T MAKE PAYMENT WITH 0 AMOUNT", res);
  }

  next();
};

const getIncomeDetilsByIdValidation = (req, res, next) => {
  if (util.isInvalidId(req.params.id))
    throw new InvalidIdError(
      "THE ID GIVEN TO FETCH INCOME DETAILS IS INVALID",
      res
    );
  else next();
};

const getExpenseDetilsByIdValidation = (req, res, next) => {
  if (util.isInvalidId(req.params.id))
    throw new InvalidIdError(
      "THE ID GIVEN TO FETCH EXPENSE DETAILS IS INVALID",
      res
    );
  else next();
};

module.exports = {
  deleteRevenueCategoryValidation,
  udpateRevenueCategoryByIdValidation,
  paymentValidation,
  getIncomeDetilsByIdValidation,
  getExpenseDetilsByIdValidation,
};
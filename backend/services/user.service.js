// const { getUserById } = require("../controllers/user.controller");
const dao = require("../dao/user.dao");

const getAllUsers = async () => {
  let rows = [];
  await dao
    .getAllUsers()
    .then((res) => {
      rows = res;
    })
    .catch((err) => {
      console.log(err);
    });

  return rows;
};

const addUser = async (body) => {
  await dao
    .addUser(body)
    .then(() => {})
    .catch((err) => {
      console.log(err);
    });
};

const signInUser = async (body) => {
  let message = "";
  await dao
    .signInUser(body)
    .then((res) => {
      if (res.length > 0) message = "Login Success";
      else {
        message = "Invalid UserName";
      }
    })
    .catch((err) => {
      console.log(err);
    });

  return message;
};

const checkEmail = async (body) => {
  let msg = "";
  await dao
    .checkEmail(body)
    .then((res) => {
      if (res.length > 0) msg = "Email id already Exist";
      else {
        msg = "UNIQUE";
      }
    })
    .catch((err) => {
      console.log(err);
    });

  return msg;
};

const deleteUser = async (user_id) => {
  await dao
    .deleteUser(user_id)
    .then(() => {})
    .catch((err) => {
      console.log(err);
    });
};

const updateUser = async (user_id, body) => {
  await dao
    .updateUser(user_id, body)
    .then(() => {})
    .catch((err) => {
      console.log(err);
    });
};

const getEmailById = async (email_id) => {
  let result = [];
  await dao
    .getEmailById(email_id)
    .then((res) => {
      //console.log(res);
      result = res;
    })
    .catch((err) => {
      console.log(err);
    });
  return result;
};

const getUserById = async (user_id) => {
  let result = [];
  await dao
    .getUserById(user_id)
    .then((res) => {
      result = res;
    })
    .catch((err) => {
      console.log(err);
    });
  return result;
};

module.exports = {
  getAllUsers,
  addUser,
  deleteUser,
  updateUser,
  getEmailById,
  getUserById,
  signInUser,
  checkEmail,
};
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

const getAllAdmins = async () => {
  let row = [];
  await dao
    .getAllAdmins()
    .then((res) => {
      row = res;
    })
    .catch((err) => {
      console.log(err);
    });
  return row;
};

const getAllMentors = async () => {
  let row = [];
  await dao
    .getAllMentors()
    .then((res) => {
      row = res;
    })
    .catch((err) => {
      console.log(err);
    });
  return row;
};

const getAllGuest = async () => {
  let row = [];
  await dao
    .getAllGuest()
    .then((res) => {
      row = res;
    })
    .catch((err) => {
      console.log(err);
    });
  return row;
};

const getAllStudent = async () => {
  let row = [];
  await dao
    .getAllStudent()
    .then((res) => {
      row = res;
    })
    .catch((err) => {
      console.log(err);
    });
  return row;
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
  let msg = "";
  await dao
    .signInUser(body)
    .then((resp) => {
      if (resp.length > 0) msg = "Login Success";
      else {
        msg = "Login Failed";
      }
    })
    .catch((err) => {
      console.log(err);
    });
  return msg;
};

const deleteUser = async (user_id) => {
  let msg = "";
  await dao
    .deleteUser(user_id)
    .then((resp) => {
      console.log(resp.affectedRows);
      if (resp.affectedRows > 0) msg = "Deleted Successfully";
      else msg = "Not exist  user";
    })
    .catch((err) => {
      console.log(err);
    });
  return msg;
};

const updateUser = async (user_id, body) => {
  let msg = "";
  await dao
    .getUserById(user_id)
    .then(async (resp) => {
      // if(resp)
      if (resp.length > 0) {
        await dao
          .updateUser(user_id, body)
          .then((response) => {
            console.log("response", response);
            if (response.affectedRows > 0) msg = "Updated Successfully";
            else msg = "Not exist  user";
          })
          .catch((err) => {
            console.log(err);
          });
      } else msg = "USER DOES NOT EXIST";
    })
    .catch((err) => {
      console.log(err);
    });

  return msg;
};

const getUserByEmailId = async (email_id) => {
  let result = [];
  await dao
    .getUserByEmailId(email_id)
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

const resetpassword = async (email_id, password) => {
  let result = "";
  await dao
    .resetpassword(email_id, password)
    .then((res) => {
      result = res;
    })
    .catch((error) => {
      console.log("enter valid email id ");
    });
  return result;
};

const checkEmail = async (body) => {
  let msg = "";
  await dao
    .checkEmail(body)
    .then((res) => {
      console.log(res.length);
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

module.exports = {
  getAllUsers,
  addUser,
  deleteUser,
  updateUser,
  getUserByEmailId,
  getUserById,
  signInUser,
  resetpassword,
  checkEmail,
  getAllAdmins,
  getAllMentors,
  getAllGuest,
  getAllStudent,
};

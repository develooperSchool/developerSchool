// const { getUserById } = require("../controllers/user.controller");
const dao = require("../dao/user.dao");

/*GET ALL USERS */
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

/** GET ALL ENROLLMENTS */
const getAllEnrollments = async () => {
  let rows = [];
  await dao
    .getAllEnrollments()
    .then((res) => {
      rows = res;
    })
    .catch((err) => {
      console.log(err);
    });
  return rows;
};

/** GET ALL FACUTY ALLOTMENT */
const getAllAllotments = async () => {
  let rows = [];
  await dao
    .getAllAllotments()
    .then((res) => {
      rows = res;
    })
    .catch((err) => {
      console.log(err);
    });
  return rows;
};

/*GET ALL ADMINS */
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

/*GET ALL MENTORS */
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

/*GET ALL GUEST */
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

/*GET ALL STUDENT */
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

/* ADD USERS */
const addUser = async (body) => {
  await dao
    .addUser(body)
    .then(() => {})
    .catch((err) => {
      console.log(err);
    });
};

/** ADD ENROLLMENTS */
const addEnrollments = async (body) => {
  await dao
    .addEnrollments(body)
    .then(() => {})
    .catch((err) => {
      console.log(err);
    });
};

/** ADD FACLUTY ALLOTMENT */
const addFacultyAllotment = async (body) => {
  await dao
    .addFacultyAllotment(body)
    .then(() => {})
    .catch((err) => {
      console.log(err);
    });
};

/*SIGN IN USERS */
const signInUser = async (body) => {
  let msg = "";
  let result = [];
  await dao
    .signInUser(body)
    .then(async (resp) => {
      if (resp && resp.length > 0) {
        result = await getUserByEmailId(body.email);
      } else {
        msg = "Login Failed";
      }
    })
    .catch((err) => {
      console.log(err);
    });
  if (result.length > 0) return result;
  else return msg;
};

/* DELETE USERS */
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

/**DELETE ENROLLMENTS */
const deleteEnrollment = async (enrollment_id) => {
  let msg = " ";
  await dao
    .deleteEnrollment(enrollment_id)
    .then((resp) => {
      if (resp.affectedRows > 0) msg = "ENROLLMENT DELETED";
      else msg = "NOT EXIST";
    })
    .catch((err) => {
      console.log(err);
    });
  return msg;
};

/**DELETE FACULTY ALLOTMENT */
const deleteFacultyAllotment = async (allotment_id) => {
  let msg = " ";
  await dao
    .deleteFacultyAllotment(allotment_id)
    .then((resp) => {
      if (resp.affectedRows > 0) msg = "ENROLLMENT DELETED";
      else msg = "NOT EXIST";
    })
    .catch((err) => {
      console.log(err);
    });
  return msg;
};

/* UPDATE USERS */
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

const updateEnrollment = async (enrollment_id, body) => {
  let msg = "";
  await dao
    .updateEnrollment(enrollment_id, body)
    .then((resp) => {
      if (resp.affectedRows > 0) msg = "Updated Successfully";
      else msg = "Not Exits";
    })
    .catch((err) => {
      console.log(err);
    });

  return msg;
};

/**UPDATE FACULTY ENROLLMENT */
const updateFacultyAllotment = async (allotment_id, body) => {
  let msg = "";
  await dao
    .updateFacultyAllotment(allotment_id, body)
    .then((resp) => {
      if (resp.affectedRows > 0) msg = "Updated Successfully";
      else msg = "Not Exits";
    })
    .catch((err) => {
      console.log(err);
    });

  return msg;
};

/*GET USER BY EMAIL ID */
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

/*GET USER BY ID */
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

/*RESET PASSWORD */
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
  getAllEnrollments,
  addEnrollments,
  updateEnrollment,
  deleteEnrollment,
  getAllAllotments,
  addFacultyAllotment,
  updateFacultyAllotment,
  deleteFacultyAllotment,
};

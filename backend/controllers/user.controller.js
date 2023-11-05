

const service = require("../services/user.service");

/*GET ALL USERS*/
const getAllUsers = (req, res) => {
  service
    .getAllUsers()
    .then((resp) => {
      res.status(200).send(resp);
    })
    .catch((err) => {
      console.log(err);
    });
};

/**GET ALL ENROLLMENTS */
const getAllEnrollments = (req, res) => {
  service
    .getAllEnrollments()
    .then((resp) => {
      res.status(200).send(resp);
    })
    .catch((err) => {
      console.log(err);
    });
};

/**GET ALL FACULTY ALLOTMENT */
const getAllAllotments = (req, res) => {
  service
    .getAllAllotments()
    .then((resp) => {
      res.status(200).send(resp);
    })
    .catch((err) => {
      console.log(err);
    });
};

/*GET ALL ADMINS*/
const getAllAdmins = (req, res) => {
  service
    .getAllAdmins()
    .then((resp) => {
      res.status(200).send(resp);
    })
    .catch((err) => {
      console.log(err);
    });
};

/*GET ALL MENTORS*/
const getAllMentors = (req, res) => {
  service
    .getAllMentors()
    .then((resp) => {
      res.status(200).send(resp);
    })
    .catch((err) => {
      console.log(err);
    });
};

/*GET ALL GUEST*/
const getAllGuest = (req, res) => {
  service
    .getAllGuest()
    .then((resp) => {
      res.status(200).send(resp);
    })
    .catch((err) => {
      console.log(err);
    });
};

/*GET ALL STUDENTS*/
const getAllStudent = (req, res) => {
  service
    .getAllStudent()
    .then((resp) => {
      res.status(200).send(resp);
    })
    .catch((err) => {
      console.log(err);
    });
};

/*ADD USERS*/
const addUser = (req, res) => {
  service
    .addUser(req.body)
    .then(() => {
      res.status(200).send("ADDED SUCCESSFULLY");
    })
    .catch((err) => {
      console.log(err);
    });
};

/** ADD ENROLLMENTS */
const addEnrollments = (req, res) => {
  service
    .addEnrollments(req.body)
    .then(() => {
      res.status(200).send("ENTROLL SUCCESSFULLY");
    })
    .catch((err) => {
      console.log(err);
    });
};

/** ADD FACULTY ALLOTMENT */
const addFacultyAllotment = (req, res) => {
  service
    .addFacultyAllotment(req.body)
    .then(() => {
      res.status(200).send(" FACULTY ALLOTED SUCCESSFULLY");
    })
    .catch((err) => {
      console.log(err);
    });
};

/*DELETE USERS*/
const deleteUser = (req, res) => {
  console.log(req.params.id);
  service
    .deleteUser(req.params.id)
    .then((msg) => {
      res.status(200).send(msg);
    })
    .catch((err) => {
      console.log(err);
    });
};

/**DELETE ENROLLMENT */
const deleteEnrollment = (req, res) => {
  console.log(req.params.id);
  service
    .deleteEnrollment(req.params.id)
    .then((resp) => {
      res.status(200).send(resp);
    })
    .catch((err) => {
      console.log(err);
    });
};

/**DELETE FACULTY ENROLLMENT */
const deleteFacultyAllotment = (req, res) => {
  console.log(req.params.id);
  service
    .deleteFacultyAllotment(req.params.id)
    .then((resp) => {
      res.status(200).send(resp);
    })
    .catch((err) => {
      console.log(err);
    });
};

/*UPDATE USERS*/
const updateUser = (req, res) => {
  console.log(req.params.id, req.body);
  service
    .updateUser(req.params.id, req.body)
    .then((msg) => {
      res.status(200).send(msg);
    })
    .catch((err) => {
      console.log(err);
    });
};

/**UPADTE ENROLLMENTS */
const updateEnrollment = (req, res) => {
  console.log(req.params.id, req.body);
  service
    .updateEnrollment(req.params.id, req.body)
    .then((msg) => {
      res.status(200).send(msg);
    })
    .catch((err) => {
      console.log(err);
    });
};

/**UPADTE FACULTY ENROLLMENT */
const updateFacultyAllotment = (req, res) => {
  console.log(req.params.id, req.body);
  service
    .updateFacultyAllotment(req.params.id, req.body)
    .then((msg) => {
      res.status(200).send(msg);
    })
    .catch((err) => {
      console.log(err);
    });
};

/*GET USER BY EMAIL ID*/
const getUserByEmailId = (req, res) => {
  console.log(req.query.email);
  service
    .getUserByEmailId(req.query.email)
    .then((resp) => {
      res.status(200).send(resp);
    })
    .catch((err) => {
      console.log(err);
    });
};

/*GET USER BY ID*/
const getUserById = (req, res) => {
  console.log(req.params.id);
  service
    .getUserById(req.params.id)
    .then((resp) => {
      res.status(200).send(resp);
    })
    .catch((err) => {
      console.log(err);
    });
};

/*SIGN IN USER*/
const signInUser = (req, res) => {
  service
    .signInUser(req.body)
    .then((resp) => {
      res.status(200).send(resp);
    })
    .catch((err) => {
      console.log(err);
    });
};

/*RESET PASSWORD*/
const resetpassword = (req, res) => {
  const { email_id, password } = req.body;
  service
    .resetpassword(email_id, password)
    .then((resp) => {
      res.status(200).send({ message: resp });
    })
    .catch((err) => {
      console.log(err);
    });
};

/*CHECK EMAIL*/
const checkEmail = (req, res) => {
  service
    .checkEmail(req.body)
    .then((resp) => {
      res.status(200).send(resp);
    })
    .catch((err) => {
      console.log(err);
    });
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
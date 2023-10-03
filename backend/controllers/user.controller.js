const service = require("../services/user.service");

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
};

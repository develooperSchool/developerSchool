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
    .then(() => {
      res.status(200).send("DELETED SUCCESSFULLY");
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateUser = (req, res) => {
  console.log(req.params.id, req.body);
  service
    .updateUser(req.params.id, req.body)
    .then(() => {
      res.status(200).send("UPDATED SUCCESSFULLY");
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
};

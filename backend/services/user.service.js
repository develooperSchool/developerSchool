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

module.exports = {
  getAllUsers,
  addUser,
  deleteUser,
  updateUser,
};

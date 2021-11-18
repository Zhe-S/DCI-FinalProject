var express = require('express');
var router = express.Router();

const { getAllUsers, logInUser, registerUser, getUser, updateUser, deleteUser } = require('../controller/UsersController');

/* GET users listing. */
router.route('/')
  .get(getAllUsers)
  .post(registerUser);

router.route('/login')
  .post(logInUser);

router.route('/:id')
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser)

module.exports = router;

const express = require('express');
const router = express.Router();
const { userController } = require('../controllers');
const { auth } = require('../utils');

// TO DO:
router.get('/', auth(), userController.listUsers);
router.get('/:id', auth(), userController.getUser);
router.put('/:id', auth(), userController.updateUser);
router.delete('/:id', auth(), userController.deleteUser);


module.exports = router
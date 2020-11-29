const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { ctrl } = require('../controllers');

// middleware that is specific to this router

router.get('/', ctrl.listEntity);
router.get('/:id', ctrl.getEntity);
router.post('/', auth(), ctrl.createEntity);
router.put('/:id', auth(), ctrl.updateEntity);
router.delete('/:id', auth(), ctrl.deleteEntity);

module.exports = router
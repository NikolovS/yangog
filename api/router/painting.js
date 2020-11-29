const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { paintingController } = require('../controllers');

// middleware that is specific to this router

router.get('/', paintingController.listPaintings);
router.get('/:id', paintingController.getPainting);
router.post('/', auth(), paintingController.createPainting);
router.put('/:id', auth(), paintingController.updatePainting);
router.delete('/:id', auth(), paintingController.deletePainting);

module.exports = router
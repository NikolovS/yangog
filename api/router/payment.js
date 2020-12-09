const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { paymentController } = require('../controllers');

// middleware that is specific to this router

router.get('/', auth(), paymentController.listPayments);
router.get('/:id', auth(), paymentController.getPayment);
router.post('/', auth(), paymentController.createPayment);
router.put('/:id', auth(), paymentController.updatePayment);

router.delete('/:id', auth(), paymentController.deletePayment);




module.exports = router
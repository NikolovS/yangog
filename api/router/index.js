const router = require('express').Router();
const auth = require('./auth');
const user = require('./user');
const painting = require('./painting');
const payment = require('./payment');

router.use('/auth', auth);
router.use('/user', user);
router.use('/painting', painting);
router.use('/payment', payment);

module.exports = router;

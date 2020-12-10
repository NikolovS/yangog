const { paymentModel } = require('../models');
const paintingModel = require('../models/paintingModel');

function getPayment(req, res, next) {
    const { id } = req.params;
    paymentModel.findOne({ _id: id })
        .then(record => res.json(record))
        .catch(next);
}

function listPayments(req, res, next) {

    if (req.user.isAdmin) {

        paymentModel.find()
            .populate('paintings')
            .populate('userId')
            .then(payments => res.json(payments))
            .catch(next);
    } else {
        paymentModel.find({ userId: req.user._id }).populate('paintings')
            .populate('userId')
            .then(payments => res.json(payments))
            .catch(next);
    }
}

async function createPayment(req, res, next) {
    const { paintings, total } = req.body;
    const { _id: userId } = req.user;
    const record = await paymentModel.create({ userId, paintings, total })
    const update = await paintingModel.updateMany({ _id: { $in: paintings } }, { $set: { isSold: true } })
    if (record) {
        return res.status(200).json(record)
    }
    next();
}

async function updatePayment(req, res, next) {
    const { id } = req.params;
    const { status, total } = req.body;
    const { _id: userId } = req.user;

    await paymentModel.findByIdAndUpdate({ _id: id }, { userId, status, total })
    const updatedPayment = await paymentModel.findOne({ _id: id })
    res.status(200).json(updatedPayment)
}

function deletePayment(req, res, next) {
    const { id } = req.params;
    paymentModel.findByIdAndDelete({ _id: id })
        .then(deletedPayment => {
            res.status(200).json(deletedPayment)
        })
        .catch(next);
}

module.exports = {
    getPayment,
    listPayments,
    createPayment,
    updatePayment,
    deletePayment
}

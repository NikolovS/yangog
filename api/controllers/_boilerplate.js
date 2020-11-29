const { mdl } = require('../model');

function getEntity(req, res, next) {
    const { id } = req.params;
    mdl.findOne({ _id: id })
        .then(record => res.json(record))
        .catch(next);
}

function listEntity(req, res, next) {
    mdl.find()
        .then(records => res.json(records))
        .catch(next);
}

function createEntity(req, res, next) {
    const { fields } = req.body;
    const { _id: userId } = req.user;

    mdl.create({ newRecord })
        .then(record => {
            res.status(200).json(record)
        })
        .catch(next);
}

function updateEntity(req, res, next) {
    const { id } = req.params;
    const { fields } = req.body;
    const { _id: userId } = req.user;

    mdl.findByIdAndUpdate({ id }, { udpateRecord })
        .then(record => {
            res.status(200).json(record)
        })
        .catch(next);
}

function deleteEntity(req, res, next) {
    mdl.findByIdAndDelete({ id })
        .then(record => {
            res.status(200)
        })
        .catch(next);
}

module.exports = {
    getEntity,
    listEntity,
    createEntity,
    updateEntity,
    deleteEntity
}

const { paintingModel } = require('../models');

function listPaintings(req, res, next) {
    if (req.query.query) {
        const query = new RegExp(req.query.query, 'i')
        paintingModel.find({ name: query })
            .populate('author')
            .populate('buyer')
            .then(paintings => res.json(paintings))
            .catch(next);
    } else {

        paintingModel.find()
            .populate('author')
            .populate('buyer')
            .then(paintings => res.json(paintings))
            .catch(next);
    }
}

function getPainting(req, res, next) {
    const { id } = req.params;

    paintingModel.findById(id)
        .populate('author')
        .populate('paymentId')
        .then(painting => {
            res.json(painting)
        })
        .catch(next);
}

function createPainting(req, res, next) {
    const { name, description, price } = req.body;
    const { _id: author } = req.user;
    const { image } = req.files;
    image.mv('./static/' + image.name);
    paintingModel.create({ name, description, author, price, image: image.name })
        .then(painting => {
            res.status(200).json(painting)
        })
        .catch(next);
}

async function updatePainting(req, res, next) {
    const { id } = req.params;
    const { name, description, price, image } = req.body;
    const { _id: userId } = req.user;

    await paintingModel.findByIdAndUpdate({ _id: id }, { userId, name, description, price, image })
    const updatedPainting = await paintingModel.findOne({ _id: id })
    res.status(200).json(updatedPainting)
}

function deletePainting(req, res, next) {
    const { id } = req.params;
    const { _id: userId } = req.user;
    paintingModel.findByIdAndDelete({ _id: id })
        .then(deletedPainting => {
            res.status(200).json(deletedPainting)
        })
        .catch(next);

}

module.exports = {
    getPainting,
    listPaintings,
    createPainting,
    updatePainting,
    deletePainting
}



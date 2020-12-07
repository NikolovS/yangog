const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const paintingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: ObjectId,
        ref: "User"
    },
    price: {
        type: Number,
        required: true
    },
    isSold: {
        type: Boolean,
        default: false
    },
    image: {
        type: String,
        required: true
    },
    buyer: {
        type: ObjectId,
        ref: "User"
    },
}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('Painting', paintingSchema);

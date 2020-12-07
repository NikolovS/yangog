const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const paymentSchema = new mongoose.Schema({
    total: {
        type: Number,
        required: true
    },
    paintings: [{
        type: ObjectId,
        ref: "Painting"
    }],
    userId: {
        type: ObjectId,
        ref: "User"
    },
    status: {
        type: String,
        default: 'Success'
    },


}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('Payment', paymentSchema);

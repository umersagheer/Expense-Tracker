const mongoose = require('mongoose');

const TransactionScehma = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, "Please enter some text"],
    },
    amount: {
        type: Number,
        required: [true, "Please enter a +ve OR -ve number"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('Transaction', TransactionScehma);
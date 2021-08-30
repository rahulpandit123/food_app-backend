const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    PlacedBy:{
        type: String,
        required: true
    },
    PlacedByUserId : {
        type:Number,
        required: true
    },
    PlacedOn: {
        type:Date,
        required: true
    },
    Items : {
        type: String,
        required: true
    },
    Quantity: {
        type: Number,
        required: true
    },
    Amount: {
        type: Number,
        required: true
    }

})

module.exports = mongoose.model('order', orderSchema );
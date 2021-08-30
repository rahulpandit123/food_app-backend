const mongoose =  require('mongoose');

const Schema =  mongoose.Schema;

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    ingridients: {
        type: Array,
        required: true
    },
    restaurantId: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    qty: {
        type: Number
    },
    price: {
        type: String
    }
})

module.exports = mongoose.model('item',ItemSchema, 'items');
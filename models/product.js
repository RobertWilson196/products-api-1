const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    // name: String,   I would add more information about this property.
    name: { 
        required: true,
        type: String,
    },
    imgSrc: {
        required: true,
        type: String,
    },
    price: {
        required: true,
        type: Number,
    },
    created: {
        required: true,
        type: Date,
        default: Date.now
    }

});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
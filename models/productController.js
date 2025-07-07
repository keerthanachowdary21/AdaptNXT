const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    category: String
});

module.exports = mongoose.model('Product', productSchema);
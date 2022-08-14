const mongoose = require('mongoose')

const productsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
    },
    color: {
        type: String,
        lowercase: true,
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
    }
})

module.exports = mongoose.model("Products", productsSchema)
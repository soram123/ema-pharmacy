const mongoose = require('mongoose')
const {Schema } = mongoose 

const medicineSchema = new Schema({
    medId: String,
    name: String,
    price: Number,
    quantity: Number
})

module.exports = { medicineSchema}
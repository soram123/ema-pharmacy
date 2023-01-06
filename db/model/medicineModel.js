const mongoose = require('mongoose')
const medicine = require('../schema/medicineSchema').medicineSchema 

const Medicine = mongoose.model('medicines', medicine)

module.exports = {
    Medicine
}
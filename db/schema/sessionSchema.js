const mongoose = require('mongoose')
const {Schema } = mongoose 

const sessionSchema = new Schema({
    userId: String,
    token: String
})

module.exports = {
    sessionSchema
}
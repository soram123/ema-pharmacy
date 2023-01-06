const mongoose = require('mongoose')
const user = require('../schema/userSchema').userSchema

const Users = mongoose.model('users',user)

module.exports = {
    Users
}
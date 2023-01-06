const mongoose = require('mongoose')
const sessions = require('../schema/sessionSchema').sessionSchema

const Sessions = mongoose.model('sessions',sessions)

module.exports = {
    Sessions
}

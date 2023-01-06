const Users = require('../db/model/userModel').Users 

function addNewUser(user){
    console.log("user details ",user)
    return Users.create(user)
}

function findByEmail(email){
    return Users.find({email}).exec()
}

function findByUserId(userId){
    return Users.find({userId}).exec()
}

module.exports = {
    addNewUser,
    findByUserId,
    findByEmail
}
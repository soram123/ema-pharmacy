const { v4: uuidv4 } = require('uuid')
const userAccessor = require('../Accessor/userAccessor')

function addNewUser(user){

    return userAccessor.addNewUser({
        ...user, 
        userId: uuidv4()       
    })
}

module.exports = {
    addNewUser
}
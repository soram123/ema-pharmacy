const R = require('ramda')
const jwt = require('jsonwebtoken')
const UserAccessor = require('../Accessor/userAccessor')
const sessionAccessor = require('../Accessor/sessionAccessor')

const secretKey = "asdf123"

function login(email, password){
    return UserAccessor.findByEmail(email)
        .then((users)=>{
            console.log(`user from accessor :${JSON.stringify(users)}`)
            if(R.isNil(users) || users.length===0){
                return {statusCode:401, message:'invalid email!'}
            }
            let user = users[0] //bcoz using find it will retur array of objects
            if(R.isNil(user.password) || user.password !== password){
                return {statusCode:401, message:"invalid password!"}
            }
          
           const token = jwt.sign({email:user.email,password:user.password,userId:user.userId}, secretKey)

           sessionAccessor.addNewSession({
            token:token,
            userId:user.userId
            })
           return {statusCode:200,token}
        })
}

function logout(userId){
    return sessionAccessor.deleteAllSessionsByUserId(userId)
        .then((sessions)=>{
            if(R.isNil(sessions) || sessions.length===0){
                return {statusCode:200, message:'deleted all sessions !'}
            }
           
        })
 }

module.exports = {
    login,
    logout
}
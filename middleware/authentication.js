const jwt = require('jsonwebtoken')
const R = require('ramda')
const SessionAccessor = require('../Accessor/sessionAccessor')
const SECRET_KEY = 'asdf123'

function checkIfAuthenticated(req,res,next){
    const tokenString = req.headers['authorization']
    if(!R.isNil(tokenString)){
        const actualToken = tokenString.split(' ')[1] //bcoz tokenstring = bearer [space] token
        if(!R.isNil(actualToken)){
            try{
                let data = jwt.verify(actualToken, SECRET_KEY)
                let userId = data['userId']
                SessionAccessor.getSessionByKey(userId, actualToken)
                .then((sessions)=>{
                    let session = sessions[0]
                    if(!R.isNil(session)){
                        req.userId = userId
                        next()
                    }
                    else {
                        res.status(401).send('Could not find a session for you! Please login again!')
                    }
                })
            }
            catch(error){
                res.status(401).send('unable to decode the token')
            }
        }
        else{
            res.status(401).send('Please login before accessing the API')
        }
    }
    else {
        res.status(401).send('Please login before accessing the API')
    }
}

module.exports = {
    checkIfAuthenticated
}
const R = require('ramda')
const UserAccessor = require('../accessor/userAccessor')

function checkIfAuthorized(allowedRoles){
    return function(req,res,next){
        UserAccessor.findByUserId(req.userId)
        .then(users=>{
            let user = users[0]
            if(!R.isNil(user)){
                if(allowedRoles.includes(user.role)){
                    next()
                }
                else{
                    res.status(403).send('user not authorized!')
                }
            }
            else{
                res.status(403).send('Could not find user information!')
            }
        })
    }
}

module.exports = {
    checkIfAuthorized
}
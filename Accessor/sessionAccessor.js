const Sessions = require('../db/model/sessionModel').Sessions 

function addNewSession(tokenInput){
    console.log("tokenInput :",tokenInput  )
    return Sessions.create(tokenInput)
}

function getSessionByKey(userId, token){
    let filterQuery = { userId, token}
    return Sessions.find(filterQuery).exec()
}


function deleteAllSessionsByUserId(userId){
    return Sessions.find({userId}).exec()
    .then((res)=> 
        Sessions.deleteMany(res.userId).exec()
       ) 
}

module.exports = {
    addNewSession,
    getSessionByKey,
    deleteAllSessionsByUserId,
   
}
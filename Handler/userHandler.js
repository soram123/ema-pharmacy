const R = require('ramda')
const userService = require('../Service/userService')

function addNew( req, res){
    const userInput = req.body
    console.log(`userInput = ${JSON.stringify(userInput)}`)
   
    if(R.isNil(userInput.email)){
        res.status(400).send('Email not present!')
        return
    }
    if(R.isNil(userInput.name)){
        res.status(400).send('name not present!')
        return
    }
    if(R.isNil(userInput.password)){
        res.status(400).send('password not present!')
        return
    }
        userService.addNewUser(userInput)
    .then(()=>res.status(200).send("user successfully registered!"))
    .catch((error)=>res.status(500).send(error))
}

module.exports = {
    addNew   
}
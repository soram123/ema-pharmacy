//const serverless = require('serverless-http')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const userHandler = require('./Handler/userHandler')
const authHandler = require('./Handler/authHandler')
const medHandler = require('./Handler/medHandler')
const authentication = require('./middleware/authentication')
const authorization = require('./middleware/authorization')
const Roles = require('./db/constants/roles')


const port = 3005 

let dbUrl = "mongodb+srv://martin:Sambam@ema-pharmacy.xllkrwv.mongodb.net/Ema-pharmacy"

mongoose.connect(dbUrl)
 .then(()=>console.log("Mongodb connection successful!"))
 .catch(error=>console.log(`unable to connect due to ${error}`))

app.use(express.json())

app.use(cors())
 
app.get('/',function(req, res){
    res.send("welcome to ema medical pharmacy!")
})

app.post('/user/register',userHandler.addNew)

app.post('/user/login', authHandler.login)

//just ot test whether authentication and authorization is working or not
app.post('/authenticate',authentication.checkIfAuthenticated,
        authorization.checkIfAuthorized([Roles.ROLE_ADMIN]),
        function(req,res){
            res.status(200).send('You are logged In!')
        })

app.get('/med', authentication.checkIfAuthenticated,
                authorization.checkIfAuthorized([Roles.ROLE_ADMIN]), medHandler.getMedicine)

app.get('/med/:id', authentication.checkIfAuthenticated,
                    authorization.checkIfAuthorized([Roles.ROLE_ADMIN]), medHandler.getMedicineById)

app.post('/med/add', authentication.checkIfAuthenticated,
                     authorization.checkIfAuthorized([Roles.ROLE_ADMIN]), medHandler.addNewMedicine)

app.put('/med/update/:id',  authentication.checkIfAuthenticated,
                            authorization.checkIfAuthorized([Roles.ROLE_ADMIN]),medHandler.updateMedicine)

app.delete('/med/delete/:id', authentication.checkIfAuthenticated,
                              authorization.checkIfAuthorized([Roles.ROLE_ADMIN]),medHandler.deleteMedicine)

app.post('/user/logout/:id', authentication.checkIfAuthenticated,
                         authorization.checkIfAuthorized([Roles.ROLE_ADMIN]), authHandler.logout)

app.listen(port,function(){
    console.log(`server started on port ${port}`)
})

//module.exports.handler = serverless(index);
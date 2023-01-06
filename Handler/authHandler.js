const authService = require('../Service/authService')

function login(req, res, next){
    const { email, password } = req.body 
    console.log(`email and password ${email} and ${password}`)
    return authService.login(email, password)
        .then((result)=>{
            if(result.statusCode == 200){
                res.status(200).send(result.token)
            }
            else{
                res.status(result.statusCode).send("login failed!")
            }
        })
        .catch(error =>res.status(500).send(error))
}

function logout(req,res){
    const userId = req.params.id
    console.log("userId ",userId)
    authService.logout(userId)
      .then(()=>{
        res.status(200).send('Logged Out Successfully!')
      })
      .catch(error=>{
        console.log(error)
        res.status(500).send(error)
      })
 }

module.exports = {
    login,
    logout
}
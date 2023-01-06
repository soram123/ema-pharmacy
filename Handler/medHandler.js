const R = require('ramda')
const MedService = require('../Service/medService')

function getMedicine(req, res){
   
    MedService.getMedicine()
      .then((result)=>{
        res.status(200).send(result)
      })
      .catch((err)=>{
        res.status(500).send(err)
      })
}

function getMedicineById(req, res){

    const medId = req.params.id 
    console.log(`med ID : ${medId}`)

    MedService.getMedicineById(medId)
    .then((result)=>{
        res.status(200).send(result)
      })
      .catch((err)=>{
        res.status(500).send(err)
      })
}

function addNewMedicine(req, res){

      const medInput = req.body
        console.log(`medicines input : ${JSON.stringify(medInput)}`)
        
        if(R.isNil(medInput.name)){
            return res.status(400).send('medicine name not present!')
        }
        if(R.isNil(medInput.price)){
            return res.status(400).send('medicine price not present!')
        }
        if(R.isNil(medInput.quantity)){
            return res.status(400).send('medicine quantity not present!')
        }
        
        MedService.addNewMedicine(medInput)
        .then((result)=>{
            res.status(200).send(result)
        })
        .catch((err)=>{
            res.status(500).send(err)
        })
        
}

function updateMedicine(req, res){
    const medId = req.params.id 
    const medInput = req.body
    console.log(`med ID : ${medId}`)
    console.log(`med Input : ${JSON.stringify(medInput)}`) 

    MedService.updateMedicine(medId, medInput)
    .then((result)=>{
        res.status(200).send('it is successfully updated!')
    })
    .catch((err)=>{
        res.status(500).send(err)
    })
}

 function deleteMedicine(req, res){
    const medId = req.params.id
    console.log(`med ID : ${medId}`)
    MedService.deleteMedicine(medId)
        .then((result)=>{
            res.status(200).send("successfully deleted!")
        })
        .catch((err)=>{
            res.status(500).send(err)
        })
  }

module.exports ={
    addNewMedicine,
    deleteMedicine,
    getMedicine,
    getMedicineById,
    updateMedicine
}
const Medicine = require('../db/model/medicineModel').Medicine 

function addNewMedicine(medicine){
    return Medicine.create(medicine)
}

function getMedicine(){
    return Medicine.find()
}

function findByMedID(medId){
    return Medicine.find({medId}).exec()
}

function deleteByMedID(medId){
    return  Medicine.find({medId}).exec()
       .then((res)=> Medicine.findByIdAndDelete(res[0]._id).exec())
    
}

function updateByMedID(medId, medInput){
    return  Medicine.find({medId}).exec()
        .then((res)=>Medicine.findByIdAndUpdate(res[0]._id, medInput).exec())
}
module.exports = {
    addNewMedicine,
    findByMedID,
    deleteByMedID,
    updateByMedID,
    getMedicine
}
const { v4: uuidv4 } = require('uuid')
const MedAccessor = require('../Accessor/medAccessor')

function addNewMedicine(medicine){

    return MedAccessor.addNewMedicine({
        ...medicine,
        medId: uuidv4()
    })
  
}

function getMedicine(){

    return MedAccessor.getMedicine()
}

function getMedicineById(medId){
    return MedAccessor.findByMedID(medId)
}

function updateMedicine(medId, medInput){
    return MedAccessor.updateByMedID(medId, medInput)
}

function deleteMedicine(medId){
    return MedAccessor.deleteByMedID(medId)
}

module.exports = {
    addNewMedicine,
    getMedicine,
    deleteMedicine,
    getMedicineById,
    updateMedicine
}

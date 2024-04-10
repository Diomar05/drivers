const getAllDrivers = require('../Controllers/1_Drivers')
const getIdDrivers = require('../Controllers/2_IdDriver')
const getAddDrivers = require('../Controllers/4_AddDriver')


exports.allDrivers = async(req, res) => {
    try {
        const response = await getAllDrivers()
        res.status(200).json(response)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

exports.idDrivers = async(req, res) => {
    const { id } = req.params;
    const source = isNaN(id) ? "bdd" : "api";
    try {

        const response = await getIdDrivers(id, source)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


exports.addDriver = async (req, res) => {
    const { name, lastname,  description, image, nationality, birthdate, team } = req.body

    try {
        const response = await getAddDrivers(name, lastname,  description, image, nationality, birthdate, team)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
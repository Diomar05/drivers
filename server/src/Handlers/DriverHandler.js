
exports.allDrivers = async(req, res) => {
    try {
        res.status(200).json(response)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

exports.idDrivers = async(req, res) => {
    try {
        res.status(200).json(response)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

exports.addDriver = async(req, res) => {
    try {
        res.status(200).json(response)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}
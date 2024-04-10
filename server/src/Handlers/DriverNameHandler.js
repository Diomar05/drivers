
exports.nameDriver = async (req, res) => {
    try {
        res.status(200).json(response)
    }catch(error){
        res.status(400).json({error: error.message})
    }
};
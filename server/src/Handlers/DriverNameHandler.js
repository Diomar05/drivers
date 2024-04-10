const getNameDriver = require('../Controllers/3_NameDriver')

exports.nameDriver = async (req, res) => {
    const { name } = req.query;
    try {
        const driverName = await getNameDriver(name)
        res.status(200).json(driverName)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


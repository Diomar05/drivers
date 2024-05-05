const { getAllTeams } = require('../Controllers/5_Teams')

exports.allTeams = async(req, res) => {
    try {
        const response = await getAllTeams()
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// exports.nameTeam = async (req, res) => {
//     const { name } = req.query;
//     try {
//         const teamName = await getNameTeams(name)
//         res.status(200).json(teamName)
//     } catch (error) {
//         res.status(400).json({error: error.message})
//     }
// }
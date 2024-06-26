const { Teams } = require("../db");
const axios = require("axios");
const { v4: isUUID } = require("uuid");

const URL = "http://localhost:5000/drivers";

// exports.getNameTeams = async (name) => {
  
//   // Consulta base de Datos Local
//   const teamsDB = await Teams.findAll({ where: {name: {[Op.iLike]:`%${name}%`}}, include: Teams});  
 
//   if(!name){
//     return "No se Encuentra el Equipo";
//   }else{
//     const teamsLocal = teamsDB.map((tem) => (tem));

//     // return driverClean.slice(0, 15);
//     return teamsLocal;
//   }  
// }




exports.getAllTeams = async () => {
 // try {
    // Fetch data from the URL
    const response = await axios.get(URL);
    const data = response.data;

    // Extract solo nombre de equipos
    const uniqueTeams = data
      .map((driver) => driver.teams)
      .filter((teams) => teams)
      .join(',')
      .split(',')
      .map((teams) => teams.trim()) // Trim whitespace from team names
      .filter((teams, index, self) => self.indexOf(teams) === index) // Get unique team names

    .map((teams) => ({ teams: teams}));
    return Teams.bulkCreate(uniqueTeams)
}





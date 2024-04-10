const { Teams } = require('../db')
const axios = require('axios')

const url = 'http://localhost:5000/drivers'

exports.getAllTeams = async () => {
    // try {
       // Fetch data from the URL
       const response = await axios.get(URL);
       const data = response.data;
   
       // Extract solo nombre de equipos
       const uniqueTeams = data
         .map((driver) => driver.teams)
         .filter((team) => team)
         .join(',')
         .split(',')
         .map((team) => team.trim()) // Trim whitespace from team names
         .filter((team, index, self) => self.indexOf(team) === index) // Get unique team names
   
       .map((team) => ({ team: team }));
       return Teams.bulkCreate(uniqueTeams)
   }
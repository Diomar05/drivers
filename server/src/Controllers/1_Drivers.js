const {  Driver, Teams } = require('../db')
const axios = require('axios')
const URL = "http://localhost:5000/drivers";

const info = (arr) => {
  return arr.map((drivers) => {
    return {
      id: drivers.id,
      name: drivers.name.forename,
      lastname: drivers.name.surname,
      description: drivers.description,
      image: drivers.image.url,
      nationality: drivers.nationality,
      birthdate: drivers.dob,
      teams: drivers.teams,
    };
  });
};
  
const getAllDrivers = async () => {
 
    const driversApi = info((await axios.get(URL)).data).map(
      (drivers) => drivers
    );
  
    const driversDb = await Driver.findAll({
      include: {
        model: Teams,
        attributes: ['team'],
        through: {
          attributes: []
        }
      }
    });
  
    return [...driversDb, driversApi];
  };

  module.exports = getAllDrivers;
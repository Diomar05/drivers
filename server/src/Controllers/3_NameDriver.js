const { Driver, Teams } = require("../db");
const axios = require("axios");
const { Op } = require('sequelize');

function clean(driver) {
  return {
    id: driver.id,
    name: driver.name.forename,
    lastname: driver.name.surname,
    description: driver.description,
    image: driver.image.url,
    nationality: driver.nationality,
    birthdate: driver.dob,
    teams: driver.teams,
  };
}

const URL = 'http://localhost:5000/drivers?name.forename=';

const getNameDriver = async (name) => {
    // !Realizo Consulta api
// const response = await axios.get(`${URL}${name}`);
 const response = (await axios.get(`${URL}${name}`));

 const driversApi = response.data.map(driver => clean(driver));

// !Realizo consulta base de Datos Local
// const dogsDB = await Dogs.findAll({where: {name: {[Op.iLike]:`%${name}%`}}, include: Temperaments});
   const driversDB = await Driver.findAll({where: {name: {[Op.iLike]:`${name}`}}, 
    includes: { Teams },
    limit: 15
  })

 // Combinar los resultados de ambas consultas
//  const allDrivers = driversApi.concat(driversDB);
 const allDrivers = [...driversApi, ...driversDB];

if(!name) {
    return allDrivers
} else {
    const driver = allDrivers.filter(d => d.name.toLowerCase().includes(name.toLowerCase()))
    // Limpiar los resultados
 const driverClean = driver.map(dri => clean(dri));

 // Retornar los resultados
 return driverClean.slice(0, 15);
 
}

}

module.exports = getNameDriver;

// const { Driver, Teams } = require("../db");
// const axios = require("axios");
// const { Op } = require('sequelize');

// function clean(driver) {
//   return {
//     id: driver.id,
//     name: driver.name.forename,
//     lastname: driver.name.surname,
//     description: driver.description,
//     image: driver.image.url,
//     nationality: driver.nationality,
//     birthdate: driver.dob,
//     teams: driver.teams,
//   };
// }

// const URL = 'http://localhost:5000/drivers?name.forename=';

// const getNameDriver = async (name) => {
//   // let allDrivers = [];
 
//     // Consulta API
//     const responseApi = await axios.get(`${URL}${name}`);
//     // const driversApi = responseApi.data.map(driver => clean(driver));
//     const driversApi = responseApi.data;
//     console.log(driversApi);

//     // Consulta base de Datos Local
//     const driversDB = await Driver.findAll({ where: { name: {[Op.iLike]: `%${name.toLowerCase().includes(name.toLowerCase())}%` }},
//       include: Teams});

//    // Combinar los resultados de ambas consultas
//     const allDrivers = driversApi.concat(driversDB)
    
   
//     if(name){
//       return "No se Encuentra el Conductor";
//     }else{
//       // const allDriver = await allDrivers.filter(d => d.name.toLowerCase().includes(name.toLowerCase()));

//       const driverClean = allDrivers.map((dri) => clean(dri));

//       // return driverClean.slice(0, 15);
//       return driverClean.slice(0, 15);
//     }  
// }

// module.exports = getNameDriver;


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

const URL = 'http://localhost:5000/drivers';

const getNameDriver = async (name) => {
  // let allDrivers = [];
 
    // Consulta API
    const driversApi = (await axios.get(`${URL}`)).data;
    
    // Consulta base de Datos Local
    const driversDB = await Driver.findAll({ where: {name: {[Op.iLike]:`%${name}%`}}, include: Teams});

   // Combinar los resultados de ambas consultas
        const allDrivers = [...driversApi, ...driversDB]
    
   
    if(!name){
      return "No se Encuentra el Conductor";
    }else{
      // const allDriver = await allDrivers.filter(d => d.name.toLowerCase().includes(name.toLowerCase()));

      const driverClean = allDrivers.map((dri) => clean(dri));

      // return driverClean.slice(0, 15);
      return driverClean.slice(0, 15);
    }  
}

module.exports = getNameDriver;
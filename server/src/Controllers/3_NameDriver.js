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
//     // !Realizo Consulta api
// // const response = await axios.get(`${URL}${name}`);
//  const response = await axios.get(`${URL}${name}`);

//  const driversApi = response.data.map(driver => clean(driver));

// // !Realizo consulta base de Datos Local
// // const dogsDB = await Dogs.findAll({where: {name: {[Op.iLike]:`%${name}%`}}, include: Temperaments});
//    const driversDB = await Driver.findAll({where: {name: {[Op.iLike]:`${name}`}},
//     includes: { Teams },
//     limit: 15
//   })

//  // Combinar los resultados de ambas consultas
// //  const allDrivers = driversApi.concat(driversDB);
//  const allDrivers = [...driversApi, ...driversDB];

// if(!name) {
//     return allDrivers
// } else {
//     const driver = allDrivers.filter(d => d.name.toLowerCase().includes(name.toLowerCase()))
//     // Limpiar los resultados
//  const driverClean = driver.map(dri => clean(dri));

//  // Retornar los resultados
//  return driverClean.slice(0, 15);

// }

// }

// module.exports = getNameDriver;

// const { Driver, Teams } = require("../db");
// const axios = require("axios");
// const { Op } = require("sequelize");

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

// const URL = "http://localhost:5000/drivers?name.forename=";

// const getNameDriver = async (name) => {
//   let allDrivers = [];

//   if (!name) {
//     // Si no se proporciona un nombre, se devuelven todos los conductores
//     const response = await axios.get(URL);
//     allDrivers = response.data.map((driver) => clean(driver));
//   } else {
//     // Consulta API
//     const responseApi = await axios.get(`${URL}${name}`);
//     const driversApi = responseApi.data.map((driver) => clean(driver));

//     // Consulta base de Datos Local
//     const driversDB = await Driver.findAll({
//       where: {
//         name: {
//           [Op.iLike]: `%${name}%`,
//         },
//       },
//       include: {
//         model: Teams,
//         as: "Teams",
//       },
//       limit: 15,
//     });

//     // Combinar y eliminar duplicados
//     allDrivers = [...driversApi, ...driversDB].reduce((acc, driver) => {
//       const existingDriver = acc.find((d) => d.id === driver.id);
//       if (!existingDriver) {
//         acc.push(driver);
//       }
//       return acc;
//     }, []);

//     // Filtrar por nombre
//     allDrivers = allDrivers
//       .filter((d) => d.name.toLowerCase().includes(name.toLowerCase()))
//       .slice(0, 15);
//   }

//   return allDrivers;
// };

// module.exports = getNameDriver;



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
//   let allDrivers = [];

//   if (!name) {
//     // Si no se proporciona un nombre, se devuelven todos los conductores
//     const response = await axios.get(URL);
//     allDrivers = response.data.map(driver => clean(driver));
//   } else {
//     // Consulta API
//     const responseApi = await axios.get(`${URL}${name}`);
//     const driversApi = responseApi.data.map(driver => clean(driver));

//     // Consulta base de Datos Local
//     const driversDB = await Driver.findAll({
//       where: {
//         name: {
//           [Op.iLike]: `%${name}%`
//         }
//       },
//       include: { 
//         model: Teams,
//         as: 'Teams'
//       }
//     });

//     // Combinar y eliminar duplicados
//     allDrivers = [...driversApi, ...driversDB].reduce((acc, driver) => {
//       const existingDriver = acc.find(d => d.id === driver.id);
//       if (!existingDriver) {
//         acc.push(driver);
//       }
//       return acc;
//     }, []);

//     // Ordenar y filtrar por relevancia
//     allDrivers = allDrivers
//       .map(driver => ({
//         ...driver,
//         relevance: driver.name.toLowerCase().startsWith(name.toLowerCase()) ? 2 : 
//                     driver.name.toLowerCase().includes(name.toLowerCase()) ? 1 : 0
//       }))

//       .slice(0, 15);
//   }

//   return allDrivers;
// }

// module.exports = getNameDriver;








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
//   let allDrivers = [];

 
//     // Consulta API
//     const responseApi = await axios.get(`${URL}${name}`);
//     const driversApi = responseApi.data.map(driver => clean(driver));

//     // Consulta base de Datos Local
//     const driversDB = await Driver.findAll({
//       where: {
//         name: {
//           [Op.iLike]: `%${name}%`
//         }
//       },
//       include: { 
//         model: Teams,
//         as: 'Teams'
//       }
//     });

//     // Combinar y eliminar duplicados
//     allDrivers = driversApi.concat(driversDB)
    
   
//     // Filtrar por nombres que comienzan con la letra proporcionada
//     allDrivers = await allDrivers.filter(driver => driver.name.toLowerCase().includes(name.toLowerCase()));

//   return allDrivers.slice(0, 15);
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

const URL = 'http://localhost:5000/drivers?name.forename=';

const getNameDriver = async (name) => {
  // let allDrivers = [];
 
    // Consulta API
    const responseApi = await axios.get(`${URL}${name}`);
    // const driversApi = responseApi.data.map(driver => clean(driver));
    const driversApi = responseApi.data;
    console.log(driversApi);

    // Consulta base de Datos Local
    const driversDB = await Driver.findAll({ where: { name: {[Op.iLike]: `%${name.toLowerCase().includes(name.toLowerCase())}%` }},
      include: Teams});

   // Combinar los resultados de ambas consultas
    const allDrivers = driversApi.concat(driversDB)
    
   
    if(){
      return "No result";
    }else{
      // const allDriver = await allDrivers.filter(d => d.name.toLowerCase().includes(name.toLowerCase()));

      const driverClean = allDrivers.map((dri) => clean(dri));

      // return driverClean.slice(0, 15);
      return driverClean.slice(0, 15);
    }  
}

module.exports = getNameDriver;
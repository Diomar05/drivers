const { Driver, Teams } = require("../db");
const axios = require("axios");
const URL = "http://localhost:5000/drivers";
const { Op } = require("sequelize");

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

  const teamsDb = await Teams.findAll();

  const driversDb = await Driver.findAll({
    include: [{
        model: Teams,
        where: {
          teams: {
            [Op.or]: teamsDb.map((team) => team.teams),
          },
        },
      },
    ],
  }
);


  const combinedDrivers = driversDb.map((driver) => ({
    ...driver.dataValues,

  
teams: driver.Teams.map((team) => team.dataValues.teams),  
}));


return [...combinedDrivers, ...driversApi]; // Combinar los resultados






  // return [...driversDb, driversApi];
};

module.exports = getAllDrivers;

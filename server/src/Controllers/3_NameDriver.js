const { Driver, Teams } = require("../db");
const axios = require("axios");
const { Sequelize } = require("sequelize");

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

const getNameDriver = async (name) => {
  const responseApi = await axios.get(
    `http://localhost:5000/drivers?name.forename=${name}`
  );
  const driversApi = responseApi.data.map((driver) => clean(driver));

  // Obtiene conductores de la base de datos local
  const driversDb = await Driver.findAll({
    where: {
      name: { [Sequelize.Op.iLike]: `%${name}%` }, 
      // Búsqueda insensible a mayúsculas y minúsculas
    },
    limit: 15,
  });

  const driversFromDb = driversDb.map((driver) => clean(driver));

  // Combina y devuelve los resultados
  const allDrivers = [...driversApi, ...driversFromDb];
  return allDrivers.slice(0, 15); // Limita a los primeros 15 conductores
};

module.exports = getNameDriver;

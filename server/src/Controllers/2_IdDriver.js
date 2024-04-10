const { Driver } = require("../db");
const axios = require("axios");
const URL = "http://localhost:5000/drivers";

function cleanDriverData(driver) {
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

const getIdDrivers = async (id, source) => {
  let driverData;

  if (source === "bdd" || source === "api") {
    const response = await axios.get(`${URL}/${id}`);
    driverData = response.data;
  } else {
    driverData = await Driver.findByPk(id);
  }
  return cleanDriverData(driverData);
};

module.exports = getIdDrivers;
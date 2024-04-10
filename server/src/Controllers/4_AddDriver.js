const { Driver, Teams } = require("../db");

// const getAddDrivers = async (name, lastname, description, image, nationality, birthdate, team) => {
//     if (!name || !lastname || !image || !nationality || !birthdate) {
//       return "Campos obligatorios están vacíos";
//     } else {
//       const newDriver = await Driver.findOrCreate({
//         where: {
//           name, lastname, description, image, nationality, birthdate},
//       });

//       if (team) {
//         const teamNames = team.split(',');

//         const teamPromises = teamNames.map(async (t) => {
//           const teamsdb = await Teams.findOne(
//             { where: { team: team} });

//           if (teamsdb) {
//             await newDriver.pushTeams(teamsdb);
//           }
//         });

//         await Promise.all(teamPromises);
//       }

//       return newDriver;
//     }
//   };

const getAddDrivers = async( name, lastname, description, image, nationality, birthdate, team) => {


  if (
    !name ||
    !lastname || 
    !description ||
    !image || 
    !nationality || 
    !birthdate || 
    !team
  ) {
    throw new Error("Faltan datos");
  } 

    const existDriver = await Driver.findOne({ where: {name: name}})

    if (existDriver) {
      return "Ya existe un conductor con ese nombre"
    }else {
      const newDriver = await Driver.create({
        
          name: name,
          lastname: lastname,
          description: description,
          image: image,
          nationality: nationality,
          birthdate: birthdate,
    });



    const teamFound = await Teams.findAll({
      where: { team },
    });

      await newDriver.addTeam(teamFound);
      return newDriver;
    }


};

module.exports = getAddDrivers;

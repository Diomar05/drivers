const { Router } = require('express');
const teams = require('../Handlers/TeamsHandler')

teamsRouter = Router();

// ! Ruta para obtener todos los Equipos
teamsRouter.get("/teams", teams.allTeams);


module.exports = teamsRouter;
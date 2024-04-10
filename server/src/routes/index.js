const { Router } = require("express");

const drivers = require('./DriverRouter')
const drivername = require('./DriverNameRouter')
const teams = require('./TeamsRouter')

const router = Router();

 router.use('/drivers', drivers)
 router.use('/drivername', drivername)
 router.use('/teams', teams)
 

module.exports = router;
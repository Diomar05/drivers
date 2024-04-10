const Router = require('express');

const driver = require('../Handlers/DriverNameHandler.js')

driverNameRouter = Router();

driverNameRouter.get("/", driver.nameDriver);

module.exports = driverNameRouter;
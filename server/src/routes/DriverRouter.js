const { Router } = require('express');

const drivers = require('../Handlers/DriverHandler')

driversRouter = Router();

driversRouter.get("/", drivers.allDrivers);
// driverRouter.get("/", (req, res)=>{
//     res.status(200).send("Aqui estan todos los conductores")
// }); 

driversRouter.get("/:id", drivers.idDrivers);
// driverRouter.get("/id", (req,res)=>{res.status(200).send("Detalle conductor")});

driversRouter.post("/", drivers.addDriver);
// driverRouter.post("/", (req, res)=>{res.status(200).send("Crear conductor")});

module.exports = driversRouter;
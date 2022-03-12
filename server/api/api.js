const express = require("express");
const excelRoute = require("../excelRoute/excelRoute");


const apiRouter = express.Router();


apiRouter.use("/excel", excelRoute);


module.exports = apiRouter
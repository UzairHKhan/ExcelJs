const express = require("express");
const { createExcel1, createExcel2 } = require("../createExcel/createExcel");

const excelRoute = express.Router();

excelRoute.route("/1").get(createExcel1);
excelRoute.route("/2").get(createExcel2);

module.exports = excelRoute;

const express = require("express")
const chartController = require("../controllers/chart.controller")
const route = express.Router()

route.route("/").get(chartController.getCharts)

module.exports = route
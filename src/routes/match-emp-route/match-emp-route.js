const express = require('express')
const matchEmpRoute = express.Router()

const matchedEmpHandler = require("../../controllers/get-match-emp-controller/get-match-emp-controller")

matchEmpRoute.get("/match-emp/:service_category_id/:sub_category_id",matchedEmpHandler)

module.exports = matchEmpRoute
const express = require('express')
const empServiceRoute = express.Router()

const auth = require('../../middlewares/auth/auth')

const {
    addServiceOfEmp,
    deleteServiceOfEmp,
    getServiceOfEmp
} = require('../../controllers/emp-service-controller/emp-service-controller')

empServiceRoute.post("/emp-service",auth,addServiceOfEmp)
empServiceRoute.delete("/emp-service",auth,deleteServiceOfEmp)
empServiceRoute.get("/emp-service",auth,getServiceOfEmp)

module.exports = empServiceRoute


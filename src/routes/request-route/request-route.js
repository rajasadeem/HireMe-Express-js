const express = require('express')
const requestRoute = express.Router()

const auth = require('../../middlewares/auth/auth')

const {
    addCustomerRequest,
    getCustomerRequest,
    deleteCustomerRequest
} = require('../../controllers/requests-controller/request-controller')

requestRoute.post("/request",auth,addCustomerRequest)
requestRoute.get("/request",auth,getCustomerRequest)
requestRoute.delete("/request",auth,deleteCustomerRequest)

module.exports = requestRoute
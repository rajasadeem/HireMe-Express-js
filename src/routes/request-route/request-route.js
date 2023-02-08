const express = require('express')
const requestRoute = express.Router()

const auth = require('../../middlewares/auth/auth')

const {
    addCustomerRequest,
    getCustomerRequest
} = require('../../controllers/requests-controller/request-controller')

requestRoute.post("/request",auth,addCustomerRequest)
requestRoute.get("/request",auth,getCustomerRequest)

module.exports = requestRoute
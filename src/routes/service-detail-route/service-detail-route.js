const express = require('express')
const serviceDetailRoute = express.Router()

const auth = require('../../middlewares/auth/auth')

const getServicesDetail = require('../../controllers/service-detail-controller/service-detail-controller')

serviceDetailRoute.get("/get-by-status",auth,getServicesDetail)

module.exports = serviceDetailRoute
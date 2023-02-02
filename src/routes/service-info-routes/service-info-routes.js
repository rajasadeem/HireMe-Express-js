const express = require('express')
const serviceRoutes = express.Router()
const {
    getServiceCategory,
    getSubCategory
} = require('../../controllers/service-info-controllers/service-info-controllers')

serviceRoutes.get("/service-category",getServiceCategory)
serviceRoutes.get("/sub-category",getSubCategory)

module.exports = serviceRoutes
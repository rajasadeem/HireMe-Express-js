const express = require('express')
const serviceInfoRoutes = express.Router()
const auth = require('../../middlewares/auth/auth')
const {
    getServiceCategory,
    getSubCategory
} = require('../../controllers/service-info-controllers/service-info-controllers')

serviceInfoRoutes.get("/service-category",auth,getServiceCategory)
serviceInfoRoutes.get("/sub-category",auth,getSubCategory)




module.exports = serviceInfoRoutes
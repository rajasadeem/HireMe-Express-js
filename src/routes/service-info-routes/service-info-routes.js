const express = require('express')
const serviceInfoRoutes = express.Router()
const auth = require('../../middlewares/auth/auth')
const {
    getServiceCategory,
    getSubCategory,
    adminAddServiceCategory,
    adminDeleteCategoryHandler,
    adminAddSubCategory,
    adminDeleteSubCategoryHandler
} = require('../../controllers/service-info-controllers/service-info-controllers')

serviceInfoRoutes.get("/service-category",auth,getServiceCategory)
serviceInfoRoutes.get("/sub-category",auth,getSubCategory)
serviceInfoRoutes.post('/service-category',auth,adminAddServiceCategory)
serviceInfoRoutes.delete('/service-category',adminDeleteCategoryHandler)
serviceInfoRoutes.post('/sub-category',auth,adminAddSubCategory)
serviceInfoRoutes.delete('/sub-category',adminDeleteSubCategoryHandler)




module.exports = serviceInfoRoutes
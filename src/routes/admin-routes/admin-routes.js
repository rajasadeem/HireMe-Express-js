const express = require('express')
const adminRoute = express.Router()
const {adminLoginhandler,adminComplaintHandlerEmp,adminComplaintHandlerCustomer,adminGetAllEmployeeaHandler,adminGetAllCustomerHandler,adminGetSubCategory,
    adminGetserviceCategory,adminAddServiceCategory,adminAddSubCategory,adminDeleteCategoryHandler,adminDeleteSubCategoryHandler,adminPostNotification,adminGetNotification,adminUpdateProfile} = require('../../controllers/admin-controllers/admin-controllers')

adminRoute.post("/log-in", adminLoginhandler)
adminRoute.get("/complaints/employee",adminComplaintHandlerEmp )
adminRoute.get("/complaints/customer",adminComplaintHandlerCustomer)
adminRoute.get('/get-employees',adminGetAllEmployeeaHandler)
adminRoute.get('/get-customers',adminGetAllCustomerHandler)
adminRoute.get("/sub-category",adminGetSubCategory)
adminRoute.get('/services',adminGetserviceCategory)

adminRoute.post("/add-service-category",adminAddServiceCategory)
adminRoute.post("/add-sub-category",adminAddSubCategory)
adminRoute.delete("/delete-service-category",adminDeleteCategoryHandler)
adminRoute.delete("/delete-sub-category",adminDeleteSubCategoryHandler)

adminRoute.post("/notifications",adminPostNotification)
adminRoute.get("/notifications",adminGetNotification)
adminRoute.put("/update-profile",adminUpdateProfile)
module.exports = adminRoute
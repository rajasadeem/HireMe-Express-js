const express = require('express')
const adminRoute = express.Router()
const {userprofilUpdatebyadmin,getAllAdminData,userDeletedbyAdmin,userCreatedByAdmin,adminLoginhandler,adminComplaintHandlerEmp,adminComplaintHandlerCustomer,adminGetAllEmployeeaHandler,adminGetAllCustomerHandler,adminGetSubCategory,
    adminGetserviceCategory,adminAddServiceCategory,adminAddSubCategory,adminDeleteCategoryHandler,adminDeleteSubCategoryHandler,adminPostNotification,adminGetNotification,adminUpdateProfile} = require('../../controllers/admin-controllers/admin-controllers')
const auth = require('../../middlewares/auth/auth')


adminRoute.post("/user/log-in", adminLoginhandler)
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

adminRoute.post("/notifications",auth,adminPostNotification)
adminRoute.get("/notifications",auth,adminGetNotification)
adminRoute.put("/update-profile",auth,adminUpdateProfile)
adminRoute.post('/new-user',auth,userCreatedByAdmin)
adminRoute.delete('/delete-by-admin',auth,userDeletedbyAdmin)
adminRoute.get('/getall-admin-user',getAllAdminData)
adminRoute.put('/update-user-profile',auth,userprofilUpdatebyadmin)
module.exports = adminRoute
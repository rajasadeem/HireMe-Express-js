const express = require('express')
const employeeRoutes = express.Router()
const { getEmployeeNotifications, createEmployeeNotification, createComplaint, getServiceCategory, getSubCategory, addEmpServices, getEmpServices, getEmpFeedback, getEmpSettings, updateEmpSettings,empLogin,completedServices} = require('../../controllers/employee-controllers/employee-controller')

const auth = require('../../middlewares/auth/auth')

employeeRoutes.get("/notifications", auth,getEmployeeNotifications)
employeeRoutes.post("/notifications",auth,createEmployeeNotification)

employeeRoutes.post("/complaint", auth, createComplaint)

employeeRoutes.get("/service-category",auth,getServiceCategory)
employeeRoutes.get("/subcategory/:service_id", getSubCategory)

employeeRoutes.post("/service",auth,addEmpServices)
employeeRoutes.get("/service",auth,getEmpServices)

employeeRoutes.get("/feedback",auth,getEmpFeedback)

employeeRoutes.get("/settings",auth, getEmpSettings)
employeeRoutes.put("/settings",auth, updateEmpSettings)

employeeRoutes.get("/complete",auth,completedServices)

employeeRoutes.post("/login",empLogin)

module.exports = employeeRoutes
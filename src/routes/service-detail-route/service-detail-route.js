const express = require('express')
const serviceDetailRoute = express.Router()

const auth = require('../../middlewares/auth/auth')

const { 
    getServicesDetail,
    getUserServiceDetailForAdmin,
    postServiceRequest,
    deleteServiceRequest,
    updateServiceStatus
 } = require('../../controllers/service-detail-controller/service-detail-controller')

serviceDetailRoute.get("/get-by-status/:service_status",auth,getServicesDetail)
serviceDetailRoute.get("/user-service-detail",auth,getUserServiceDetailForAdmin)
serviceDetailRoute.post("/post-request",auth,postServiceRequest)
serviceDetailRoute.delete("/delete-request/:request_id",auth,deleteServiceRequest)
serviceDetailRoute.put("/update-status/:emp_customer_services_id",auth,updateServiceStatus)

module.exports = serviceDetailRoute
const express = require ('express')
const adminCrudRoute = express.Router()
const {
    userCreatedByAdmin,
    userDeletedbyAdmin,
    getAllAdminData,
    coWorkerprofilUpdatebyadmin
}=require('../../controllers/admin-crud-controller/admin-crud-controller')
const auth = require ('../../middlewares/auth/auth')

 adminCrudRoute.post('/crud',auth,userCreatedByAdmin)
 adminCrudRoute.get('/crud',auth,getAllAdminData)
 adminCrudRoute.put('/crud',auth,coWorkerprofilUpdatebyadmin)
 adminCrudRoute.delete('/crud',auth,userDeletedbyAdmin)

 module.exports = adminCrudRoute
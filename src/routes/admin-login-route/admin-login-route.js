const express =require('express')
const adminLoginRoute = express.Router()
const adminLoginHandlerFun = require('../../controllers/admin-login-controller/admin-login-controller')

adminLoginRoute.post('/log-in',adminLoginHandlerFun)

module.exports = adminLoginRoute

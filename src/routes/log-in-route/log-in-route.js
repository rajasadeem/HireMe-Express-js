const express = require('express')
const userLoginRoute = express.Router()
const userLoginHandler = require ('../../controllers/log-in-controller/log-in-controller')


userLoginRoute.post('/log-in',userLoginHandler)


module.exports =userLoginRoute
const express = require('express')
const route = express.Router()
const {employeeSignuphandler ,customerSignuphandler,customerLoginhandler,employeeLoginhandler} = require('../../controllers/user-controllers/user-controllers')

const auth = require('../../middleware/auth/auth')


route.post("/employee/Sign-up",employeeSignuphandler)
route.post("/customer/Sign-up", customerSignuphandler)

route.post("/customer/log-in", customerLoginhandler)
route.post("/employee/log-in",employeeLoginhandler)

module.exports = route


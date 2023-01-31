const express = require('express')
const userRoute = express.Router()
const {employeeSignuphandler ,customerSignuphandler,customerLoginhandler,employeeLoginhandler,adminLoginhandler} = require('../../controllers/user-coontrollers/user-controllers')

// const auth = require('../../middleware/auth/auth')


userRoute.post("/employee/sign-up",employeeSignuphandler)
userRoute.post("/customer/sign-up", customerSignuphandler)

userRoute.post("/customer/log-in", customerLoginhandler)
userRoute.post("/employee/log-in",employeeLoginhandler)



module.exports = userRoute


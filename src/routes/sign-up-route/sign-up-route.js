const express = require('express')
const userRoute = express.Router()
const { userSignuphandler,customerLoginhandler,employeeLoginhandler} = require('../../controllers/sign-up-controller/sign-up-controller')

// const auth = require('../../middleware/auth/auth')


userRoute.post("/sign-up", userSignuphandler)

userRoute.post("/customer/log-in", customerLoginhandler)
userRoute.post("/employee/log-in",employeeLoginhandler)



module.exports = userRoute


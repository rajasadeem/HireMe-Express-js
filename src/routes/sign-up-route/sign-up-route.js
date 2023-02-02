const express = require('express')
const userRoute = express.Router()
const userSignuphandler = require('../../controllers/sign-up-controller/sign-up-controller')

// const auth = require('../../middleware/auth/auth')


userRoute.post("/sign-up", userSignuphandler)

module.exports = userRoute


const express = require('express')
const userSignUpRoute = express.Router()
const userSignuphandler = require('../../controllers/sign-up-controller/sign-up-controller')


userSignUpRoute.post("/sign-up", userSignuphandler)

module.exports = userSignUpRoute


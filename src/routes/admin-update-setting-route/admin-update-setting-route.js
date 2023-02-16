const express = require('express')
const adminUpdateRoute = express.Router()
const adminUpdateProfile = require('../../controllers/admin-settings-controller/admin-setting-controller')
const auth = require('../../middlewares/auth/auth')

adminUpdateRoute.put('/update-settings',auth,adminUpdateProfile) 

module.exports = adminUpdateRoute
const express =require('express')
const settingsRoute = express.Router()

const auth = require('../../middlewares/auth/auth')

const {
    getSettings,
    updateSettings
} = require('../../controllers/settings-controller/settings-controller')

settingsRoute.get("/settings",auth,getSettings)
settingsRoute.put("/settings",auth,updateSettings)

module.exports = settingsRoute
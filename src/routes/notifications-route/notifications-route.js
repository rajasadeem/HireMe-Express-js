const express = require('express')
const notificationRoute = express.Router()
const auth = require('../../middlewares/auth/auth')

const {
    postNotifications,
    getNotifications
} = require('../../controllers/notification-controller/notification-controller')

notificationRoute.post("/notification",auth,postNotifications)
notificationRoute.get("/notification",auth,getNotifications)

module.exports = notificationRoute
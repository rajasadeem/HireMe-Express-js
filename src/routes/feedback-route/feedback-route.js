const express = require('express')
const feedbackRoute = express.Router()

const auth = require('../../middlewares/auth/auth')
const {
    postFeedback
    ,getFeedback
} = require('../../controllers/feedback-controllers/feedback-controller')

feedbackRoute.post("/feed-back",auth,postFeedback)
feedbackRoute.get("/feed-back",auth,getFeedback)

module.exports = feedbackRoute
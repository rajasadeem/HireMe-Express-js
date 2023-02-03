const express = require('express')
const feedbackRoute = express.Router()

const auth = require('../../middlewares/auth/auth')
const {
    postFeedback,
    getFeedback,
    getAvgRating
} = require('../../controllers/feedback-controllers/feedback-controller')

feedbackRoute.post("/feed-back",auth,postFeedback)
feedbackRoute.get("/feed-back",auth,getFeedback)
feedbackRoute.get("/avg-rating",auth,getAvgRating)

module.exports = feedbackRoute
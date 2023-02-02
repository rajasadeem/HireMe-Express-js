const express =require('express')
const complaintRoute = express.Router()

const {postComplaint} = require('../../controllers/complain-controllers/complain-controllers')
const auth = require('../../middlewares/auth/auth')

complaintRoute.post("/post-complaint",auth,postComplaint)

module.exports = complaintRoute
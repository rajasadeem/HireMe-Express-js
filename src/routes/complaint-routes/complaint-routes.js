const express =require('express')
const complaintRoute = express.Router()

const {
    postComplaint,
    getComplaint
} = require('../../controllers/complain-controllers/complain-controllers')
const auth = require('../../middlewares/auth/auth')

complaintRoute.post("/complaints",auth,postComplaint)
complaintRoute.get("/complaints",auth,getComplaint)

module.exports = complaintRoute
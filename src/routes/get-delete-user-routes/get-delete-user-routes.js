const express = require('express')
const getDeleteUser = express.Router()

const auth = require('../../middlewares/auth/auth')

const {
    getUsers,
    deleteUsers
} = require('../../controllers/get-delete-user-controller/get-delete-user-controller')

getDeleteUser.get("/get-delete-user",auth,getUsers)
getDeleteUser.delete("/get-delete-user",auth,deleteUsers)

module.exports = getDeleteUser
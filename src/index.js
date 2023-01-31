const express = require('express')
require('dotenv').config()
const cors = require('cors')
const employeeRoutes = require('./routes/employee-routes')

const app = express()
app.use(cors())
app.use(express.json())

app.use("/employee",employeeRoutes)

app.listen(process.env.DEV_PORT,()=>{
    console.log(`Running on port ${process.env.DEV_PORT}`);
})



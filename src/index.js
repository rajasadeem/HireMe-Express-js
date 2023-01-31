const express = require('express')
require('dotenv').config()
const cors = require('cors')
const employeeRoutes = require('./routes/employee-routes/employee-routes')
const userRoute = require('./routes/user-routes/user-routes')
const adminRoute = require ('./routes/admin-routes/admin-routes')

const app = express()
const {  customerRoute } = require("./routes/customer-routes/index");
app.use(cors())
app.use(express.json())
app.use("/customer", userRoute);
app.use("/employee",employeeRoutes)
app.use('/user',userRoute)
app.use('/admin',adminRoute)
app.listen(process.env.DEV_PORT,()=>{
    console.log(`Running on port ${process.env.DEV_PORT}`);
})



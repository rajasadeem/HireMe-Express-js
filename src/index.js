const express = require('express')
require('dotenv').config()
const cors = require('cors')
const employeeRoutes = require('./routes/employee-routes')

const app = express()
//const { userRoute } = require("./routes/customer-routes/index");
const userRoute = require('./routes/user-routes/user-routes')
const adminRoute = require ('./routes/admin-routes/admin-routes')
app.use(cors())
app.use(express.json())
app.use("/admin",adminRoute)
app.use("/user", userRoute)
//app.use("/customer", customerRoute);
app.use("/employee",employeeRoutes)

app.listen(process.env.DEV_PORT,()=>{
    console.log(`Running on port ${process.env.DEV_PORT}`);
})



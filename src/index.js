const express = require('express')
require('dotenv').config()
const cors = require('cors')
const employeeRoutes = require('./routes/employee-routes/employee-routes')
const userRoute = require('./routes/user-routes/user-routes')
const adminRoute = require ('./routes/admin-routes/admin-routes')
const customerRoute = require("./routes/customer-routes/customer-route");
const serviceRoutes = require('./routes/service-infi-routes/service-info-routes')
const complaintRoute = require('./routes/complaint-routes/complaint-routes')
const feedbackRoute = require('./routes/feedback-route/feedback-route')
const notificationRoute = require('./routes/notifications-route/notifications-route')
const settingsRoute = require('./routes/settings-route/settings-route')
const serviceDetailRoute = require('./routes/service-detail-route/service-detail-route')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/user',userRoute)
app.use("/customer", customerRoute);
app.use("/employee",employeeRoutes)
app.use('/admin',adminRoute)

app.use("/service",serviceRoutes)
app.use("/complaint",complaintRoute)
app.use("/feedback",feedbackRoute)
app.use("/notification",notificationRoute)
app.use("/settings",settingsRoute)
app.use("/service-detail",serviceDetailRoute)

app.listen(process.env.DEV_PORT,()=>{
    console.log(`Running on port ${process.env.DEV_PORT}`);
})



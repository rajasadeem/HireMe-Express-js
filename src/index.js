const express = require('express')
require('dotenv').config()
const cors = require('cors')
const userSignUpRoute = require('./routes/sign-up-route/sign-up-route')
const adminLoginRoute = require ('./routes/admin-login-route/admin-login-route')
const serviceRoutes = require('./routes/service-info-routes/service-info-routes')
const complaintRoute = require('./routes/complaint-routes/complaint-routes')
const feedbackRoute = require('./routes/feedback-route/feedback-route')
const notificationRoute = require('./routes/notifications-route/notifications-route')
const settingsRoute = require('./routes/settings-route/settings-route')
const serviceDetailRoute = require('./routes/service-detail-route/service-detail-route')
const  userLoginRoute = require ('./routes/log-in-route/log-in-route')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/user',userSignUpRoute)
app.use('/users',userLoginRoute)
app.use('/admin',adminLoginRoute)
app.use("/service",serviceRoutes)
app.use("/complaint",complaintRoute)
app.use("/feedback",feedbackRoute)
app.use("/notification",notificationRoute)
app.use("/settings",settingsRoute)
app.use("/service-detail",serviceDetailRoute)


app.listen(process.env.DEV_PORT,()=>{
    console.log(`Running on port ${process.env.DEV_PORT}`);
})



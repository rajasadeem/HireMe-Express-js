const express = require('express')
require('dotenv').config()
const cors = require('cors')

const app = express()
const { userRoute } = require("./routes/customer-routes/index");

app.use(cors())
app.use(express.json())
app.use("/customer", userRoute);

app.listen(process.env.DEV_PORT,()=>{
    console.log(`Running on port ${process.env.DEV_PORT}`);
})



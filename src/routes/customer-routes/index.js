const express = require("express");
const userRoute = express.Router();
const auth=require("../../middlewares/auth/auth")

const { 
    createNotification,
      getNotification,
      createComplaint,
      createFeedback,
      getServices,
      getSubCategory,
      profileSetting,
      customerLogin
    } = require("../../controllers/customer-controllers/index");

     userRoute.get("/notification",auth,getNotification);
     userRoute.post("/notification", auth,createNotification);
     userRoute.post("/complaint",auth, createComplaint);
     userRoute.post("/feedback",auth, createFeedback);
     userRoute.get("/service-category", auth,getServices);
     userRoute.get("/subcategory/:service_category_id",auth,getSubCategory);
     userRoute.post("/login",customerLogin);
     userRoute.put("/profilesetting",auth,profileSetting)

module.exports = { userRoute };
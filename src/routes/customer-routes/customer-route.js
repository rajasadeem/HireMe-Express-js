const express = require("express");
const customerRoute = express.Router();
const auth=require("../../middlewares/auth/auth")

const { 
    createNotification,
      getNotification,
      createComplaint,
      createFeedback,
      getServices,
      getSubCategory,
      profileSetting,
      completedTasks
    } = require("../../controllers/customer-controllers/customer-controller");

    customerRoute.get("/notification",auth,getNotification);
    customerRoute.post("/notification", auth,createNotification);
    customerRoute.post("/complaint",auth, createComplaint);
    customerRoute.post("/feedback",auth, createFeedback);
    customerRoute.get("/service-category", auth,getServices);
    customerRoute.get("/subcategory/:service_category_id",auth,getSubCategory);
    customerRoute.put("/settings",auth,profileSetting);
    customerRoute.get("/complete",auth,completedTasks)

module.exports = customerRoute;
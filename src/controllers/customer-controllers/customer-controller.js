const pool = require("../../connection/postgresql");
const JWT = require('jsonwebtoken')

const getNotification = (req, res) => {
  const {customer_id} = req.user
    pool.query(`SELECT * FROM notifications where customer_id= ${customer_id}`, (error, results) => {
      if (error) {
        throw error;
      } 
      res.status(200).json(results.rows);
    });
  };

const createNotification = (req, res) => {
  const {customer_id}=req.user
  const{notification_content}=req.body;
  pool.query(`INSERT INTO notifications(notification_content,customer_id) VALUES ( '${notification_content}',  '${customer_id}') `, (error, result) => {
    if (error) {
      throw error
    }
    res.status(200).json(req.body)
  })
};

const createComplaint = (req, res) => {
    const {customer_id}= req.user
    const{complaint_description}=req.body;
    pool.query(`INSERT INTO complaint(complaint_description,customer_id) VALUES ( '${complaint_description}',  '${customer_id}') `, (error, result) => {
      if (error) {
        throw error
      }
      res.status(200).json(req.body)
    })
  };

  const createFeedback = (req, res) => {
    const {customer_id} = req.user
    const{emp_id,feedback_content }=req.body;
    pool.query(`INSERT INTO feedback(feedback_content,customer_id,emp_id) VALUES ( '${feedback_content}',  ${customer_id},${emp_id}) `, (error, result) => {
      if (error) throw error
      res.status(200).json("feeback inserted")
    })
  };

  const completedTasks=(req,res)=>{
    const {customer_id} = req.user
    pool.query(`SELECT service_category_name,sub_category_name from emp_customer_services
    JOIN service_category ON emp_customer_services.service_category_id=service_category.service_category_id 
    JOIN sub_category ON emp_customer_services.sub_category_id=sub_category.sub_category_id
    WHERE customer_id=${customer_id} AND service_status='complete'`, (error, result) => {
        if (error) throw error
        res.status(200).json("completed Task")
      }) 
  }

  const profileSetting=  (req,res)=>{
    const {customer_id} = req.user
    const {customer_phone,customer_name,customer_password,customer_language,customer_city} = req.body
    pool.query(`UPDATE customer set customer_phone = ${customer_phone},  customer_name ='${customer_name}',  customer_password = '${customer_password}',customer_language = '${customer_language}',customer_city ='${customer_city}' where customer_id = ${customer_id}`, (error,result) => {
      if (error) throw error
    res.status(200).json("update setting")
    })
  }

const getServices = (req, res) => {
  pool.query(`SELECT * FROM service_category`, (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const getSubCategory = (req, res) => {
  const {service_category_id } = req.params
  pool.query(`SELECT * FROM sub_category WHERE service_category_id = ${service_category_id}`,
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    }
  )
}

module.exports = {
      createNotification,
      getNotification,
      createComplaint,
      createFeedback,
      getServices,
      getSubCategory,
      profileSetting,
      completedTasks
     };
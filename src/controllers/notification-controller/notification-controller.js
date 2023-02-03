const pool  = require('../../connection/postgresql')

const {
    postEmpNotifications,
    postCustomerNotifications,
    postAdminNotifications,
    getEmpNotifications,
    getCustomerNotifications,
    getAdminNotifications
} = require('../../repositories/notifications/notifications')

const postNotifications = (req,res)=>{
    if(req.user.emp_id){
        const {emp_id} = req.user
        const {notification_content} = req.body
        pool.query(postEmpNotifications(notification_content,emp_id),(error,result)=>{
            if(error) throw error
            res.status(200).json("employee notification added")
        })
    }
    else if(req.user.customer_id){
        const {customer_id} = req.user
        const {notification_content} = req.body
        pool.query(postCustomerNotifications(notification_content,customer_id),(error,result)=>{
            if(error) throw error
            res.status(200).json("customer notification added")
        })
    }
    else if(req.user.admin_id){
        const {admin_id} = req.user
        const {notification_content} = req.body
        pool.query(postAdminNotifications(notification_content,admin_id),(error,result)=>{
            if(error) throw error
            res.status(200).json("admin notification added")
        })
    }
    else{
        res.status(400).json("some error occurred")
    }
}

const getNotifications =  (req,res)=>{
    if(req.user.emp_id){
        const {emp_id} = req.user
        pool.query(getEmpNotifications(emp_id),(error,result)=>{
            if(error) throw error
            res.status(200).json(result.rows)
        })
    }
    else if(req.user.customer_id){
        const {customer_id} = req.user
        pool.query(getCustomerNotifications(customer_id),(error,result)=>{
            if(error) throw error
            res.status(200).json(result.rows)
        })
    }
    else if(req.user.admin_id){
        const {admin_id} = req.user
        pool.query(getAdminNotifications(admin_id),(error,result)=>{
            if(error) throw error
            res.status(200).json(result.rows)
        })
    }
    else{
        res.status(400).json("some error occurred")
    }
}

module.exports = {
    postNotifications,
    getNotifications
}
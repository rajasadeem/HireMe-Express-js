const postEmpNotifications = (notification_content,emp_id)=>{
    return(`INSERT INTO notifications (notification_content,emp_id)
     VALUES('${notification_content}',${emp_id})`)
}

const postCustomerNotifications = (notification_content,customer_id)=>{
    return(`INSERT INTO notifications(notification_content,customer_id)
    VALUES('${notification_content}',${customer_id})`)
}

const getEmpNotifications =(emp_id)=>{
    return(`SELECT notification_id,notification_content FROM notifications WHERE emp_id = ${emp_id}`)
}

const getCustomerNotifications = (customer_id)=>{
    return(`SELECT notification_id,notification_content FROM notifications WHERE customer_id  =${customer_id}`)
}

module.exports = {
    postEmpNotifications,
    postCustomerNotifications,
    getEmpNotifications,
    getCustomerNotifications
}
const postEmpNotifications = (notification_content,emp_id)=>{
    return(`INSERT INTO notifications (notification_content,emp_id)
     VALUES('${notification_content}',${emp_id})`)
}

const postCustomerNotifications = (notification_content,customer_id)=>{
    return(`INSERT INTO notifications(notification_content,customer_id)
    VALUES('${notification_content}',${customer_id})`)
}

const postAdminNotifications = (notification_content,admin_id)=>{
    return(`INSERT INTO notifications (notification_content,admin_id)
    VALUES ('${notification_content}',${admin_id})`)
}

const getEmpNotifications =(emp_id)=>{
    return(`SELECT notification_id,notification_content FROM notifications WHERE emp_id = ${emp_id}
    ORDER BY notification_id DESC`)
}

const getCustomerNotifications = (customer_id)=>{
    return(`SELECT notification_id,notification_content FROM notifications WHERE customer_id  =${customer_id}
    ORDER BY notification_id DESC`)
}

const getAdminNotifications = (admin_id)=>{
    return(`SELECT notification_id,notification_content FROM notifications WHERE admin_id = ${admin_id}
    ORDER BY notification_id DESC`)
}

module.exports = {
    postEmpNotifications,
    postCustomerNotifications,
    postAdminNotifications,
    getEmpNotifications,
    getCustomerNotifications,
    getAdminNotifications
}
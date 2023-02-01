const pool = require('../../connection/postgresql')

const getNotificationOfEmp = (emp_id)=>{
    return (`SELECT notification_id,notification_content FROM notifications WHERE emp_id = ${emp_id}`)
}

module.exports = getNotificationOfEmp
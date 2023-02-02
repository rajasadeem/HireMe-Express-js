
const getNotificationOfEmp = (emp_id)=>{
    return (`SELECT notification_id,notification_content FROM notifications WHERE emp_id = ${emp_id}`)
}

const createNotificationOfemp = (notification_content,emp_id)=>{
    return(`INSERT INTO notifications (notification_content,emp_id)
     VALUES ('${notification_content}',${emp_id})`)
}

const createComplaintOfEmp = (complaint_description,emp_id)=>{
    return(`INSERT INTO complaint (complaint_description,emp_id) 
    VALUES ('${complaint_description}',${emp_id})`)
}



module.exports = {
    getNotificationOfEmp,
    createNotificationOfemp,
    createComplaintOfEmp
}
const postComplaintByEmp = (complaint_description,emp_id)=>{
    return(`INSERT INTO complaint(complaint_description,emp_id)
     VALUES ('${complaint_description}',${emp_id})`)
}

const postComplaintByCustomer = (complaint_description,customer_id)=>{
    return(`INSERT INTO complaint(complaint_description,customer_id)
     VALUES ('${complaint_description}',${customer_id})`)
}


module.exports = {
    postComplaintByEmp,
    postComplaintByCustomer
}
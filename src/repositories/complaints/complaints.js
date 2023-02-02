const postComplaintByEmp = (complaint_description,emp_id)=>{
    return(`INSERT INTO complaint(complaint_description,emp_id)
     VALUES ('${complaint_description}',${emp_id})`)
}

const postComplaintByCustomer = (complaint_description,customer_id)=>{
    return(`INSERT INTO complaint(complaint_description,customer_id)
     VALUES ('${complaint_description}',${customer_id})`)
}

const getComplaintOfEmp = ()=>{
    return(`SELECT complaint_description,complaint.emp_id,emp_name FROM complaint 
    JOIN employee ON complaint.emp_id = employee.emp_id WHERE customer_id IS NULL
    ORDER BY complaint_id DESC`)
}

const getComplaintOfCustomer = ()=>{
    return(`SELECT complaint_description,complaint.customer_id,customer_name FROM complaint
    JOIN customer ON complaint.customer_id = customer.customer_id WHERE emp_id IS NULL
    ORDER BY complaint_id DESC`)
}

module.exports = {
    postComplaintByEmp,
    postComplaintByCustomer,
    getComplaintOfEmp,
    getComplaintOfCustomer
}
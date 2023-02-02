
const postEmpFeedback = (employee_feedback_content,emp_id,customer_id)=>{
    return(`INSERT INTO employee_feedback (employee_feedback_content,emp_id,customer_id)
    VALUES ('${employee_feedback_content}',${emp_id},${customer_id})`)
}

const postCustomerFeedback = (customer_feedback_content,customer_id,emp_id)=>{
    return(`INSERT INTO customer_feedback (customer_feedback_content,customer_id,emp_id)
    VALUES ('${customer_feedback_content}',${customer_id},${emp_id})`)
}

const getEmpFeedback = (emp_id)=>{
    return(`SELECT employee_feedback_id,employee_feedback_content,customer_name FROM employee_feedback
    JOIN customer ON employee_feedback.customer_id = customer.customer_id WHERE emp_id = ${emp_id}`)
}

const getCustomerFeedback = (customer_id)=>{
    return(`SELECT customer_feedback_id,customer_feedback_content,emp_name FROM customer_feedback
    JOIN employee ON customer_feedback.emp_id = employee.emp_id WHERE customer_id = ${customer_id}`)
}

module.exports = {
    postEmpFeedback,
    postCustomerFeedback,
    getEmpFeedback,
    getCustomerFeedback
}

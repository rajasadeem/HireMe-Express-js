const getEmployee = ()=>{
    return(`SELECT employee.emp_id,emp_name,AVG(employee_feedback_stars) FROM employee JOIN employee_feedback ON 
    employee.emp_id = employee_feedback.emp_id GROUP BY employee.emp_id`)
}

const getCustomers = ()=>{
    return(`SELECT customer.customer_id,customer_name,AVG(customer_feedback_stars) FROM customer JOIN customer_feedback ON customer.customer_id = customer_feedback.customer_id GROUP BY customer.customer_id`)
}

const deleteEmployee = (emp_id)=>{
    return(`DELETE FROM employee WHERE emp_id = ${emp_id}`)
}

const deleteCustomer = (customer_id)=>{
    return(`DELETE FROM customer WHERE customemr_id = ${customer_id}`)
}

module.exports = {
    getEmployee,
    getCustomers,
    deleteEmployee,
    deleteCustomer
}
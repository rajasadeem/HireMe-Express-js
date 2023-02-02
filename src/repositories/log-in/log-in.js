

const logInHandlerEmp=(emp_phone , emp_password )=>{
    return (`SELECT * FROM employee WHERE emp_phone = ${emp_phone} AND
    emp_password = '${emp_password}'`)
}


const logInHandlerCustomer=(customer_phone , customer_password )=>{
    return (`SELECT * FROM customer WHERE customer_phone = ${customer_phone} AND
    customer_password = '${customer_password}'`)
}


module.exports = {logInHandlerEmp,logInHandlerCustomer}
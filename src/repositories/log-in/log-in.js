

const logInHandlerEmp=(emp_phone )=>{
    return (`SELECT * FROM employee WHERE emp_phone = ${emp_phone}`)
}


const logInHandlerCustomer=(customer_phone)=>{
    return (`SELECT * FROM customer WHERE customer_phone = ${customer_phone}`)
}


module.exports = {logInHandlerEmp,logInHandlerCustomer}
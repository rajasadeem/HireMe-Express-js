const getEmpSettings = (emp_id)=>{
    return(`SELECT emp_phone,emp_name,emp_password,emp_language,emp_city 
    FROM employee WHERE emp_id = ${emp_id}`)
}

const getCustomerSettings = (customer_id)=>{
    return(`SELECT * FROM customer WHERE customer_id = ${customer_id}`)
}

const updateEmpSettings = (emp_id,emp_phone,emp_name,emp_password,emp_language,emp_city)=>{
    return(`UPDATE employee SET emp_phone = ${emp_phone}, emp_name = '${emp_name}',
     emp_password = '${emp_password}', emp_language = '${emp_language}', emp_city = '${emp_city}'
     WHERE emp_id = ${emp_id}`)
}

const updateCustomerSettings = (customer_id,customer_phone,customer_name,customer_password,customer_language,
    customer_city)=>{
        return(`UPDATE customer SET customer_phone = ${customer_phone}, customer_name = '${customer_name}', customer_password = '${customer_password}', customer_language = '${customer_language}',
        customer_city = '${customer_city}' WHERE customer_id = ${customer_id}`)
}

module.exports = {
    getEmpSettings,
    getCustomerSettings,
    updateEmpSettings,
    updateCustomerSettings
}
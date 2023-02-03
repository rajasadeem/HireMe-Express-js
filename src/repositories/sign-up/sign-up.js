const pool = require ('../../connection/postgresql')


const signUpHandlerForEmp =(emp_phone,emp_name,emp_password,emp_language,emp_city)=>{
    return  (`INSERT INTO employee(emp_phone,emp_name,emp_password,emp_language,emp_city )
    VALUES(${emp_phone},'${emp_name}','${emp_password}','${emp_language}','${emp_city}')`
    )}

const signupHandlerForCustomer =(customer_phone,customer_name,customer_password,customer_language,customer_city)=>{
    return (`
    INSERT INTO customer(customer_phone,customer_name,customer_password,customer_language,customer_city) VALUES(${customer_phone},'${customer_name}','${customer_password}','${customer_language}','${customer_city}') `
)}


module.exports = {signUpHandlerForEmp,signupHandlerForCustomer}
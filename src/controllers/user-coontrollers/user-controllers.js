const pool = require('../../../../Hire-Me/src/connection/postgresql')
const jwt = require('jsonwebtoken')
const e = require('express')

const employeeSignuphandler = (req, res) => {
    const {emp_phone,emp_name,emp_password,emp_language,emp_city}= req.body
    pool.query(`INSERT INTO employee(emp_phone,emp_name,emp_password,emp_language,emp_city) VALUES(${emp_phone},'${emp_name}','${emp_password}','${emp_language}','${emp_city}') `, (error, result) => {

        if (error)  throw error 
        res.status(200).json("employee Successfuly Sign-up ...!")
    })
}

const customerSignuphandler = (req, res) => {
    const {customer_phone,customer_name,customer_password,customer_language,customer_city}= req.body
    
    pool.query(`INSERT INTO employee(emp_phone,emp_name,emp_password,emp_language,emp_city) VALUES(${customer_phone},'${customer_name}','${customer_password}','${customer_language}','${customer_city}') `, (error, result) => {
            if (error)  throw error 
        res.status(200).json("Customer Successfuly Sign-up ...!")
    })
}


const customerLoginhandler = (req,res)=>{
    const {customer_phone , customer_password } = req.body
    try{
    pool.query(`SELECT * FROM customer WHERE customer_phone = ${customer_phone} AND
    customer_password = '${customer_password}'`, (error,result)=>{
        if(result.rows.length>0){
            const user = result.rows
            const [userData] = user;
            // console.log(userData);
            const accessToken = (jwt.sign(userData,process.env.Access_web_token))
            res.status(200).json({accessToken,user})
        }
        else{
            res.json(" email or password in invaild")
        }
    })
    }catch(error){
        console.log(error)
        res.status(500).json("server error")
    }
    
   
}

const employeeLoginhandler=(req,res)=>{
    const {emp_phone , emp_password } = req.body
    try{
    pool.query(`SELECT * FROM employee WHERE emp_phone = ${emp_phone} AND
    emp_password = '${emp_password}'`, (error,result)=>{
        if(result.rows.length>0){
            const user = result.rows
            const [userData] = user;
            // console.log(userData);
            const accessToken = (jwt.sign(userData,process.env.Access_web_token))
            res.status(200).json({accessToken,user})
        }
        else{
            res.json(" email or password in invaild")
        }
    })
    }catch(error){
        console.log(error)
        res.status(500).json("server error")
    }
 
}

module.exports = {employeeSignuphandler,customerSignuphandler,customerLoginhandler,employeeLoginhandler}
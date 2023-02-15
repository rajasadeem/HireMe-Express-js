const pool = require('../../connection/postgresql')
const bcrypt = require('bcrypt')
const {
    signUpHandlerForEmp,
    signupHandlerForCustomer
} = require('../../repositories/sign-up/sign-up')
const saltRounds = 10;

const userSignuphandler = (req, res) => {

    if (req.body.customer_phone && req.body.customer_name && req.body.customer_password && req.body.customer_language && req.body.customer_city) {
        
        const { customer_phone, customer_name, customer_password, customer_language, customer_city } = req.body
        bcrypt.genSalt(saltRounds, function(err, salt){
            bcrypt.hash(customer_password, salt, function(error, hash){
                console.log('passwordhash',hash)
                pool.query(signupHandlerForCustomer(customer_phone, customer_name, hash, customer_language, customer_city), (error, result) => {
                    if (error) throw error
                    res.status(200).json("Customer Successfuly Sign-up")
                })
            })
        })
    }

    else if (req.body.emp_phone && req.body.emp_name && req.body.emp_password && req.body.emp_language && req.body.emp_city) {
        const { emp_phone, emp_name, emp_password, emp_language, emp_city } = req.body
        console.log('there')
        bcrypt.genSalt(saltRounds, function(err, salt){
            bcrypt.hash(emp_password, salt, function(error, hash){
                console.log('passwordhash',hash)
                pool.query(signUpHandlerForEmp(emp_phone, emp_name, hash, emp_language, emp_city), (error, result) => {
                    if (error) throw error
                    res.status(200).json("Employee Successfuly Sign-up")
                })
            })
        })
    }
        
        // pool.query(signUpHandlerForEmp(emp_phone, emp_name, emp_password, emp_language, emp_city), (error, result) => {
        //     if (error) throw error
        //     res.status(200).json("employee Successfuly Sign-up ...!")
        // })
    

    else {
        res.status(401).json("Error")
    }
}

module.exports = userSignuphandler
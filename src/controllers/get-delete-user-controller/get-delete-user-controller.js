const pool = require('../../connection/postgresql')

const { 
    getEmployee,
    getCustomers,
    deleteEmployee,
    deleteCustomer
} = require('../../repositories/get-delete-user/get-delete-user')

const getUsers = (req,res)=>{
    const {userType} = req.body
    if(userType == "employee"){
        pool.query(getEmployee(),(error,result)=>{
            if(error) throw error
            res.status(200).json(result.rows)
        })
    }
    else if(userType == "customer"){
        pool.query(getCustomers(),(error,result)=>{
            if(error) throw error
            res.status(200).json(result.rows)
        })
    }
    else{
        res.status(200).json("some error occurred")
    }
}

const deleteUsers = (req,res)=>{
    const {userType} = req.body
    if(userType == "employee"){
        const {emp_id} = req.body
        pool.query(deleteEmployee(emp_id),(error,result)=>{
            if(error) throw error
            res.status(200).json("Employee Deleted")
        })
    }
    else if(userType == "customer"){
        const {customer_id} = req.body
        pool.query(deleteCustomer(customer_id),(error,result)=>{
            if(error) throw error
            res.status(200).json("Customer Deleted")
        })
    }
    else{
        res.status(400).json("somoe error occurred")
    }
}

module.exports = {
    getUsers,
    deleteUsers
}
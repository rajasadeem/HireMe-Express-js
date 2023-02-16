const pool = require('../../connection/postgresql')

const {
    getEmpSettings,
    getCustomerSettings,
    updateEmpSettings,
    updateCustomerSettings
} = require('../../repositories/user-settings/user-settings')

const getSettings = (req,res)=>{
    if(req.user.emp_id){
        const {emp_id} = req.user
        pool.query(getEmpSettings(emp_id),(error,result)=>{
            if(error) res.status(400).json("Some error occurred, Please Refresh")
            res.status(200).json(result.rows)
        })
    }
    else if(req.user.customer_id){
        const {customer_id} = req.user
        pool.query(getCustomerSettings(customer_id),(error,result)=>{
            if(error) res.status(400).json("Some error occurred, Please Refresh")
            res.status(200).json(result.rows)
        })
    }
    else{
        res.status(400).json("some error occurred")
    }
}

const updateSettings = (req,res)=>{
    if(req.user.emp_id){
        const {emp_id} = req.user
        const { emp_phone,emp_name,emp_password,emp_language,emp_city } = req.body
        pool.query(updateEmpSettings(emp_id,emp_phone,emp_name,emp_password,emp_language,emp_city),
        (error,result)=>{
            if(error) res.status(400).json("Some error occurred, Please Refresh")
            res.status(200).json("settings updated")
        })
    }
    else if(req.user.customer_id){
        const {customer_id} = req.user
        const { customer_phone,customer_name,customer_password,customer_language,customer_city } = req.body
        pool.query(updateCustomerSettings(customer_id,customer_phone,customer_name,customer_password,customer_language,customer_city),(error,result)=>{
            if(error) res.status(400).json("Some error occurred, Please Refresh")
            res.status(200).json("settings updated")
        })
    }
    else{
        res.status(400).json("some error occurred")
    }
}

module.exports = {
    getSettings,
    updateSettings
}
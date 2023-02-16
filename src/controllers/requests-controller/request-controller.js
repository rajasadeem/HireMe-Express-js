const pool = require('../../connection/postgresql')

const {
    postRequest,
    getRequest,
    deleteRequest
} = require('../../repositories/requests/requests')

const addCustomerRequest = (req,res)=>{
    console.log(req.user);
    const {customer_id, customer_city} = req.user
    console.log(customer_id,"city:",customer_city);
    const {service_category_id,sub_category_id,latitude,longitude,emp_id} = req.body
    pool.query(postRequest(service_category_id,sub_category_id,customer_city,latitude,
        longitude,customer_id,emp_id),(error,result)=>{
        if(error) res.status(400).json("Some error occurred, Please Refresh")
        res.status(200).json("request sent")
    })
}

const getCustomerRequest = (req,res)=>{
    const {emp_id} = req.user
    pool.query(getRequest(emp_id),(error,result)=>{
        if(error) res.status(400).json("Some error occurred, Please Refresh")
        res.status(200).json(result.rows)
    })
}

const deleteCustomerRequest = (req,res)=>{
    const {request_id} = req.body
    pool.query(deleteRequest(request_id),(error,result)=>{
        if(error) res.status(400).json("Some error occurred, Please Refresh")
        res.status(200).json("request deleted")
    })
}

module.exports = {
    addCustomerRequest,
    getCustomerRequest,
    deleteCustomerRequest
}
const pool = require('../../connection/postgresql')

const {
    postRequest,
    getRequest,
    deleteRequest
} = require('../../repositories/requests/requests')

const addCustomerRequest = (req,res)=>{
    const {customer_id} = req.user
    const {service_category_id,sub_category_id,customer_city,latitude,longitude} = req.body
    pool.query(postRequest(service_category_id,sub_category_id,customer_city,latitude,longitude,customer_id),(error,result)=>{
        if(error) throw error
        res.status(200).json("request sent")
    })
}

const getCustomerRequest = (req,res)=>{
    pool.query(getRequest(),(error,result)=>{
        if(error) throw error
        res.status(200).json(result.rows)
    })
}

module.exports = {
    addCustomerRequest,
    getCustomerRequest
}
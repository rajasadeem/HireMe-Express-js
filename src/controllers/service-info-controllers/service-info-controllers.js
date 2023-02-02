const pool = require('../../connection/postgresql')
const {
    serviceCategory,
    subCategory
} = require('../../repositories/service-info/service-info')


const getServiceCategory = (req,res)=>{
    pool.query(serviceCategory(),(error,result)=>{
        if(error) throw error
        res.status(200).json(result.rows)
    })
}

const getSubCategory = (req,res)=>{
    const {service_category_id} = req.body
    pool.query(subCategory(service_category_id),(error,result)=>{
        if(error) throw error
        res.status(200).json(result.rows)
    })
}

module.exports = {
    getServiceCategory,
    getSubCategory
}
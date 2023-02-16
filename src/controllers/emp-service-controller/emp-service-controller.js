const pool = require('../../connection/postgresql')

const {
    addEmpService,
    deleteEmpServiceCategory,
    deleteEmpSubCategory,
    getEmpService
} = require('../../repositories/emp-service/emp-service')

const addServiceOfEmp = (req,res)=>{
    const {emp_id} = req.user
    const {service_category_id,sub_category_id} = req.body
    pool.query(addEmpService(emp_id,service_category_id,sub_category_id),(error,result)=>{
        if(error) res.status(400).json("Some error occurred, Please Refresh")
        res.status(200).json("Employee Service Added")
    })
}

const deleteServiceOfEmp = (req,res)=>{
    if(req.body.service_category_id){
        const {emp_id} = req.user
        const {service_category_id} = req.body
        pool.query(deleteEmpServiceCategory(service_category_id,emp_id),(error,result)=>{
            if(error) res.status(400).json("Some error occurred, Please Refresh")
            res.status(200).json("service category deleted")
        })
    }
    else if(req.body.sub_category_id){
        const {emp_id} = req.user
        const {sub_category_id} = req.body
        pool.query(deleteEmpSubCategory(sub_category_id,emp_id),(error,result)=>{
            if(error) res.status(400).json("Some error occurred, Please Refresh")
            res.status(200).json("sub category deleted")
        })
    }
    else{
        res.status(400).json("Some error occurred")
    }
}

const getServiceOfEmp = (req,res)=>{
    const {emp_id} = req.user
    pool.query(getEmpService(emp_id),(error,result)=>{
        if(error) res.status(400).json("Some error occurred, Please Refresh")
        res.status(200).json(result.rows)
    })
}

module.exports = {
    addServiceOfEmp,
    deleteServiceOfEmp,
    getServiceOfEmp
}
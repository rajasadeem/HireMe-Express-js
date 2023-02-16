const pool = require('../../connection/postgresql')
const {
    serviceCategory,
    subCategory,
    AddServiceCategory,
    deleteCategory,
    addSubCategory,
    delteSubCategory
} = require('../../repositories/service-info/service-info')


const getServiceCategory = (req,res)=>{
    pool.query(serviceCategory(),(error,result)=>{
        if(error) res.status(400).json("Some error occurred, Please Refresh")
        res.status(200).json(result.rows)
    })
}

const getSubCategory = (req,res)=>{
    const {service_category_id} = req.params
    console.log('service',service_category_id)
    pool.query(subCategory(service_category_id),(error,result)=>{
        if(error) res.status(400).json("Some error occurred, Please Refresh")
        res.status(200).json(result.rows)
    })
}

const adminAddServiceCategory = (req,res)=>{
    const {service_category_name} = req.body
    pool.query(AddServiceCategory(service_category_name),(error,result)=>{
        if(error) res.status(400).json("Some error occurred, Please Refresh")
        res.status(200).json("Service Category added")
    })
}

const adminDeleteCategoryHandler = (req,res)=>{
    const {service_category_id} = req.body
    pool.query(deleteCategory(service_category_id),(error,result)=>{
        if(error) res.status(400).json("Some error occurred, Please Refresh")
        res.status(200).json("service category deleted")
    })
}

const adminAddSubCategory = (req,res)=>{
    const {sub_category_name,service_category_id} = req.body
    pool.query(addSubCategory(sub_category_name,service_category_id),(error,result)=>{
        if(error) res.status(400).json("Some error occurred, Please Refresh")
        res.status(200).json("sub-category added")
    })
}

const adminDeleteSubCategoryHandler = (req,res)=>{
    const {sub_category_id} = req.body
    pool.query(delteSubCategory(sub_category_id),(error,result)=>{
        if(error) res.status(400).json("Some error occurred, Please Refresh")
        res.status(200).json("sub category deleted")
    })
}



module.exports = {
    getServiceCategory,
    getSubCategory,
    adminAddServiceCategory,
    adminDeleteCategoryHandler,
    adminAddSubCategory,
    adminDeleteSubCategoryHandler
}
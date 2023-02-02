const pool = require ('../../connection/postgresql')
const {createdByAdmin,deletedbyAdmin,allAdminData,profilUpdatebyadmin} = require('../../repositories/admin-crud-co-admin/admin-crud-co-admin')

const userCreatedByAdmin=(req,res)=>{
    const {admin_phone,admin_password,admin_status } = req.body
    pool.query(createdByAdmin(admin_phone,admin_password,admin_status),(error,result)=>{
        if (error) throw error
        res.status(200).send("User Succesfully Added By Admin")
    })
}

const userDeletedbyAdmin=(req,res)=>{
    const {admin_status} = req.user
    const {admin_id} = req.body
    if (admin_status == 'Admin'){
       pool.query(deletedbyAdmin(admin_id),(error,result)=>{
        if (error) throw error
        res.status(200).json("User Deleted Successfully")

       }) 
    }
    else(
        res.ststus(200).json("You are Not an Admin")
    )
  
}

const getAllAdminData=(req,res)=>{
    pool.query(allAdminData(),(error,result)=>{
        if(error) throw error
        res.status(200).json(result.rows)
    } )
}

const coWorkerprofilUpdatebyadmin = (req,res)=>{
    const {admin_status} =req.user
    if(admin_status =="Admin"){
    const { admin_phone,admin_password,admin_status,admin_id} = req.body
    pool.query(profilUpdatebyadmin(admin_phone,admin_password,admin_status,admin_id),(error,result)=>{
        if(error) throw error
        res.status(200).json("User Profile updated")
    }
     )}

    else{
        res.status(200).json('you are not an Admin')
    }
    
}

module.exports ={userCreatedByAdmin,userDeletedbyAdmin,getAllAdminData,coWorkerprofilUpdatebyadmin}
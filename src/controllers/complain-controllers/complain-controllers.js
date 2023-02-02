const pool = require('../../connection/postgresql')
const { 
    postComplaintByEmp,
    postComplaintByCustomer
 } = require('../../repositories/complaints/complaints')

 const postComplaint = (req,res)=>{
    if(req.user.emp_id){
        const { emp_id } =req.user
        const {complaint_description} = req.body
        pool.query(postComplaintByEmp(complaint_description,emp_id),(error,result)=>{
            if(error) throw error
            res.status(200).json("Complaint sent successfully")
        })
    }
    else{
        const { customer_id } =req.user
        const {complaint_description} = req.body
        pool.query(postComplaintByCustomer(complaint_description,customer_id),(error,result)=>{
            if(error) throw error
            res.status(200).json("Complaint sent successfully")
        })
        
    }
 }

 module.exports = {postComplaint}
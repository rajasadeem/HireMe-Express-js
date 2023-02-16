const pool = require('../../connection/postgresql')
const { 
    postComplaintByEmp,
    postComplaintByCustomer,
    getComplaintOfEmp,
    getComplaintOfCustomer,
    getAllComplaint
 } = require('../../repositories/complaints/complaints')

 const postComplaint = (req,res)=>{
    if(req.user.emp_id){
        const { emp_id } =req.user
        const {complaint_description} = req.body
        pool.query(postComplaintByEmp(complaint_description,emp_id),(error,result)=>{
            if(error) res.status(400).json("Some error occurred, Please Refresh")
            res.status(200).json("Complaint sent successfully")
        })
    }
    else{
        const { customer_id } =req.user
        const {complaint_description} = req.body
        pool.query(postComplaintByCustomer(complaint_description,customer_id),(error,result)=>{
            if(error) res.status(400).json("Some error occurred, Please Refresh")
            res.status(200).json("Complaint sent successfully")
        })
        
    }
 }

 const getComplaint = (req,res)=>{
    const { complaint } =  req.query
    if(complaint == "employee"){
        pool.query(getComplaintOfEmp(),(error,result)=>{
            if(error) res.status(400).json("Some error occurred, Please Refresh")
            res.status(200).json(result.rows)
        })
    }
    else if(complaint == "customer"){
        pool.query(getComplaintOfCustomer(),(error,result)=>{
            if(error) res.status(400).json("Some error occurred, Please Refresh")
            res.status(200).json(result.rows)
        })
    }
    else{
        res.status(400).json("some error occurred")
    }
 }

 module.exports = {
    postComplaint,
    getComplaint
}
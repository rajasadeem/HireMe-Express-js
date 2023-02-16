const pool = require('../../connection/postgresql')
const {
    postEmpFeedback,
    postCustomerFeedback,
    getEmpFeedback,
    getCustomerFeedback,
    getAvgRatingOfEmp,
    getAvgRatingOfCustomer
} = require('../../repositories/feedback/feedback')

const postFeedback = (req,res)=>{
    if(req.user.emp_id){
        const {emp_id} = req.user
        const { customer_feedback_content,customer_feedback_stars,customer_id } =req.body
        pool.query(postCustomerFeedback(customer_feedback_content,customer_feedback_stars,customer_id,emp_id),(error,result)=>{
            if(error) res.status(400).json("Some error occurred, Please Refresh")
            res.status(200).json("Feedback Posted")
        })
    }
    else if(req.user.customer_id){
        const {customer_id} = req.user
        const { employee_feedback_content,employee_feedback_stars,emp_id} = req.body
        pool.query(postEmpFeedback(employee_feedback_content,employee_feedback_stars,emp_id,customer_id),(error,result)=>{
            if(error) res.status(400).json("Some error occurred, Please Refresh")
            res.status(200).json("Feedback Inserted")
        })
    }
    else{
        res.status(400).json("Some error occurred")
    }
}

const getFeedback = (req,res)=>{
    if(req.user.emp_id){
        const {emp_id} = req.user
        pool.query(getEmpFeedback(emp_id),(error,result)=>{
            if(error) res.status(400).json("Some error occurred, Please Refresh")
            res.status(200).json(result.rows)
        })
    }
    else if(req.user.customer_id){
        const {customer_id} = req.user
        pool.query(getCustomerFeedback(customer_id),(error,result)=>{
            if(error) res.status(400).json("Some error occurred, Please Refresh")
            res.status(200).json(result.rows)
        })
    }
    else{
        res.status(400).json("some error occurred")
    } 
}

const getAvgRating = (req,res)=>{
    if(req.user.emp_id){
        const {emp_id} = req.user
        pool.query(getAvgRatingOfEmp(emp_id),(error,result)=>{
            if(error) res.status(400).json("Some error occurred, Please Refresh")
            res.status(200).json(result.rows)
        }) 
    }
    else if(req.user.customer_id){
        const {customer_id} = req.user
        pool.query(getAvgRatingOfCustomer(customer_id),(error,result)=>{
            if(error) res.status(400).json("Some error occurred, Please Refresh")
            res.status(200).json(result.rows)
        })
    }
    else{
        res.status(400).json("Cannot get rating")
    }
}


module.exports = {
    postFeedback,
    getFeedback,
    getAvgRating
}
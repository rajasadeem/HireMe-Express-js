const pool = require('../../connection/postgresql')
const {
    postEmpFeedback,
    postCustomerFeedback,
    getEmpFeedback,
    getCustomerFeedback
} = require('../../repositories/feedback/feedback')

const postFeedback = (req,res)=>{
    if(req.user.emp_id){
        const {emp_id} = req.user
        const { customer_feedback_content,customer_id } =req.body
        pool.query(postCustomerFeedback(customer_feedback_content,customer_id,emp_id),(error,result)=>{
            if(error) throw error
            res.status(200).json("Feedback Posted")
        })
    }
    else if(req.user.customer_id){
        const {customer_id} = req.user
        const { employee_feedback_content,emp_id} = req.body
        pool.query(postEmpFeedback(employee_feedback_content,emp_id,customer_id),(error,result)=>{
            if(error) throw error
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
            if(error) throw error
            res.status(200).json(result.rows)
        })
    }
    else if(req.user.customer_id){
        const {customer_id} = req.user
        pool.query(getCustomerFeedback(customer_id),(error,result)=>{
            if(error) throw error
            res.status(200).json(result.rows)
        })
    }
    else{
        res.status(400).json("some error occurred")
    } 
}


module.exports = {
    postFeedback,
    getFeedback
}
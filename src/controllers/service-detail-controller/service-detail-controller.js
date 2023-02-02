const pool = require('../../connection/postgresql')
const { 
    getCompletedServicesOfEmp,
    getCompletedServicesOfCustomer
} = require('../../repositories/services-detail/service-detail')

const getServicesDetail = (req,res)=>{
    const {service_status} = req.body
    if(service_status === "complete"){
        if(req.user.emp_id){
            pool.query(getCompletedServicesOfEmp(service_status),(error,result)=>{
                if(error) throw error
                res.status(200).json(result.rows)
            })
        }
        else if(req.user.customer_id){
            const {customer_id} = req.user
            const {service_status} = req.body
            pool.query(getCompletedServicesOfCustomer(service_status,customer_id),(error,result)=>{
                if(error) throw error
                res.status(200).json(result.rows)
            })
        }
        else{
            res.status(400).json("some error occurred")
        }
    }
}



module.exports = getServicesDetail

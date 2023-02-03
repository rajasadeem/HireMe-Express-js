const pool = require('../../connection/postgresql')
const { 
    getServiceDetailOfEmp,
    getServiceDetailOfCustomer,
    getEmpServiceDetailForAdmin,
    getCustomerServiceDetailForAdmin
} = require('../../repositories/services-detail/service-detail')

const getServicesDetail = (req,res)=>{
    const {service_status} = req.body
    if(service_status == "complete"){
        if(req.user.emp_id){
            const {emp_id} = req.user
            pool.query(getServiceDetailOfEmp(service_status,emp_id),(error,result)=>{
                if(error) throw error
                res.status(200).json(result.rows)
            })
        }
        else if(req.user.customer_id){
            const {customer_id} = req.user
            pool.query(getServiceDetailOfCustomer(service_status,customer_id),(error,result)=>{
                if(error) throw error
                res.status(200).json(result.rows)
            })
        }
        else{
            res.status(400).json("some error occurred complete")
        }
    }
    else if(service_status == "active"){
        if(req.user.emp_id){
            const {emp_id} = req.user
            pool.query(getServiceDetailOfEmp(service_status,emp_id),(error,result)=>{
                if(error) throw error
                res.status(200).json(result.rows)
            })
        }
        else if(req.user.customer_id){
            const {customer_id} = req.user
            pool.query(getServiceDetailOfCustomer(service_status,customer_id),(error,result)=>{
                if(error) throw error
                res.status(200).json(result.rows)
            })
        }
        else{
            res.status(400).json("some error occurred active")
        }
    }
    else if(service_status == "pending"){
        if(req.user.emp_id){
            const {emp_id} = req.user
            pool.query(getServiceDetailOfEmp(service_status,emp_id),(error,result)=>{
                if(error) throw error
                res.status(200).json(result.rows)
            })
        }
        else if(req.user.customer_id){
            const {customer_id} = req.user
            pool.query(getServiceDetailOfCustomer(service_status,customer_id),(error,result)=>{
                if(error) throw error
                res.status(200).json(result.rows)
            })
        }
        else{
            res.status(400).json("some error occurred pending")
        }
    }
    else{
        res.status(400).json("some error occurred overall")
    }
}

const getUserServiceDetailForAdmin = (req,res)=>{
    if(req.body.emp_id){
        const {emp_id} = req.body
        pool.query(getEmpServiceDetailForAdmin(emp_id),(error,result)=>{
            if(error) throw error
            res.status(200).json(result.rows)
        })
    }
    else if(req.body.customer_id){
        const {customer_id} = req.body
        pool.query(getCustomerServiceDetailForAdmin(customer_id),(error,result)=>{
            if(error) throw error
            res.status(200).json(result.rows)
        })
    }
    else{
        res.status(400).json("some error occurred")
    }
}

module.exports = {
    getServicesDetail,
    getUserServiceDetailForAdmin
}

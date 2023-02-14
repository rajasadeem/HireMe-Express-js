const pool = require('../../connection/postgresql')
const { 
    getServiceDetailOfEmp,
    getServiceDetailOfCustomer,
    getEmpServiceDetailForAdmin,
    getCustomerServiceDetailForAdmin,
    postServiceDetail,
    deleteRequest,
    updateStatus
} = require('../../repositories/services-detail/service-detail')



const postServiceRequest = (req,res)=>{
    const {emp_id} = req.user
    const{ customer_id,service_category_id,sub_category_id,service_status,service_time } = req.body
    pool.query(postServiceDetail(emp_id,customer_id,service_category_id,sub_category_id,service_status,service_time),(error,result)=>{
        if(error) throw error
        res.status(200).json("Request Posted")
    })
}

const updateServiceStatus = (req,res)=>{
    const {emp_customer_services_id} = req.params
    pool.query(updateStatus(emp_customer_services_id),(error,result)=>{
        if(error) throw error
        res.status(200).json("Updated")
    })
}

const deleteServiceRequest = (req,res)=>{
    const {request_id} = req.params
    pool.query(deleteRequest(request_id),(error,result)=>{
        if(error) throw error
        res.status(200).json("Request Deleted")
    })
}

const getServicesDetail = (req,res)=>{
    const {service_status} = req.params
    console.log(service_status);
    if(service_status == "Complete"){
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
    else if(service_status == "Active"){
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
    getUserServiceDetailForAdmin,
    postServiceRequest,
    deleteServiceRequest,
    updateServiceStatus
}

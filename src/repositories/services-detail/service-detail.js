const getServiceDetailOfEmp = (service_status,emp_id)=>{
    return(`SELECT emp_customer_services.customer_id,emp_customer_services_id,service_category_name,sub_category_name,customer_name,service_status FROM emp_customer_services
    JOIN service_category ON emp_customer_services.service_category_id = service_category.service_category_id 
    JOIN sub_category ON emp_customer_services.sub_category_id = sub_category.sub_category_id
    JOIN customer ON emp_customer_services.customer_id = customer.customer_id WHERE emp_id = ${emp_id} AND service_status = '${service_status}' ORDER BY emp_customer_services_id DESC`)
} 
const getServiceDetailOfCustomer = (service_status,customer_id)=>{
    return(`SELECT emp_customer_services.emp_id,emp_customer_services_id,service_category_name,sub_category_name,emp_name,service_status FROM emp_customer_services
    JOIN service_category ON emp_customer_services.service_category_id = service_category.service_category_id
    JOIN sub_category ON emp_customer_services.sub_category_id = sub_category.sub_category_id
    JOIN employee ON emp_customer_services.emp_id = employee.emp_id WHERE customer_id = ${customer_id} AND service_status = '${service_status}'
    ORDER BY emp_customer_services_id DESC`)
}

const updateStatus = (emp_customer_services_id)=>{
    return(`UPDATE emp_customer_services SET service_status = 'Complete' 
    WHERE emp_customer_services_id = ${emp_customer_services_id}`)
}

const postServiceDetail = (emp_id,customer_id,service_category_id,sub_category_id,service_status,service_time)=>{
    return(
        `INSERT INTO emp_customer_services (emp_id,customer_id,service_category_id,sub_category_id,service_status,service_time) VALUES(${emp_id},${customer_id},${service_category_id},${sub_category_id},'${service_status}','${service_time}')`
    )

}

const deleteRequest = (request_id)=>{
    return(`DELETE FROM requests WHERE request_id = ${request_id}`)
}


const getEmpServiceDetailForAdmin = (emp_id)=>{
    return(`SELECT service_category_name,sub_category_name,customer_name,service_status FROM emp_customer_services 
    JOIN service_category ON emp_customer_services.service_category_id = service_category.service_category_id
    JOIN sub_category ON emp_customer_services.sub_category_id = sub_category.sub_category_id
    JOIN customer ON emp_customer_services.customer_id = customer.customer_id
    WHERE emp_id = ${emp_id} 
    ORDER BY emp_customer_services_id DESC`)
}

const getCustomerServiceDetailForAdmin = (customer_id)=>{
    return(`SELECT service_category_name,sub_category_name,emp_name,service_status FROM emp_customer_services
    JOIN service_category ON emp_customer_services.service_category_id = service_category.service_category_id
    JOIN sub_category ON emp_customer_services.sub_category_id = sub_category.sub_category_id
    JOIN employee ON emp_customer_services.emp_id = employee.emp_id
    WHERE customer_id = ${customer_id}
    ORDER BY emp_customer_services_id DESC`)
}


module.exports = {
    getServiceDetailOfEmp,
    getServiceDetailOfCustomer,
    getEmpServiceDetailForAdmin,
    getCustomerServiceDetailForAdmin,
    postServiceDetail,
    deleteRequest,
    updateStatus
}
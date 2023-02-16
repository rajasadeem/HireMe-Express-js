const postRequest = (service_category_id,sub_category_id,customer_city,latitude,longitude,customer_id,emp_id)=>{
    return(`INSERT INTO requests(service_category_id,sub_category_id,customer_city,latitude,longitude,customer_id,emp_id)
    VALUES(${service_category_id},${sub_category_id},'${customer_city}',${latitude},
    ${longitude},${customer_id},${emp_id})`)
}

const getRequest = (emp_id)=>{
    return(`SELECT request_id, requests.service_category_id, service_category_name, requests.sub_category_id,
     sub_category_name, customer_name,requests.customer_id,
     requests.customer_city, latitude, longitude FROM requests
    JOIN service_category ON requests.service_category_id = service_category.service_category_id
    JOIN sub_category ON requests.sub_category_id = sub_category.sub_category_id
    JOIN customer ON requests.customer_id = customer.customer_id
    WHERE emp_id = ${emp_id}`)
}

const deleteRequest = (request_id)=>{
    return(`DELETE FROM requests WHERE request_id = ${request_id}`)
}

module.exports = {
    postRequest,
    getRequest,
    deleteRequest
}
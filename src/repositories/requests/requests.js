const postRequest = (service_category_id,sub_category_id,customer_city,latitude,longitude,customer_id)=>{
    return(`INSERT INTO requests(service_category_id,sub_category_id,customer_city,latitude,longitude,customer_id)
    VALUES(${service_category_id},${sub_category_id},'${customer_city}',${latitude},
    ${longitude},${customer_id})`)
}

const  getRequest = ()=>{
    return(`SELECT * FROM requests`)
}

const deleteRequest = (request_id)=>{
    return(`DELETE FROM requests WHERE request_id = ${request_id}`)
}

module.exports = {
    postRequest,
    getRequest,
    deleteRequest
}
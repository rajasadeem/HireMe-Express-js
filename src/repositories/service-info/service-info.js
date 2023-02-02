const serviceCategory = ()=>{
    return(`SELECT * FROM service_category`)
}

const subCategory = (service_category_id)=>{
    return(`SELECT sub_category_id,sub_category_name FROM sub_category
     WHERE service_category_id = ${service_category_id}`)
}

module.exports = {
    serviceCategory,
    subCategory
}
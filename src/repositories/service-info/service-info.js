const serviceCategory = ()=>{
    return(`SELECT * FROM service_category`)
}

const subCategory = (service_category_id)=>{
    return(`SELECT sub_category_id,sub_category_name FROM sub_category
     WHERE service_category_id = ${service_category_id}`)
}

const AddServiceCategory=(service_category_name)=>{
    return (`INSERT INTO service_category (service_category_name) VALUES ('${service_category_name}')`)
}

const deleteCategory =(service_category_id)=>{
    return(`DELETE FROM service_category
    WHERE service_category_id = ${service_category_id}`)

}

const addSubCategory=(sub_category_name,service_category_id)=>{
    return (`INSERT INTO sub_category(sub_category_name,service_category_id)
    VALUES ('${sub_category_name}',${service_category_id})`)
}

const delteSubCategory=(sub_category_id)=>{
    return (`DELETE FROM sub_category
    WHERE sub_category_id = ${sub_category_id}`)
}


module.exports = {
    serviceCategory,
    subCategory,
    AddServiceCategory,
    deleteCategory,
    addSubCategory,
    delteSubCategory
}
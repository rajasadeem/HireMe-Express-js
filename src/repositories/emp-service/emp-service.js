const addEmpService = (emp_id,service_category_id,sub_category_id)=>{
    return(`INSERT INTO emp_services (emp_id,service_category_id,sub_category_id)
    VALUES (${emp_id},${service_category_id},${sub_category_id})`)
}

const deleteEmpServiceCategory = (service_category_id,emp_id)=>{
    return(`DELETE FROM emp_services WHERE emp_id = ${emp_id} AND
     service_category_id = ${service_category_id}`)
}

const deleteEmpSubCategory = (sub_category_id,emp_id)=>{
    return(`DELETE FROM emp_services WHERE emp_id = ${emp_id} AND
     sub_category_id = ${sub_category_id}`)
}

const getEmpService = (emp_id)=>{
    return(`SELECT emp_services.service_category_id,service_category_name,emp_services.sub_category_id,sub_category_name FROM emp_services 
    JOIN service_category ON emp_services.service_category_id = service_category.service_category_id
    JOIN sub_category ON emp_services.sub_category_id = sub_category.sub_category_id
    WHERE emp_id = ${emp_id}`)
}

module.exports = {
    addEmpService,
    deleteEmpServiceCategory,
    deleteEmpSubCategory,
    getEmpService
}
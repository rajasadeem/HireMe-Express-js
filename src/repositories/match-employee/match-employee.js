const getMatchedEmp = (service_category_id,sub_category_id)=>{
    return(`SELECT emp_id FROM emp_services WHERE service_category_id = ${service_category_id}
    AND sub_category_id = ${sub_category_id}`)
}

module.exports = getMatchedEmp
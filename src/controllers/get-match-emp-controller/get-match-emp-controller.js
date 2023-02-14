const pool = require('../../connection/postgresql')

const getMatchedEmp = require('../../repositories/match-employee/match-employee')

const matchedEmpHandler = (req,res)=>{
    const {service_category_id,sub_category_id} = req.params
    pool.query(getMatchedEmp(service_category_id,sub_category_id),(error,result)=>{
        if(error) throw error
        const emp_id= result.rows.map((value,index)=>{
            return value.emp_id
        })
        res.status(200).json(emp_id)
    })
}


module.exports = matchedEmpHandler
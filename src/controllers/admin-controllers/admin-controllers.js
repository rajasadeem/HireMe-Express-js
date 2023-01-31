const pool = require('../../connection/postgresql')
const jwt = require ('jsonwebtoken')


const adminLoginhandler=(req,res)=>{
    const {admin_phone , admin_password } = req.body
    try{
    pool.query(`SELECT * FROM admin_panel WHERE admin_phone = ${admin_phone} AND
    admin_password = '${admin_password}'`, (error,result)=>{
        if(result.rows.length>0){
            const user = result.rows
            const [userData] = user;
            // console.log(userData);
            const accessToken = (jwt.sign(userData,process.env.Access_web_token))
            res.status(200).json({accessToken,user})
        }
        else{
            res.json(" email or password in invaild")
        }
    })
    }catch(error){
        console.log(error)
        res.status(500).json("server error")
    }
 
}


const adminComplaintHandlerEmp=(req,res)=>{
    pool.query(`SELECT complaint_description,emp_name FROM complaint
    JOIN employee ON complaint.emp_id = employee.emp_id ORDER BY complaint_id DESC `,(error,result)=>{
        if(error) throw error
        res.status(200).json(result.rows)
    })
}

const adminComplaintHandlerCustomer=(req,res)=>{
    pool.query(`SELECT complaint_description,customer_name FROM complaint
    JOIN customer ON complaint.customer_id = customer.customer_id ORDER BY complaint_id DESC`,(error,result)=>{
        if(error) throw error
        res.status(200).json(result.rows)
    })
}

const adminGetAllEmployeeaHandler=(req,res)=>{
    pool.query(`SELECT * FROM employee`,(error,result)=>{
        if(error) throw error
        res.status(200).json(result.rows)
    })
}

const adminGetAllCustomerHandler=(req,res)=>{
    pool.query(`SELECT * FROM customer`,(error,result)=>{
        if(error) throw error
        res.status(200).json(result.rows)
    })
}

const adminGetSubCategory=(req,res)=>{
    const {service_category_id} = req.params
    pool.query(`SELECT sub_category_name FROM sub_category WHERE 
    service_category_id= ${service_category_id}`,(error,result)=>{
        if(error) throw error
        res.status(200).json(result.rows)
    })
}

const adminGetserviceCategory=(req,res)=>{
    const {service_category_id} = req.params
    pool.query(`SELECT service_category_name FROM service_category ${service_category_id}`,(error,result)=>{
        if(error) throw error
        res.status(200).json(result.rows)
    })
}

const adminAddServiceCategory = (req,res)=>{
    const {service_category_name} = req.body
    pool.query(`INSERT INTO service_category (service_category_name) VALUES ('${service_category_name}')`,(error,result)=>{
        if(error) throw error
        res.status(200).json("Service Category added")
    })
}

const adminAddSubCategory = (req,res)=>{
    const {sub_category_name,service_category_id} = req.body
    pool.query(`INSERT INTO sub_category(sub_category_name,service_category_id)
    VALUES ('${sub_category_name}',${service_category_id})`,(error,result)=>{
        if(error) throw error
        res.status(200).json("sub-category added")
    })
}

const adminDeleteCategoryHandler = (req,res)=>{
    const {service_category_id} = req.body
    pool.query(`DELETE FROM service_category
     WHERE service_category_id = ${service_category_id}`,(error,result)=>{
        if(error) throw error
        res.status(200).json("service category deleted")
    })
}
const adminDeleteSubCategoryHandler = (req,res)=>{
    const {sub_category_id} = req.body
    pool.query(`DELETE FROM sub_category
     WHERE sub_category_id = ${sub_category_id}`,(error,result)=>{
        if(error) throw error
        res.status(200).json("sub category deleted")
    })
}

const adminPostNotification = (req,res)=>{
    const {admin_notification_content} = req.body
    pool.query(`INSERT INTO admin_notifications(admin_notification_content)
    VALUES('${admin_notification_content}')`,(error,result)=>{
        if(error) throw error
        res.status(200).json("added")
    })
}
const adminGetNotification = (req,res)=>{
    pool.query(`SELECT * FROM admin_notifications`,(error,result)=>{
        if(error) throw error
        res.status(200).json(result.rows)
    })
}

const adminUpdateProfile = (req,res)=>{
    const { admin_phone,admin_password} = req.body
    pool.query(`UPDATE admin_panel SET admin_phone = ${admin_phone},
    admin_password = '${admin_password}'`,(error,result)=>{
        if(error) throw error
        res.status(200).json("updated")
    })
}




module.exports ={adminLoginhandler,adminComplaintHandlerEmp,adminComplaintHandlerCustomer,adminGetAllEmployeeaHandler,adminGetAllCustomerHandler,adminGetSubCategory ,adminGetserviceCategory,adminAddServiceCategory,adminAddSubCategory,adminDeleteCategoryHandler,adminDeleteSubCategoryHandler,adminPostNotification,adminGetNotification,adminUpdateProfile}

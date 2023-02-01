const pool = require('../../connection/postgresql')
const jwt = require ('jsonwebtoken')


const adminLoginhandler=(req,res)=>{
    const {user_phone , user_password } = req.body
    console.log(req.body)
    try{
    pool.query(`SELECT * FROM admin_panel WHERE user_phone = '${user_phone}' AND
    user_password = '${user_password}'`, (error,result)=>{

        if(result.rows.length>0){
            const user = result.rows
            const [userData] = user;
            //console.log(userData);
            const accessToken = (jwt.sign(userData,process.env.ACCESS_WEB_TOKEN))
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
    const {service_category_id} = req.body
    pool.query(`SELECT sub_category_name , sub_category_id FROM sub_category WHERE 
    service_category_id= ${service_category_id}`,(error,result)=>{
        if(error) throw error
        res.status(200).json(result.rows)
    })
}

const adminGetserviceCategory=(req,res)=>{
    pool.query(`SELECT * FROM service_category `,(error,result)=>{
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
    const { user_phone,user_password} = req.body
    pool.query(`UPDATE admin_panel SET user_phone = ${user_phone},
    user_password = '${user_password}'`,(error,result)=>{
        if(error) throw error
        res.status(200).json("updated")
    })
}

const userCreatedByAdmin=(req,res)=>{
    const {user_phone,user_password,user_status } = req.body
    pool.query(`INSERT INTO admin_panel (user_phone,user_password,user_status) 
    VALUES(' ${user_phone}' ,'${user_password}','${user_status}')`,(error,result)=>{
        if (error) throw error
        res.status(200).send("User Succesfully Added By Admin")
    })
}

const userDeletedbyAdmin=(req,res)=>{
    const {user_status} = req.user
    const {user_id} = req.body
    if (user_status == 'Admin'){
       pool.query(`DELETE FROM admin_panel WHERE user_id = ${user_id} `,(error,result)=>{
        if (error) throw error
        res.status(200).json("User Deleted Successfully")

       }) 
    }
    else(
        res.ststus(200).json("You are Not an Admin")
    )
  
}

const getAllAdminData=(req,res)=>{
    pool.query(`SELECT * FROM admin_panel `,(error,result)=>{
        if(error) throw error
        res.status(200).json(result.rows)
    } )
}

const userprofilUpdatebyadmin = (req,res)=>{
    const {user_status} =req.user
    if(user_status =="Admin"){
    const { user_id,user_phone,user_password,user_status} = req.body
    pool.query(`UPDATE admin_panel SET user_phone = '${user_phone}',
    user_password = '${user_password}' , user_status= '${user_status}' WHERE 
    user_id =${user_id}`,(error,result)=>{
        if(error) throw error
        res.status(200).json("User Profile updated")
    }
     )}

    else{
        res.status(200).json('you are not an Admin')
    }
    
}



module.exports ={userprofilUpdatebyadmin,getAllAdminData,userDeletedbyAdmin,userCreatedByAdmin,adminLoginhandler,adminComplaintHandlerEmp,adminComplaintHandlerCustomer,adminGetAllEmployeeaHandler,adminGetAllCustomerHandler,adminGetSubCategory ,adminGetserviceCategory,adminAddServiceCategory,adminAddSubCategory,adminDeleteCategoryHandler,adminDeleteSubCategoryHandler,adminPostNotification,adminGetNotification,adminUpdateProfile}

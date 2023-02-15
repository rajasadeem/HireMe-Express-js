const pool = require ('../../connection/postgresql')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const {
    logInHandlerEmp,
    logInHandlerCustomer
} = require ('../../repositories/log-in/log-in')


const userLoginHandler = (req,res)=>{

    if (req.body.customer_phone && req.body.customer_password){

    const {customer_phone , customer_password } = req.body
    try{
    pool.query(logInHandlerEmp(customer_phone), (error,result)=>{
        if(result.rows.length>0){
            const user = result.rows
            if(!user){
                res.send('No user found')
            }else{
                console.log('user',user)
                bcrypt.compare(customer_password, user[0].customer_password)
                .then(()=>{ 
                    const [userData] = user;
                    const accessToken = (jwt.sign(userData,process.env.ACCESS_WEB_TOKEN))
                    res.status(200).json({accessToken,user})
                    res.send('success')
                })
                .catch((dbError)=>{console.log(dbError)})
                
            }
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


else if(req.body.emp_phone && req.body.emp_password){
    
        const {emp_phone , emp_password } = req.body
        try{
        pool.query(logInHandlerEmp(emp_phone), (error,result)=>{
            if(result.rows.length>0){
                const user = result.rows
                if(!user){
                    res.send('No user found')
                }else{
                    console.log('user',user)
                    bcrypt.compare(emp_password, user[0].emp_password)
                    .then(()=>{ 
                        const [userData] = user;
                        const accessToken = (jwt.sign(userData,process.env.ACCESS_WEB_TOKEN))
                        res.status(200).json({accessToken,user})
                        res.send('success')
                    })
                    .catch((dbError)=>{console.log(dbError)})
                    
                }
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

    else {res.status(401).json("User Does-notr Exist")}

}

module.exports = userLoginHandler
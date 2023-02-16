const pool = require ('../../connection/postgresql')
const jwt = require('jsonwebtoken')
const adminLoginHandler = require ('../../repositories/admin-login/admin-login')


const adminLoginHandlerFun=(req,res)=>{
    const {admin_phone , admin_password } = req.body
    try{
    pool.query(adminLoginHandler(admin_phone , admin_password), (error,result)=>{

        if(result.rows.length>0){
            const user = result.rows
            const [userData] = user;
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


module.exports = adminLoginHandlerFun
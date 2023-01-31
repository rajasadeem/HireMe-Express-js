const jwt = require('jsonwebtoken')

const auth = (req,res,next)=>{
    const token = req.headers.authorization.split(" ")[1]
    if(token == null) res.status(401)
    // console.log(token);
    jwt.verify(token,process.env.Access_web_token,(error,user)=>{
        if(error) throw error
        // console.log(user);
        req.user = user
    })
    next()
}
module.exports = auth
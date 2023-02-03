const pool = require('../../connection/postgresql')
const adminSetting = require('../../repositories/admin-update-settings/admin-update-setting')

const adminUpdateProfile = (req,res)=>{
    const { admin_phone,admin_password,admin_id} = req.body
    pool.query(adminSetting(admin_phone,admin_password,admin_id),(error,result)=>{
        if(error) throw error
        res.status(200).json("updated")
    })
}

module.exports = adminUpdateProfile
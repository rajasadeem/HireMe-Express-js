
const adminSetting=(admin_phone,admin_password,admin_id)=>{
   
    return (`UPDATE admin_panel SET admin_phone = ${admin_phone},
    admin_password = '${admin_password}' WHERE admin_id = ${admin_id}`)
}

module.exports =adminSetting
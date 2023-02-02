
const logInHandlerAdmin=(admin_phone,admin_password)=>{
    return (`SELECT * FROM admin_panel WHERE admin_phone = '${admin_phone}' AND
    admin_password = '${admin_password}'`)
}

module.exports = logInHandlerAdmin
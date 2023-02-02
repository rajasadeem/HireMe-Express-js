
const createdByAdmin =(admin_phone,admin_password,admin_status)=>{
    return (`INSERT INTO admin_panel (admin_phone,admin_password,admin_status) 
    VALUES(' ${admin_phone}' ,'${admin_password}','${admin_status}')`)
}

const deletedbyAdmin=(admin_id)=>{
    return (`DELETE FROM admin_panel WHERE admin_id = ${admin_id} `)
}

const allAdminData=()=>{
    return(`SELECT * FROM admin_panel `)
}

const profilUpdatebyadmin=(admin_phone,admin_password,admin_status,admin_id)=>{
    return(`UPDATE admin_panel SET admin_phone = '${admin_phone}',
    admin_password = '${admin_password}' , admin_status= '${admin_status}' WHERE 
    admin_id =${admin_id}`)
}

module.exports  ={createdByAdmin,deletedbyAdmin,allAdminData,profilUpdatebyadmin}
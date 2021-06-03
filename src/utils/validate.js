module.exports.validateField = (field)=>{
    if(field === undefined || field.trim()==='')return false
    return true;
}
const knex = require('../connection_tbl');

var selectData  = ()=>{
     return knex.select('*').from("department")
}

var selectby_id  = (id)=>{
    return knex.select("*")
    .from('department')
    .where('department.department_id', id)
}


module.exports = {selectData, selectby_id}
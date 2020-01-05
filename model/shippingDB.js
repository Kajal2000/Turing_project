const knex = require('../connection_tbl');

var selectData1  = ()=>{
    return knex.select('*').from("shipping")
}

var get_selectData = (shipping_region_id)=>{
    return knex.select("*")
    .from('shipping')
    .where('department.shipping_region_id', shipping_region_id)
}

module.exports = {selectData1,get_selectData}
const knex = require('../connection_tbl');

var select_data_tax  = ()=>{
    return knex.select('*').from("tax")
}

var select_data_id = (tax_ID)=>{
    return knex.select("*")
    .from('tax')
    .where('tax.tax_id',tax_ID)
}

module.exports = {select_data_tax,select_data_id}
const knex = require('../connection_tbl');

var selectData  = () => {
    return knex.select('*').from("category")
}

var selectby_id  = (id)=>{
    return knex.select("*")
    .from('category')
    .where('category.category_id', id)
}

var join_productTable = (product_id)=>{
    return knex('category')
    .select('category.category_id','department_id','name')
    .join('product_category','category.category_id','=','product_category.category_id')
    .where('product_category.product_id',product_id)
}


var department_id  = (department_id)=>{
    return knex.select("*")
    .from('category')
    .where('category.department_id', department_id)
}



module.exports = {selectData,selectby_id, join_productTable,department_id}
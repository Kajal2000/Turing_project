const knex = require('../connection_tbl');

var selectData  = () => {
    return knex.select('*').from("product")
}

var select_product_data = (name_search) =>{
    return knex("product").where('product_id', 'like', name_search).then((connect)=>{
    req.send(connect)
    }
)}


// var selectproduct_id  = (product_ID)=>{
//     return knex.select("*")
//     .from('product')
//     .where('product.product_id', product_ID)
// }

var select_category_id = (category_id) =>{
    return knex("product")
    .join("product_category","product.product_id", "=" ,"product_category.product_id")
    .select("product.product_id","name","description","price","discounted_price","thumbnail","product_category.product_id")
    .where("product_category.category_id",category_id)
}

var select_department_id = (department_ID) => {
    return knex("product")
    .join("department","product.product_id","department.department_id")
    .select("*")
    .where("department_id",department_ID)
        
}

var select_pro_id = (product_ID)=>{
    return knex("product")
    .where("product_id",product_ID)
}  

var select_pro_id_l = (product_ID)=>{
    return knex("product_category")
    .join("category","product_category.category_id","=", "category.category_id")
    .join("department","category.department_id", "=", "department.department_id")
    .select("department.department_id","department.name as name", "category.category_id","category.name as name_1")
    .where("product_id",product_ID)
}
module.exports = {select_product_data,selectData,select_category_id,select_department_id,select_pro_id,select_pro_id_l}
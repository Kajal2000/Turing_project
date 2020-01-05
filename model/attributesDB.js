const knex = require('../connection_tbl');

var selectData  = () => {
    return knex.select('*').from("attribute")
}

var selectby_id  = (attribute_ID)=>{
    return knex.select("*")
    .from('attribute')
    .where('attribute.attribute_id',attribute_ID)
}

var selectData_1 = (attribute_value_id) => {
    return knex("attribute")
    .join("attribute_value","attribute.attribute_id","=","attribute_value.attribute_id")
    .select("attribute_value.attribute_value_id","value")
    .where("attribute_value.attribute_value_id",attribute_value_id)

}

var select_Data = (product_ID)=>{
    return knex("attribute")
    .join("attribute_value","attribute.attribute_id", "=" ,"attribute_value.attribute_id")
    .join("product_attribute","attribute_value.attribute_value_id", "=" ,"product_attribute.attribute_value_id")
    .select("attribute_value.attribute_value_id","value","attribute.name")
    .where("product_id",product_ID)
}
module.exports = {selectData,selectby_id,selectData_1,select_Data}
const knex = require('../connection_tbl');


// 1)
var shopping_selectby_id  = (cart_ID)=>{
    return knex.select("*")
    .from('shopping_cart')
    .where('shopping_cart.cart_id', cart_ID)
}


var insertdata_shopping = (con) => {
    return knex('shopping_cart').insert(con)
}

var selectby_id  = (cart_ID)=>{
    return knex.select("*")
    .from('shopping_cart')
    .where('shopping_cart.cart_id', cart_ID)
}

// 5)
var selectby_id_del  = (cart_ID)=>{
    return knex("shopping_cart")
    .where('cart_id', cart_ID)
    .del()
}

// 7) 
var select_by_id_shopping = (cart_id)=>{
    return knex("shopping_cart")
    .join("product","shopping_cart.product_id", "=", "product.product_id")
    .select("shopping_cart.quantity","product.price")
    .where("shopping_cart.cart_id",cart_id)
}       

// 9)

var select_getSaved = (cart_id) =>{
    return knex('getSaved')
        .join('product','getSaved.cart_id','=', 'product.product_id')
        .select('product.name','getSaved.item_id','attributes','price')
        .where('getSaved.cart_id',cart_id)
}

// 10)

var shopping_remove_product = (item_id)=>{
    return knex('shopping_cart')
    .where("shopping_cart.item_id",item_id)
    .del()
}

module.exports = {selectby_id,
    shopping_remove_product,
    insertdata_shopping,
    selectby_id_del
    ,select_by_id_shopping,
    select_getSaved,
    shopping_selectby_id}

const knex = require('../connection_tbl');

// 1)
var total_orders = (cart_id)=>{
    return knex("shopping_cart")
    .join("product","shopping_cart.product_id", "=", "product.product_id")
    .select("shopping_cart.quantity","product.price")
    .where("shopping_cart.cart_id",cart_id)
}      

var insertdata_orders = (orders_data) => {
    return knex('orders').insert(orders_data)
}
// var select_id_del  = (customer_id)=>{
//     return knex("orders")
//     .where('customer_id', customer_id)
//     .del()
// }

// 2)

var orders_order_id = (order_data)=>{
    return knex("order_detail").insert(order_data)
}

var order_by_id = (order_id) => {
    return knex("orders")
    .join('shopping_cart','shopping_cart.item_id','orders.order_id')
    .join("product","shopping_cart.product_id","=","product.product_id")
    .select("orders.order_id","product.product_id","name","price","shopping_cart.attributes","quantity","item_id")
    .where("order_id",order_id)
};
var orders_id = (order_id)=>{
    return knex("order_detail")
    .where("order_detail.order_id",order_id)
}

// 3)
var get_order = ()=>{
    return knex.select("*").from("orders")
}

// 4)
var orders_shortDetail = (order_id)=>{
    return knex("orders")
    .join('product','product.product_id','orders.order_id')
    .select("orders.order_id","total_amount","created_on","shipped_on","status","product.name")
    .where("order_id",order_id)
};
module.exports = {total_orders,insertdata_orders,order_by_id,orders_order_id,orders_id,get_order,orders_shortDetail}

const knex = require('../connection_tbl');

var selectby_id  = (cart_ID)=>{
    return knex.select("*")
    .from('shopping_cart')
    .where('shopping_cart.cart_id', cart_ID)
}
module.exports = {selectby_id}

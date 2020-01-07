const knex = require('../connection_tbl');


var selectby_customer_id  = (customer_ID) => {
    return knex.select("*")
    .from('customer')
    .where('customer.customer_id', customer_ID)
}


var insertdata_customer = (con) => {
    return knex('customer').insert(con)
}

var insertdata_customer = (con,customer_ID) => {
    return knex('customer').where("customer_id",customer_ID)
    .update(con)
}

module.exports = {insertdata_customer,selectby_customer_id}

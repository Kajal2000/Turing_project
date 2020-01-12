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

// 4)

var login_email = (email) => {
    return knex.select("*").from("customer").havingIn("customer.email",email)

}
var login = (password) => {
    return knex.select("*").from("customer").havingIn("customer.password",password)
}

// 6)
// var adress_data = (updata,customer_id) => {
//     return knex('customer').update(updata)
//     .where("customer_id",customer_id)
// }



module.exports = {insertdata_customer,selectby_customer_id,login_email,login}

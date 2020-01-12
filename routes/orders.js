const express = require('express');
const orders = express.Router();
const ordersDB  = require("../model/ordersDB")

// 1)

orders.post("/orders/:cart_id",(req,res)=>{
    var cart_id = req.params.cart_id;
    var data_1 = ordersDB.total_orders(cart_id);
    data_1.then((data)=>{
        const t_price = data[0]['quantity'] * data[0]['price']
    orders_data = {
    "order_id" : req.body.order_id,
    "total_amount" : t_price,
    "created_on" : new Date(),
    "shipped_on" : new Date(),
    "status" : req.body.status,
    "comments" : req.body.comments,
    "customer_id" : req.body.customer_id,
    "shipping_id" : req.body.shipping_id,
    "tax_id" : req.body.tax_id
}
ordersDB.insertdata_orders(orders_data)
.then((SaveData)=>{
    return res.json(SaveData)
}).catch((err)=>{
    console.log(err);
        })
    })
})
// orders.delete("/orders/:customer_id",(req,res)=>{
//     let customer_id = req.params.customer_id
//     var data = ordersDB.select_id_del(customer_id)
//     data.then((Response)=>{
//         res.json(Response)
//     })
// });

// 2)
orders.get("/orders/:order_id",(req,res)=>{
    var order_id = req.params.order_id;
    var data_1 = ordersDB.order_by_id(order_id)
    data_1.then((store_data)=>{
    order_data = {
        "item_id" : store_data[0]["item_id"],
        "order_id" : store_data[0]["order_id"],
        "product_id" : store_data[0]["product_id"],
        "attributes" : store_data[0]["attributes"],
        "product_name" : store_data[0]["name"],
        "quantity" : store_data[0]["quantity"],
        "unit_cost" : store_data[0]["price"]
    }
    ordersDB.orders_order_id(order_data)
.then((data)=>{
    return res.json(data)
}).catch((err)=>{
    console.log(err);
    })
})
})
orders.get("/order/:order_id",(req,res)=>{
    var order_id = req.params.order_id;
    var data = ordersDB.orders_id(order_id)
    data.then((Response)=>{
       res.json(Response)
   }).catch((err)=>{
       console.log(err)
       res.send(err)
   })
});

// 3)
orders.get('/order',(req,res) => {
    var data = ordersDB.get_order()
    data.then((Response)=>{
        res.json(Response)
   }).catch((err)=>{
       console.log(err)
       res.send(err)
   })
})

// 4)
orders.get('/order_get/:order_id',(req,res) => {
    let order_id = req.params.order_id
    var data = ordersDB.orders_shortDetail(order_id)
    data.then((Response)=>{
        res.json(Response)
   }).catch((err)=>{
       console.log(err)
       res.send(err)
   })
})
module.exports = orders
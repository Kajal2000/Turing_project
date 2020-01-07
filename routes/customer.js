const express = require('express');
const customer = express.Router();
const customerDB  = require("../model/customerDB")

// 2)
customer.get('/customers_get/:customer_id',(req,res) => {
    let customer_ID = req.params.customer_id
    var data = customerDB.selectby_customer_id(customer_ID)
    data.then((Rsponse)=>{
       res.json(Rsponse)
   }).catch((err)=>{
       console.log(err)
       res.send(err)
   })
});

// 3)
customer.post('/customers_post',(req,res) => {
    const con = {
        name: req.body.name,
        customer_id: req.body.customer_id,
        email: req.body.email,
        password:req.body.password,
        address_1 : req.body.address_1,
        mob_phone : req.body.mob_phone,
        city : req.body.city
    };
    customerDB.insertdata_customer(con)
    .then((data)=>{
       return res.json(data)
    }).catch((err)=>{
       console.log(err);
    })
})

// 1)
customer.put('/customers_update/:customer_id',(req,res) => {
    customer_ID = req.params.customer_id
    const con = {
        "name": req.body.name,
        "email": req.body.email,
        "password":req.body.password,
        "address_1" : req.body.address_1,
        "mob_phone" : req.body.mob_phone,
        "city" : req.body.city
    };
    customerDB.insertdata_customer(con,customer_ID)
    .then((data)=>{
       return res.json(data)
    }).catch((err)=>{
       console.log(err);
    })
})

module.exports = customer;
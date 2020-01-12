const express = require('express');
const customer = express.Router();
const customerDB  = require("../model/customerDB")

var jwt = require("jsonwebtoken")
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

// 4)
customer.post("/login",(req,res) => {
    var pass = req.body.password;
    var eml = req.body.email;
    customerDB.login_email(eml)
    .then((logindata)=>{
        // console.log(logindata)
        if (logindata.length == 0){
            res.send("wrong h email")
        }else{customerDB.login(pass)
            .then((logindata) =>{
            if (logindata.length == 0){
                res.send("Wrong h password")
            }else{
                let newToken = jwt.sign({ "costomer" : logindata }, "kajal")
                    // console.log(newToken)
                    res.cookie(newToken)
                    res.send('loing successsful')
                }
            })
        }
    }).catch((err)=>{
        console.log(err); 
    })
});
    
customer.put('/customers_address/:customer_id',(req,res)=>{
    let customer_id = req.params.customer_id
    var alltoken = req.headers.cookie
    var token = alltoken.split('=undefined')
    token = (token[token.length-2]).slice(2,600)
    jwt.verify(token, 'kajal', (err,data) => {
        for(let i = 0; i < data['costomer'].length; i++)
        var password = data['costomer'][i]['password']
        let updata = ({
            address_2 : req.body.address_2,
            address_1 : req.body.address_1
        })
        customerDB.adress_data(updata,customer_id)
        .then(()=>{
            res.send(updata)
        })
    })
});

customer.put('/customers_creditCard/:customer_id',(req,res)=>{
    let customer_id = req.params.customer_id
    var alltoken = req.headers.cookie
    var token = alltoken.split('=undefined')
    token = (token[token.length-2]).slice(2,600)
    jwt.verify(token, 'kajal', (err,data) => {
        for(let i = 0; i < data['costomer'].length; i++)
        var password = data['costomer'][i]['password']
        let updata = ({
            credit_card : req.body.credit_card,
        })
        customerDB.creditCard_data(updata,customer_id)
        .then(()=>{
            res.send(updata)
        })
    })
});


module.exports = customer;
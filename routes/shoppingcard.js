const express = require('express');
const shopping = express.Router();
const shoppingDB  = require("../model/shoppingcardDB")

var randomString = require('random-string');
var UniqueId = randomString();

// 1)

shopping.get('/shoppingcart/generateUniqueId/:cart_id',(req,res)=>{
    let cart_ID = req.params.cart_id
    var data = shoppingDB.shopping_selectby_id(cart_ID)
    var UniqueId_Data = {
        cart_id : UniqueId
    }
    res.send(UniqueId_Data)
    data.then((Response)=>{
        res.json(Response)
   })
});

// 2)

shopping.post('/shopping_add',(req,res) => {
    const con = {
        item_id : req.body.item_id,
        cart_id : req.body.cart_id,
        product_id : req.body.product_id,
        attributes : req.body.attributes,
        quantity : req.body.quantity,
        buy_now : req.body.buy_now,
        added_on : new Date()
    };
    shoppingDB.insertdata_shopping(con)
    .then((data)=>{
       return res.json(data)
    }).catch((err)=>{
       console.log(err);
    })
})

// 3)

shopping.get('/shoppingcart/:cart_id',(req,res) => {
    let cart_ID = req.params.cart_id
    var data = shoppingDB.selectby_id_del(cart_ID)
    data.then((Response)=>{
        res.json(Response)
   })
});

// 5)

shopping.delete("/shoppingcart_empty/:cart_id",(req,res)=>{
    let cart_ID = req.params.cart_id
    var data = shoppingDB.selectby_id_del(cart_ID)
    data.then((Response)=>{
        res.json(Response)
   })
});

//  9)
shopping.get('/shoppingcart_getSaved/:cart_id', (req,res) => {
    var cart_id = req.params.cart_id
    var data = shoppingDB.select_getSaved(cart_id)
    data.then((Response)=>{
       res.json(Response)
   }).catch((err)=>{
       console.log(err)
       res.send(err)
   })
});
// 7)

shopping.get('/totalAmount/:cart_id', (req,res) => {
    var cart_id = req.params.cart_id;
    var data_1 = shoppingDB.select_by_id_shopping(cart_id);
    data_1.then((data)=>{
        const t_price = data[0]['quantity'] * data[0]['price']
       var total_data = {
          total_amount : t_price
       }
       res.json(total_data)
    }).catch((err)=>{
       console.log(err)
       res.send(err)
    })
 });

shopping.delete("/shoppingcart_empty/:cart_id",(req,res)=>{
    let cart_ID = req.params.cart_id
    var data = shoppingDB.selectby_id_del(cart_ID)
    data.then((Response)=>{
        res.json(Response)
   })
});
// 10)

shopping.delete('/shoppingcart/removeProduct/:item_id',(req,res) => {
    let item_id = req.params.item_id
    var data = shoppingDB.shopping_remove_product(item_id)
    data.then((Response)=>{
        res.json(Response)
   })
});
module.exports = shopping;

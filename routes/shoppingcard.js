const express = require('express');
const shopping = express.Router();
const shoppingDB  = require("../model/shoppingcardDB")

shopping.get('/shoppingcart/:cart_id',(req,res) => {
    let cart_ID = req.params.cart_id
    var data = shoppingDB.selectby_id(cart_ID)
    data.then((Response)=>{
        res.json(Response)
   })
});

shopping.get('/shoppingcart_getSaved/:cart_id', (req,res) => {
    let cart_id = req.params.cart_id
    knex('getSaved')
    .join('product','getSaved.cart_id','=', 'product.product_id')
    .select('product.name','getSaved.item_id','attributes','price')
    .where('cart_id',cart_id).then((data) => {
        res.send(data)
    }).catch((err)=>{
        res.send(err)
    })
});

module.exports = shopping;
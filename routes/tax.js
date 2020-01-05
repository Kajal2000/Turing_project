const express = require('express');
const tax = express.Router();
const taxDB  = require("../model/taxDB")

// all data get
tax.get('/tax_data',(req,res) => {
    var data = taxDB.select_data_tax()
    data.then((Response)=>{
        res.json(Response)
   }).catch((err)=>{
       console.log(err)
       res.send(err)
   })
})
tax.get("/tax/:tax_id",(req,res) => {
    var tax_ID = req.params.tax_id
    var data = taxDB.select_data_id(tax_ID)
    data.then((Response)=>{
       res.json(Response)
   }).catch((err)=>{
       console.log(err)
       res.send(err)
   })
})

module.exports = tax;
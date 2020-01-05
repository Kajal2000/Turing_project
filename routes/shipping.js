const express = require('express');
const shipping = express.Router();
const shippngDB  = require("../model/shippingDB")

// all data get
shipping.get('/shipping_regions', (req,res) => {
    var data = shippngDB.selectData1()
    data.then((Response)=>{
       res.json(Response)
   }).catch((err)=>{
       console.log(err)
       res.send(err)
   })
})

shipping.get('/shipping_regions/:shipping_region_id', (req,res) => {
    var shipping_region_ID = req.params.shipping_region_id
    var data = shippngDB.get_selectData(shipping_region_ID)
    data.then((Response)=>{
       res.json(Response)
   }).catch((err)=>{
       console.log(err)
       res.send(err)
   })
});
module.exports = shipping;
const express = require('express');
const attributes = express.Router();
const attributesDB  = require("../model/attributesDB")

attributes.get("/get_attribute",(req,res)=>{
    var data = attributesDB.selectData()
    data.then((data)=>{
       res.json(data)
   })
})

attributes.get("/attributes/:attribute_id",(req,res)=>{
    var attribute_ID = req.params.attribute_id
    var data = attributesDB.selectby_id(attribute_ID)
    data.then((Response)=>{
        res.json(Response)
    })
});

attributes.get("/attributes_values/:attribute_id",(req,res)=>{
    let attribute_ID =  req.params.attribute_id
    var data = attributesDB.selectData_1(attribute_ID)
    data.then((connect)=>{
        res.json(connect)
    })
})

attributes.get("/attributes_inProduct/:product_id",(req,res)=>{
    let product_ID =  req.params.product_id
    var data = attributesDB.select_Data(product_ID)
    data.then((connect)=>{
        res.json(connect)
    })
})

module.exports = attributes;

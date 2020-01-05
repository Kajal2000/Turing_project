const express = require('express');
const categories = express.Router();
const categoriesDB  = require("../model/categoriesDB")

// get all data from categories

categories.get("/categories",(req,res)=>{
    var data = categoriesDB.selectData()
    data.then((Response)=>{
       res.json(Response)
   }).catch((err)=>{
       console.log(err)
       res.send(err)
   })
})

// get id waise data

categories.get("/categories/:id",(req,res)=>{
    var id = req.params.id
    var data = categoriesDB.selectby_id(id)
    data.then((Response)=>{
        res.json(Response)
    }).catch((err)=>{
        console.log(err)
        res.send(err)
    })
});

categories.get("/categorie/:product_id",(req,res) =>{
    var product_id = req.params.product_id
    var data = categoriesDB.join_productTable(product_id)
    data.then((data)=>{
        res.send(data)
     }).catch((err)=>{
        res.send(err)
     })
})

categories.get("/categories/inDepartment/:department_id",(req,res) =>{
    var department_id = req.params.department_id
    var data = categoriesDB.selectby_id(department_id)
    data.then((Response)=>{
        res.json(Response)
    }).catch((err)=>{
        console.log(err)
        res.send(err)
    })
});

module.exports = categories;
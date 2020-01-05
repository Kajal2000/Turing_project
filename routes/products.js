const express = require('express');
const product = express.Router();
const productDB  = require("../model/productsDB")

product.get("/get_product",(req,res)=>{
    var data = productDB.selectData()
    data.then((data)=>{
       res.json(data)
   })
})

// product.get("/products_search/:name_search",(req,res)=>{
//     let name_search = res.params.name_search
//     var data = productsDB.selectby_id(name_search)
//     data.then((Response)=>{
//         res.json(Response)
//     })
// })

product.get('/product/:product_id', (req,res) => {
    var product_ID = req.params.product_id
    var data = productDB.selectproduct_id(product_ID)
    data.then((Response)=>{
       res.json(Response)
   }).catch((err)=>{
       console.log(err)
       res.send(err)
   })
});

product.get("/products_inCategory/:category_id",(req,res)=>{
    let category_id = req.params.category_id
    var data = productDB.select_category_id(category_id)
    data.then((Response)=>{
       res.json(Response)
   }).catch((err)=>{
       console.log(err)
       res.send(err)
   })
});

product.get("/products_inDepartment/:department_id",(req,res)=>{
    let department_ID = req.params.department_id
    var data = productDB.select_department_id(department_ID)
    data.then((Response)=>{
       res.json(Response)
   }).catch((err)=>{
       console.log(err)
       res.send(err)
   })
});
    
product.get("/products/:product_id",(req,res)=>{
    let product_ID = req.params.product_id
    var data = productDB.select_pro_id(product_ID)
    data.then((Response)=>{
       res.json(Response)
   }).catch((err)=>{
       console.log(err)
       res.send(err)
   })
});

product.get("/products_l/:product_id",(req,res) =>{
    let product_ID = req.params.product_id
    var data = productDB.select_pro_id_l(product_ID)
    data.then((Response)=>{
       res.json(Response)
   }).catch((err)=>{
       console.log(err)
       res.send(err)
   })
});

module.exports = product;
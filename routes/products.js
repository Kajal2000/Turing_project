const express = require('express');
const product = express.Router();
const productDB  = require("../model/productsDB")

product.get("/get_product",(req,res)=>{
    var data = productDB.selectData()
    data.then((data)=>{
       res.json(data)
   })
})

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

product.get('/products/:search_value', (req,res) => {
    var search_value = req.params.search_value
    var data = productsDB.select_products_search(search_value)
    data.then((Response)=>{
       res.json(Response)
    }).catch((err)=>{
       console.log(err)
       res.send(err)
    })
});

product.get("/reviews_get",(req,res)=>{
    var data = productDB.selectDatareviews()
    data.then((data)=>{
       res.json(data)
   })
})

product.post("/products_reviews",(req,res) => {
    // const data = JSON.parse(Object.keys(req.body)[0])
    let reviews = {
       "review_id" : req.body.review_id,
       "customer_id": req.body.customer_id,
       "product_id" : req.body.product_id,
       "review": req.body.review,
       "rating": req.body.rating,
       "created_on": new Date()
    }
    productDB.insertdata_review(reviews)
    .then((data)=>{
       return res.json(data)
    }).catch((err)=>{
       console.log(err);
    })
});

module.exports = product;
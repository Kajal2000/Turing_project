const express = require('express');
const departments = express.Router();
const departmentDb  = require("../model/departmentDB")

departments.get('/department', (req,res) => {
    var data = departmentDb.selectData()
    data.then((Response)=>{
       res.json(Response)
   }).catch((err)=>{
       console.log(err)
       res.send(err)
   })
})

// by id
departments.get('/departments/:id', (req,res) => {
    var id = req.params.id
    var data = departmentDb.selectby_id(id)
    data.then((Response)=>{
       res.json(Response)
   }).catch((err)=>{
       console.log(err)
       res.send(err)
   })
});


module.exports = departments
const express = require('express');
const app = express();

const deparments = require("./routes/department")
app.use("/deparments",deparments)

const categories = require("./routes/categories")
app.use("/categories",categories)

const attribute = require("./routes/attributes")
app.use("/attributes",attribute)

const shipping = require("./routes/shipping")
app.use("/shipping_get",shipping)

const tax1 = require("./routes/tax")
app.use("/tax",tax1)

const shoppingcart = require("./routes/shoppingcard")
app.use("/shopping_cart",shoppingcart)

const products = require('./routes/products')
app.use("/products",products)

app.listen(5001, () => {
    console.log('5001 listen')
})



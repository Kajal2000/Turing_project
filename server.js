const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(express.json());

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(bodyParser.raw());
// app.use(express.urlencoded({ extended: true }));

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
app.use("/product",products)

const customerData = require("./routes/customer")
app.use("/customers",customerData)

const orderData = require("./routes/orders")
app.use("/orders",orderData)

app.listen(4444, () => {
    console.log('4444 listen')
})



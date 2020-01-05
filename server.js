const express = require('express');
const app = express();

const deparments = require("./routes/department")
app.use("/deparments",deparments)

const categories = require("./routes/categories")
app.use("/categories",categories)

const attribute = require("./routes/attributes")
app.use("/attributes",attribute)

const product = require("./routes/products")
app.use("/products",product)

app.listen(5000, () => {
    console.log('5000 listen')
})
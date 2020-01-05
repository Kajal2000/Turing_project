const express = require('express');
const app = express();

const deparments = require("./routes/department")
app.use("/deparments",deparments)

app.listen(5000, () => {
    console.log('5000 listen')
})
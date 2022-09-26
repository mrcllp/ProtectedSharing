const express = require("exrpess")
const app = express()

app.get('/', (req, res) => {
    res.render("index")
})
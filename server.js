const multer = require("multer")

const express = require("express")
const req = require("express/lib/request")
const app = express()

const upload = multer({ dest: "uploads"})

app.set("view engine", "ejs")

app.get('/', (req, res) => {
    res.render("index")
})

// listen to post request from form
app.post("/upload", upload.single("file"), (req, res) => {
    res.send('hi')
})

app.listen(5000)
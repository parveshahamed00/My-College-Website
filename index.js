const express = require('express')
const bodyParser = require("body-parser"); // to handle post requests

const app = express()
const port = 3000
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public")); // public folder for css and images
app.set("view engine", "ejs"); // seting the engine for ejs

app.use('/',require("./routes/home"))
app.use('/',require("./routes/admission"))
app.use('/',require("./routes/admission-post"))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
const express = require('express')
const app = express()
const port = 3000
app.use(express.static("public")); // public folder for css and images

app.use('/',require("./routes/home"))
app.use('/',require("./routes/admission"))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
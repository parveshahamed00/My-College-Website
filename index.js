const express = require('express')
const app = express()
const port = 3000
app.use('/',require("./routes/home"))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
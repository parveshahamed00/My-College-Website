const express = require("express");
const bodyParser = require("body-parser"); // to handle post requests
const mongoose = require("mongoose");

const app = express();
require("dotenv").config(); // for environment variables
const port = process.env.PORT;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public")); // public folder for css and images
app.set("view engine", "ejs"); // seting the engine for ejs

// mongoDB connection
const uri = process.env.mongoDB;
async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Scuessfully Connected to database");
  } catch (error) {
    console.log(error);
  }
}
connect();
app.use("/", require("./routes/home"));
app.use("/", require("./routes/admission"));
app.use("/", require("./routes/admission-post"));
app.use("/", require("./routes/attendance"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

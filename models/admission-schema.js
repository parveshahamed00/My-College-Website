const mongoose = require("mongoose");
const admissionSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  gender: String,
  dob: String,
  hsc_percentage: Number,
  major: String,
  domain: String,
  address: String,
});

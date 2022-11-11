const express = require("express");
const router = express.Router();
const admission = require("../controllers/admission-post");
router.post("/admission", admission.admissionPost);
module.exports = router
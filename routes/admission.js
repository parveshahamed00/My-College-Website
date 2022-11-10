const express = require("express");
const router = express.Router();
const admission = require("../controllers/admission");
router.get("/admission", admission.admission);
module.exports = router;

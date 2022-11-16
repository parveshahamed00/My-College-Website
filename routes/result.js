const express = require("express");
const router = express.Router();
const result = require("../controllers/result");
router.get("/result", result.result);
module.exports = router;

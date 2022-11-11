const express = require("express");
const router = express.Router();
const attendance = require("../controllers/attendance");
router.get("/attendance", attendance.attendance);
module.exports = router;

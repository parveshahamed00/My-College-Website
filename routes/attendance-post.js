const express = require("express");
const router = express.Router();
const attendance = require("../controllers/attendance-post");
router.post("/attendance", attendance.attendance);
module.exports = router;

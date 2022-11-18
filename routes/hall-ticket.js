const express = require("express");
const router = express.Router();
const hallTicket = require("../controllers/hall-ticket");
router.get("/hall-ticket", hallTicket.hallTicket);
module.exports = router;

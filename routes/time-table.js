const express=require('express')
const router=express.Router()
const timetable=require("../controllers/time-table")
router.get("/time-table",timetable.timetable)
module.exports=router
const express = require('express')
const router = express.Router()

const {createStudent,getStudent,getStudentById,deleteStudent,updateStudentbyPatch} = require('../controller/student')
router.get('/students', getStudent)
router.get('/students/:id', getStudentById)

router.post("/students",createStudent)
router.patch("/students/:id",updateStudentbyPatch)
router.delete("/students/:id",deleteStudent)
module.exports = router
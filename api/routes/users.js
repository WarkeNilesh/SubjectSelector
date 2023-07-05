import express from "express";
import {
  
  getUser,
  updateUser,
  getStudents,
  getStudentCount,
  getStudent,
} from "../controllers/user.js";


const router = express.Router();


// Get students
router.get("/getstudents", getStudents)
router.get("/getstudent/:username", getStudent)
//update
router.put("/update", updateUser)
//Get student count
router.get("/getStudentCount", getStudentCount)


//GET
router.get("/:id",  getUser)





export default router;

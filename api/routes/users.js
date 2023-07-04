import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
  getStudents,
  getStudentCount,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();


// Get students
router.get("/getstudents", getStudents)


//Get student count
router.get("/getStudentCount", getStudentCount)
//UPDATE
router.put("/:id",  updateUser)

//DELETE
router.delete("/delete/:username",  deleteUser)

//GET
router.get("/:id",  getUser)




//GET ALL
router.get("/",  getUsers);
export default router;

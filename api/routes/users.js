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
router.get("/getstudents",verifyAdmin, getStudents)


//Get student count
router.get("/getStudentCount",verifyAdmin, getStudentCount)
//UPDATE
router.put("/:id", verifyUser, updateUser)

//DELETE
router.delete("/:id", verifyUser, deleteUser)

//GET
router.get("/:id", verifyUser, getUser)




//GET ALL
router.get("/", verifyAdmin, getUsers);
export default router;

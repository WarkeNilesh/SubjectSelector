import express from "express";
import {createUser, updateUser,getStudentCount, deleteUser, getUser, getStudents} from "../controllers/User.js";
const router = express.Router();

// create
router.post("/create", createUser);

//read
router.get("/getuser", getUser);
router.get("/getstudents", getStudents);
router.get("/getStudentCount", getStudentCount);

//update
router.put("/update", updateUser);

//delete
router.delete("/delete", deleteUser);


export default router
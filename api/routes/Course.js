import express from "express";
import { addCourse, createCourse, deleteCourse, getCourse, getCourses,getCourseCount, removeCourse, updateCourse } from "../controllers/Course.js";
import {verifyAdmin, verifyUser} from "../utils/verifyToken.js";

const router = express.Router();

// create
router.post("/create", verifyAdmin, createCourse);
router.post("/addcourse", verifyUser, addCourse);

//read
router.get("/getcourse", getCourse);
router.get("/getcourses", getCourses);
router.get("/getCoursecount", getCourseCount);

//update
router.put("/update", verifyAdmin, updateCourse);
//delete
router.delete("/delete", verifyAdmin, deleteCourse);
router.delete("/removecourse", verifyUser, removeCourse);


export default router
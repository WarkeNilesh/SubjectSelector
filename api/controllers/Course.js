import CourseModel from "../models/Course.js";
import UserModel from "../models/User.js";

export const createCourse = async (req, res, next) => {
    const subjectData = req.body;
    console.log("I was called for creating course");
    return await CourseModel.findOne({ course_code: subjectData["course_code"] })
        .then(async (result) => {
            if (result == null) {
                const obj = new CourseModel(subjectData);
                await obj.save();
                return await res.send(subjectData);
            }
            return res.send("Course Already Exists");
        })
        .catch((err) => {
           next(err);
        });
}

// Syntax
export const getCourse = async (req, res,next) => {
    try {
        const course = await CourseModel.findOne(req.body);
        if(course == null) return res.send("Invalid Course")
        return res.status(200).json(course);
    } catch (err) {
       next(err);
    }
}


export const getCourses = async (req, res,next) => {

    try {
        const users = await CourseModel.find();
        res.status(200).json(users);
    } catch (err) {
        next(err);
    }
}

export const getCourseCount = async (req, res,next) => {
    try {
        const courseCount = await CourseModel.countDocuments();
        res.status(200).json({ count: courseCount });
    } catch (err) {
       next(err);
    }
}


export const updateCourse = async (req, res, next) => {
    const subjectData = req.body;
    return await CourseModel.findOneAndUpdate({ course_code: subjectData['course_code'] }, subjectData)
        .then(async (result) => {
            return await res.send(result == null ? "Invalid Course" : subjectData);
        })
        .catch((err) => {
           next(err);
        });
}

// Add Course for student
export const addCourse = async (req, res, next) =>{
    UserModel.findOne({"username":req.user['username']})
    .then(async (user)=>{
        CourseModel.findOne({"course_code": req.body['course_code']})
        .then(async (course)=>{
            if(course == null) return res.send("Invalid Course Selected");
            if(user.courses.find(obj => obj.course_code === course.course_code) != undefined){
                return await res.send("Already Enrolled");
            }
            user.courses.push(course);
            await user.save();
            return await res.send("Course added sucessfully");
        })
    })
    .catch((err) => {
       next(err);
    });
    
}

// Remove Course for student
export const removeCourse = async (req, res, next) =>{
    UserModel.findOne({"username":req.user['username']})
    .then(async (user)=>{
        CourseModel.findOne({"course_code": req.body['course_code']})
        .then(async (course)=>{
            if(course == null) return res.send("Invalid Course Selected");
            user.courses = user.courses.filter(ele => ele.course_code !== course.course_code);
            await user.save();
            return await res.send("Course Removed sucessfully");
        })
    })
    .catch((err) => {
       next(err);
    });
}

export const deleteCourse = async (req, res, next) => {
    const subjectData = req.body;
    return await CourseModel.findOneAndDelete({ course_code: subjectData['course_code'] })
        .then(async (result) => {
            return await res.send(result == null ? "Invalid Course" : "Courses Deleted Sucessfully");
        })
        .catch((err) => {
            next(err);
        });
}


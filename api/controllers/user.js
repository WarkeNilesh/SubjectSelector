import User from "../models/User.js";




export const updateUser = async (req,res)=>{
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(400).json(err);
  }
}
export const deleteUser = async (req,res)=>{
  console.log("dbsfhanj");
  try {
    await User.findOneAndDelete({"username": req.params.username});
    res.status(200).json("User has been deleted.");
  } catch (err) {
    res.status(400).json(err);
  }
}
export const getUser = async (req,res)=>{
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
}
export const getUsers = async (req,res)=>{
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json(err);
  }
}

export const getStudents = async (req, res) => {

  try {
    const users = await User.find({ isAdmin: false });
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json(err);
  }
};



export const getStudentCount = async (req, res,next) => {
  try {
      const studentsCount = await User.countDocuments({ isAdmin: false });
      res.status(200).json({ count: studentsCount });
  } catch (err) {
      res.status(500).json(err);
  }
}

import User from "../models/User.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const register = async (req, res) => {
    const user = req.body;
    try {
        const saltVar = bcrypt.genSaltSync(7);
        user.password = bcrypt.hashSync(user.password, saltVar);
        const newUser = new User(user);
        await newUser.save()
        res.status(200).send("user has been created.")
    } catch (err) {

        res.status(500).send("user not created");
    }
} 

export const login = async (req, res) => {
    try {
        const user =await User.findOne({"username": req.body['username']});
        if(!user) return  res.status(500).send("user doesn't match");
        
        const isPasswordCorrect = await bcrypt.compare(req.body.password,user.password)
        if(!isPasswordCorrect)  return res.status(500).send("password didn't match");
        
        const token = jwt.sign({"username":user.username, "isadmin": user.isadmin},process.env.JWT);  //secret key
        // to prevent sending password and is admin to user
        const {password, ...otherDetails} = user._doc;
        res.cookie("access_token",token,{
            httpOnly: true,
        }).status(200).json({...otherDetails});
       
    } catch (err) {

        res.status(500).send("not working");
    }
} 
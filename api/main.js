import express from "express";
const app = express()
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";

import mongoose from "mongoose";
import userRoute from "./routes/User.js";
import courseRoute from "./routes/Course.js"
import authRoute from "./routes/auth.js";

import cors from "cors";


const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connected to mongoDB");
    } catch (error) {
        console.log(error);
    }

};


//middlewares
app.use(cors());
app.use(express.json())
app.use(cookieParser())



app.use("/auth", authRoute);
app.use("/course", courseRoute);
app.use("/user", userRoute);

app.listen(4000, () => {
    connect()
    console.log("connected to backend");
})


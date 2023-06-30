import mongoose from "mongoose";
import Course from "./Course.js";

const UserSchema = new mongoose.Schema({
    "name" : {
        type : String,
        required: true
    },
    "username" : {
        type : String,
        required: true,
        unique: true
    },
    "isadmin" : {
        type : Boolean,
        required : false,
        default: false
    },
    "email": {
        type : String,
        required: false
    },
    "courses" : {
        type : [Object],
        required: false,
        default : []
    },
    "mobile" : {
        type : Number,
        required: false
    },
    "password" : {
        type : String,
        required: true
    },
})


export default mongoose.model('users', UserSchema);

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    profilePic: {
        type: String,
    },
    token: {
        type: String,
        select: false
    },
    role:{
        type:String,
        enum:["user" , "admin" , "shopOwner"],
        default:"user"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})
export const User = mongoose.model('User', userSchema);
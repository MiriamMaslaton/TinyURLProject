import mongoose from "mongoose"

const UserSchema=mongoose.Schema({
    id:Number,
    name:String,
    email:String,
    password:String,
    links:Array
})

export default mongoose.model("users",UserSchema)
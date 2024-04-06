import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
    fullName : {
        type : String,
        required : true
    },
    username : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
        minlength : true
    },
    gender : {
        type : String,
        required : true,
        enum : ["male","female"]
    },
    profilepic : {
        type : String,
        default : "",
    },
},{timestamps :true})

const user = mongoose.model("User", userSchema);
// module.exports  = user
export default user
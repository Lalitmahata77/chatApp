import express from "express"
import dotenv from "dotenv"
 import mongoose from "mongoose"
import cookieParser from "cookie-parser"
import authRoutes from "./routes/auth.route.js"
import userRoute from "./routes/user.route.js"
import messageRoute from "./routes/message.route.js"
import main from "./db/connectToMongo.js"
dotenv.config()
const app = express()
main().then(()=>{
    console.log("DB connected");
}).catch((err)=>{
    console.log(err, "errror");
})
app.use(express.json())
const PORT = process.env.PORT || 5000
// app.get("/", (req,res)=>{
//     res.send("hello")
// // })
app.use(cookieParser());
app.use("/api/auth",authRoutes)
app.use("/api/messages", messageRoute)
app.use("/api/users", userRoute)
app.listen(PORT, ()=>{
    console.log("server is listening on port 5000");
})
import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";

import connectToMongoDB from "./db/connectToMongoDB.js";

import authRoutes from './routes/authRoutes.js'
import messagesRoutes from "./routes/messageRoutes.js";
import userRoutes from "./routes/userRoutes.js";


const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();
app.use(express.json());
// app.get("/", (req, res) => {
//   // root Route http://localhost:5000/
//   res.send("Hello world!!");
// });
app.use(cookieParser());

app.use("/api/auth",authRoutes)
app.use("/api/messages",messagesRoutes)
app.use("/api/user",userRoutes)

app.listen(PORT, () => {
    connectToMongoDB()
  console.log("server Running on port ", PORT);
});

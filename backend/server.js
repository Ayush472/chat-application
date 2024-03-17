import dotenv from "dotenv";
import express from "express";
import authRoutes from './routes/authRoutes.js'
import connectToMongoDB from "./db/connectToMongoDB.js";
const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();
app.use(express.json());
// app.get("/", (req, res) => {
//   // root Route http://localhost:5000/
//   res.send("Hello world!!");
// });

app.use("/api/auth",authRoutes)

app.listen(PORT, () => {
    connectToMongoDB()
  console.log("server Running on port ", PORT);
});

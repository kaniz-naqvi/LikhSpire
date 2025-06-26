import express from "express";
import morgan from "morgan";
import cors from "cors";
import db from "./config/db.js";
import useBlogs from "./routes/useBlogs.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
db.connect();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use("/api", useBlogs);
const port = 3000;

app.get("/", (req, res) => {
  res.json("Success!");
});
app.listen(port, () => {
  console.log(`server is listning on port ${port}`);
});

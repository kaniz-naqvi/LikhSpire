import express from "express";
import morgan from "morgan";
import cors from "cors";
import db from "./config/db.js";
import useBlogs from "./routes/useBlogs.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/api", useBlogs);

app.get("/", (req, res) => {
  res.json("Success!");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

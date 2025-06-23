import express from "express";
import morgan from "morgan";
import db from "./config/db.js";

const app = express();
db.connect();
app.use(express.json());
app.use(morgan("dev"));
const port = 3000;

app.listen(port, () => {
  console.log(`server is listning on port ${port}`);
});

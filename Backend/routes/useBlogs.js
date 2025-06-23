import { Router } from "express";
import db from "../config/db.js";
const router = Router();

router.get("/", async (req, res) => {
  const blogList = await db.query("SELECT * FROM bloglist");
  res.json(blogList.rows);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const blog = await db.query("SELECT * from bloglist WHERE id=$1", [id]);
    if (blog.rows.length === 0) {
      return res.status(404).json({ message: "Blog not found with this ID" });
    }
    res.status(200).json(blog.rows[0]);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

router.post("/add-blog", async (req, res) => {
  const blog = req.body;
  const { title, body } = blog;
  try {
    const addBlog = await db.query(
      "INSERT INTO bloglist(title, body) VALUES($1, $2)",
      [title, body]
    );
    res.status(201).json({ message: "Blog created!" });
  } catch (error) {
    console.log(error);
    res.status(error.status).json({ message: error.message });
  }
});

router.patch("/update/:id", async (req, res) => {
  const blog = req.body;
  const { title, body } = blog;
  const id = req.params.id;
  try {
    const updateBlog = await db.query(
      "UPDATE bloglist SET title=$1, body=$2 WHERE id=$3",
      [title, body, id]
    );
    res.json({ message: "Blog updated!" });
  } catch (error) {
    console.log(error);
    res.status(error.status).json({ message: error.message });
  }
});

router.delete("/delete-blog/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const deleteBlog = await db.query("DELETE from bloglist WHERE id=$1", [id]);
    res.status(200).json({ message: "Blog Deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

export default router;

import { Router } from "express";
import db from "../config/db.js";
import queries from "../controllers/loadQueries.js";
const router = Router();

router.get("/", async (req, res) => {
  const blogList = await db.query(queries.SELECT_ALL_BLOGS);
  res.json(blogList.rows);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const blog = await db.query(queries.SELECT_BLOG_BY_ID, [id]);
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
    const addBlog = await db.query(queries.ADD_BLOG, [title, body]);
    console.log("addBlog", addBlog);
    res
      .status(201)
      .json({ message: "Blog created!", title: title, body: body });
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
    const updateBlog = await db.query(queries.UPDATE_BLOG, [title, body, id]);
    res.json({ id: id, message: "Blog updated!", title: title, body: body });
  } catch (error) {
    console.log(error);
    res.status(error.status).json({ message: error.message });
  }
});

router.delete("/delete-blog/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const deleteBlog = await db.query(queries.DELETE_BLOG, [id]);
    res.status(200).json({ message: "Blog Deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

export default router;

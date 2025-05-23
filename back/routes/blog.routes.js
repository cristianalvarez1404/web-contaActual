import express from "express";
import {
  createArticleController,
  deleteArticleController,
  findArticleByIdController,
  findArticlesController,
  updateArticleController,
} from "../controllers/blog.controller.js";

const router = express.Router();

//GET ALL ARTICLES
router.get("/", findArticlesController);

//GET ARTICLE BY ID
router.get("/:id", findArticleByIdController);

//CREATE ARTICLE
router.post("/", createArticleController);

//UPDATE ARTICLE
router.put("/:id", updateArticleController);

//DELETE ARTICLE
router.delete("/:id", deleteArticleController);

export { router };

import express from "express";
import {
  createArticleController,
  deleteArticleController,
  findArticleByIdController,
  findArticlesController,
  updateArticleController,
} from "../controllers/blog.controller.js";
import { upload } from "../utilities/uploadImages.js";

const router = express.Router();

//GET ALL ARTICLES
router.get("/", findArticlesController);

//GET ARTICLE BY ID
router.get("/:id", findArticleByIdController);

//CREATE ARTICLE
router.post("/", upload.single("image"), createArticleController);

//UPDATE ARTICLE
router.put("/:id", upload.single("image"), updateArticleController);

//DELETE ARTICLE
router.delete("/:id", deleteArticleController);

export { router };

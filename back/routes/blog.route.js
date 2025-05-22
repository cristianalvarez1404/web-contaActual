import express from "express";
import { blogController } from "../controllers.js/blog.controller.js";

const router = express.Router();

router.get("/", blogController);

export { router };

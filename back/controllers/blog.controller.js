import {
  createArticleDTO,
  updateArticleDTO,
  validateIdDTO,
} from "../dto/blog.dto.js";
import {
  createArticleService,
  deleteArticleService,
  findArticleByIdService,
  findArticlesService,
  updateArticleService,
} from "../services/blog.service.js";
import { HTTP_STATUS } from "../utilities/constants.js";

const createArticleController = async (req, res) => {
  try {
    const infoDTO = createArticleDTO(req.body);
    const createArticle = await createArticleService(infoDTO);

    return res.status(HTTP_STATUS.CREATED).json(createArticle);
  } catch (err) {
    return res.status(HTTP_STATUS.BAD_REQUEST).json({ error: err.message });
  }
};

const updateArticleController = async (req, res) => {
  try {
    const data = { id: req.params.id, ...req.body };
    const infoDTO = updateArticleDTO(data);
    const updateArticle = await updateArticleService(infoDTO);

    if (!updateArticle) {
      return res
        .status(HTTP_STATUS.NOT_FOUND)
        .json({ error: "Article not found" });
    }

    return res.status(HTTP_STATUS.OK).json(updateArticle);
  } catch (err) {
    return res.status(HTTP_STATUS.BAD_REQUEST).json({ error: err.message });
  }
};
const deleteArticleController = async (req, res) => {
  try {
    const idDTO = validateIdDTO(req.params.id);
    const deleteArticle = await deleteArticleService(idDTO);

    if (!deleteArticle) {
      return res
        .status(HTTP_STATUS.NOT_FOUND)
        .json({ error: "Article not found" });
    }

    return res.status(HTTP_STATUS.OK).json(deleteArticle);
  } catch (err) {
    return res.status(HTTP_STATUS.BAD_REQUEST).json({ error: err.message });
  }
};
const findArticlesController = async (req, res) => {
  try {
    const articles = await findArticlesService();
    return res.status(HTTP_STATUS.OK).json(articles);
  } catch (err) {
    return res.status(HTTP_STATUS.BAD_REQUEST).json({ error: err.message });
  }
};

const findArticleByIdController = async (req, res) => {
  try {
    const idDTO = validateIdDTO(req.params.id);
    const article = await findArticleByIdService(idDTO);

    if (!article) {
      return res
        .status(HTTP_STATUS.NOT_FOUND)
        .json({ error: "Article not found" });
    }

    return res.status(HTTP_STATUS.OK).json(article);
  } catch (err) {
    return res.status(HTTP_STATUS.BAD_REQUEST).json({ error: err.message });
  }
};

export {
  createArticleController,
  updateArticleController,
  deleteArticleController,
  findArticleByIdController,
  findArticlesController,
};

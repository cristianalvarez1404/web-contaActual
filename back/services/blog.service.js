import {
  createArticleDAO,
  deleteArticleDAO,
  findArticleByIdDAO,
  findArticlesDAO,
  updateArticleDAO,
} from "../dao/blog.dao.js";

const createArticleService = async (bodyDTO) => {
  try {
    const { category, ...infoArticle } = bodyDTO;
    const info = {
      category: Number(category),
      ...infoArticle,
    };

    const newArticle = await createArticleDAO(info);
    return newArticle;
  } catch (error) {
    throw new Error(error);
  }
};

const findArticleByIdService = async (idDTO) => {
  try {
    const article = await findArticleByIdDAO(idDTO);
    return article;
  } catch (error) {
    throw new Error(error);
  }
};

const findArticlesService = async () => {
  try {
    const articles = await findArticlesDAO();
    return articles;
  } catch (error) {
    throw new Error(error);
  }
};

const updateArticleService = async (bodyDTO) => {
  try {
    const { category, ...infoArticle } = bodyDTO;
    const info = {
      category: Number(category),
      ...infoArticle,
    };

    const articleUpdated = await updateArticleDAO(info);
    return articleUpdated;
  } catch (error) {
    throw new Error(error);
  }
};

const deleteArticleService = async (idDTO) => {
  try {
    const articleDeleted = await deleteArticleDAO(idDTO);
    return articleDeleted;
  } catch (error) {
    throw new Error(error);
  }
};

export {
  createArticleService,
  findArticleByIdService,
  findArticlesService,
  updateArticleService,
  deleteArticleService,
};

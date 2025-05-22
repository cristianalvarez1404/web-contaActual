import { findBlogById } from "../dao/blog.dao.js";

const fingBlogService = async (blogId) => {
  const blog = await findBlogById(blogId);
  return blog;
};

export { fingBlogService };

import { findBlogByIdDTO } from "../dto/blog.dto.js";
import { fingBlogService } from "../services/blog.service.js";

const blogController = async (req, res) => {
  try {
    const blogDTO = findBlogByIdDTO(1);
    const findBlog = await fingBlogService(blogDTO);
    return res.status(200).json(findBlog);
  } catch (err) {
    console.log(err);
  }
};

export { blogController };

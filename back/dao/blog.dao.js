import { db } from "../config/dbConnection.js";

const createBlogDAO = async (blog) => {
  const { id, title, description, category, date } = blog;

  try {
    const query = await db.query(
      `
      INSERT INTO blogs (title,description,category,date) VALUES
      ($1,$2,$3,$4) RETURNING *  
    `,
      [title, description, category, date]
    );

    return query.rows[0];
  } catch (err) {
    console.error(`Error creating blog`, err);
  }
};

const findBlogById = async (id) => {
  try {
    const result = await db.query(`SELECT * FROM categories`);
    console.log(result);
    return result.rows;
  } catch (err) {}
};

export { createBlogDAO, findBlogById };

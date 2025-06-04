import { db } from "../config/dbConnection.js";

const createArticleDAO = async (body) => {
  const { title, description, category, date, file } = body;

  try {
    const articleQuery = await db.query(
      `
      INSERT INTO articles (title, description, category_id, date)
      VALUES ($1, $2, $3, $4)
      RETURNING *
      `,
      [title, description, category, date]
    );

    const article = articleQuery.rows[0];
    let image = null;

    if (file) {
      const imageQuery = await db.query(
        `
        INSERT INTO images (image, article_id)
        VALUES ($1, $2)
        RETURNING *
        `,
        [file, article.id]
      );
      image = imageQuery.rows[0];
    }

    return [
      {
        article,
        image,
      },
    ];
  } catch (err) {
    throw new Error(`Error creating article: ${err}`);
  }
};

const findArticleByIdDAO = async (id) => {
  try {
    const article = await db.query(
      ` SELECT 
        a.id,
        a.title,
        a.description,
        a.date,
        c.category,
        array_agg(i.image) AS images
      FROM articles AS a
      LEFT JOIN categories AS c
      ON a.category_id = c.id
      LEFT JOIN images AS i
      ON a.id = i.article_id
      WHERE a.id = ($1)
	    GROUP BY a.id, a.title, a.description, a.date, c.category
      ORDER BY a.date DESC;
        `,
      [id]
    );
    return article.rows[0];
  } catch (err) {
    throw new Error(err);
  }
};

const findArticlesDAO = async () => {
  try {
    const articles = await db.query(`
      SELECT 
        a.id,
        a.title,
        a.description,
        a.date,
        c.category,
        array_agg(i.image) AS images
      FROM articles AS a
      LEFT JOIN categories AS c
      ON a.category_id = c.id
      LEFT JOIN images AS i
      ON a.id = i.article_id
	    GROUP BY a.id, a.title, a.description, a.date, c.category
      ORDER BY a.date DESC;
    `);

    return articles.rows;
  } catch (err) {
    throw new Error(err);
  }
};

const updateArticleDAO = async (body) => {
  const { id, category: category_id, file, ...fieldsObj } = body;
  const fieldToUpdate = { category_id, ...fieldsObj };

  if (!id) {
    throw new Error("ID is required");
  }

  const fields = [];
  const values = [];
  let index = 1;

  for (let key in fieldToUpdate) {
    if (fieldToUpdate[key] !== undefined) {
      fields.push(`${key}=$${index++}`);
      values.push(fieldToUpdate[key]);
    }
  }

  if (fields.length == 0) {
    throw new Error(`No fields to update`);
  }

  values.push(Number(id));
  const query = fields.join(", ");

  try {
    const updateArticle = await db.query(
      `
        UPDATE articles SET
          ${query}
        WHERE id = $${index}
        RETURNING *;
      `,
      values
    );

    const article = updateArticle.rows[0];
    let image = null;

    if (file) {
      const imageQuery = await db.query(
        `
        UPDATE images SET image = $1
        WHERE article_id = $2
        RETURNING *
        `,
        [file, article.id]
      );
      image = imageQuery.rows[0];
    }

    return {
      article,
      image,
    };
  } catch (err) {
    throw new Error(`Error updating article with id ${id} : ${err}`);
  }
};

const deleteArticleDAO = async (id) => {
  try {
    await db.query(`DELETE FROM articles WHERE id = $1`, [id]);

    return `Article with id ${id} has been deleted`;
  } catch (err) {
    throw new Error(err);
  }
};

export {
  createArticleDAO,
  findArticleByIdDAO,
  findArticlesDAO,
  updateArticleDAO,
  deleteArticleDAO,
};

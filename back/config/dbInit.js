import { db } from "./dbConnection.js";

export async function initDB() {
  try {
    await db.query(`
      CREATE TABLE IF NOT EXISTS categories(
        id SERIAL PRIMARY KEY,
        category VARCHAR(50) NOT NULL UNIQUE
      ); 
    `);

    await db.query(`
        CREATE TABLE IF NOT EXISTS articles(
          id SERIAL PRIMARY KEY,
          title VARCHAR(255) NOT NULL,
          description TEXT NOT NULL,
          date DATE NOT NULL,
          category_id INT NOT NULL,
          CONSTRAINT fk_articles_category
            FOREIGN KEY(category_id)
            REFERENCES categories(id)
            ON DELETE CASCADE
    `);

    await db.query(`
      CREATE TABLE IF NOT EXISTS images(
        id SERIAL PRIMARY KEY,
        image BYTEA,
        article_id INT NOT NULL,
        CONSTRAINT fk_images_article FOREIGN KEY (article_id)
          REFERENCES articles(id)
          ON DELETE CASCADE
      );
    `);

    await db.query(`
      CREATE TABLE IF NOT EXISTS comments(
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) NOT NULL,
        article_id INT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
         CONSTRAINT fk_comments
            FOREIGN KEY(article_id)
            REFERENCES articles(id)
            ON DELETE CASCADE
      );
    `);

    await db.query(`
      INSERT INTO categories (category) VALUES 
      ('tributaria'),
      ('nomina'),
      ('contabilidad'),
      ('otros'),
      ('liquidadores'),
      ('costos')
      ON CONFLICT (category) DO NOTHING;
    `);

    console.log("Tables has been created!");
  } catch (err) {
    console.error("❌ Error creating tables", err);
  }
}

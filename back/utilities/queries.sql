SELECT a.id,a.title,a.description,c.category  FROM articles AS a
INNER JOIN categories AS c
ON a.category_id = c.id;

SELECT * FROM categories;
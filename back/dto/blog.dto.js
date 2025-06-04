function createArticleDTO(body, file) {
  const { title, description, category, date } = body;

  if (!title || !description || !category || !date) {
    throw new Error(`Please check your fields that are empty`);
  }

  //const categories = ["tributaria", "nomina", "contabilidad", "otros"];

  // if (!categories.includes(category)) {
  //   throw new Error("Please check your category");
  // }
  // if (typeof category !== "number") {
  //   throw new Error(`Category id must be a number`);
  // }

  const article = { title, description, category, date };

  if (file) {
    article.file = file;
  }

  return article;
}

function validateIdDTO(id) {
  if (!id) throw new Error(`Id does not exist, please assign one`);
  return id;
}

function updateArticleDTO(body, file) {
  const { id, title, description, category, date } = body;

  if (!id) {
    throw new Error("Id is required to update the article");
  }

  // const categories = ["tributaria", "nomina", "contabilidad", "otros"];
  // if (category && !categories.includes(category)) {
  //   throw new Error("Invalid category");
  // }

  // if (category && typeof category !== "number") {
  //   return `Category id must be a number`;
  // }

  const article = { id, title, description, category, date };

  if (!title && !description && !date) {
    throw new Error("At least one field to update must be provided");
  }

  if (file) {
    article.file = file;
  }

  return article;
}

export { createArticleDTO, validateIdDTO, updateArticleDTO };

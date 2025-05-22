function createBlogDTO(body) {
  const { id, title, description, category, date } = body;

  if (!id || !title || !description || !category || !date) {
    throw new Error(`Please check your fields that are empty`);
  }

  const categories = ["tributaria", "nomina", "contabilidad", "otros"];

  if (!categories.includes(category)) {
    throw new Error("Please check your category");
  }

  return { id, title, description, category, data };
}

function findBlogByIdDTO(id) {
  // if (!id) throw new Error(`Id does not exist, please asign one`);

  return 1;
}

export { createBlogDTO, findBlogByIdDTO };

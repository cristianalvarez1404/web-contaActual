export const convertToBlob = (articles) => {
  const data = articles.map((art) => {
    if (
      art.images &&
      Array.isArray(art.images) &&
      art.images.length > 0 &&
      art.images[0] != null &&
      art.images[0].data
    ) {
      const buffer = art.images[0].data;
      const uint8Array = new Uint8Array(buffer);
      const blob = new Blob([uint8Array], { type: "image/jpeg" });
      const image = URL.createObjectURL(blob);
      return { ...art, image };
    }
    return { ...art, image: "" };
  });

  return data;
};

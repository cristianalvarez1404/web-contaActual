import React from "react";

const UploadImg = () => {
  return (
    <div>
      <form encType="multipart/form-data">
        <input type="file" name="image" />
        <button type="submit">Subir imagen</button>
      </form>
    </div>
  );
};

export default UploadImg;

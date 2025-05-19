import React from "react";

const NewPost = () => {
  return (
    <div className="min-h-[calc(100vh-100px)] w-[85%] m-auto">
      <h2 className="text-3xl mt-5 mb-5">Crear post</h2>
      <form action="">
        <div className="mb-5">
          <label
            htmlFor=""
            className="mr-5 p-2 bg-gray-200 mb-2 w-fit rounded-xl font-medium mt-2"
          >
            Titulo
          </label>
          <input
            type="text"
            placeholder="title"
            className="w-[90%] border border-gray-400 outline-none rounded border-gray-50 p-1"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor=""
            className="block p-2 bg-gray-200 mb-2 w-fit rounded-xl font-medium mt-2"
          >
            Descripción
          </label>
          <textarea
            className="w-full block border-2 border-gray-400 rounded-2xl outline-none p-5"
            rows={10}
            placeholder="Write your content"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor=""
            className="mr-5 p-2 bg-gray-200 mb-2 w-fit rounded-xl font-medium mt-2"
          >
            Imagen
          </label>
          <input
            type="file"
            accept="image/*"
            className="border bg-blue-950 text-white p-2 rounded-2xl text-sm cursor-pointer"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor=""
            className="mr-5 p-2 bg-gray-200 mb-2 w-fit rounded-xl font-medium mt-2"
          >
            Tipo
          </label>
          <select name="" id="">
            <option value="tributaria">Tributaria</option>
            <option value="nomina">Nómina</option>
            <option value="tributaria">Contabilidad</option>
            <option value="tributaria">Costos</option>
            <option value="tributaria">Otros</option>
          </select>
        </div>
        <div className="mb-5">
          <label
            htmlFor=""
            className="mt-8 p-2 bg-gray-200 mb-2 w-fit rounded-xl font-medium mt-2"
          >
            Fecha del post
          </label>
          <span>{new Date().toLocaleDateString()}</span>
        </div>
        <div className="mb-10 flex items-center justify-center">
          <input
            type="submit"
            value="Crear"
            className="w-[10rem] bg-transparent border-2 border-blue-900 cursor-pointer text-blue-900 px-5 py-2 rounded-2xl font-bold hover:bg-blue-900 hover:text-white hover:transition-colors"
          />
        </div>
      </form>
    </div>
  );
};

export default NewPost;

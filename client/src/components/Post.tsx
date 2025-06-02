import axios from "axios";
import React, { useState } from "react";

type infoObj = {
  info: {
    id: number;
    title: string;
    description: string;
    category: string;
    date: string;
    image?: string;
  };
  onDelete: (id: number | string) => void;
};

const Post = ({ info, onDelete }: infoObj) => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const datePost = new Date(info.date);
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/${info.id}`);
      onDelete(info.id);
    } catch (err: any) {
      setOpen(false);
      setError(err.message || "Request failed 😢");
      setTimeout(() => setError(""), 4000);
    }
  };

  return (
    <div className="relative mb-6 border-1 border-gray-400 p-5 rounded-2xl flex justify-around gap-2">
      <div className="flex-4">
        <a href={`/${info.category}/${info.id}`}>
          <h2 className="bg-gray-200 p-2 font-black text-xl rounded-3xl mb-2">
            {info.title}
          </h2>
        </a>
        <p className="mb-4">{info.description}</p>
        <a
          className="mr-2 text-[0.6rem] font-bold bg-blue-950 text-white p-2 rounded-2xl"
          href={`/${info.category}`}
        >
          Tipo: {info.category}
        </a>
        <small className="font-bold text-[0.6rem]">
          Fecha: {datePost.toLocaleDateString("es-CO")}
        </small>
        <a
          href={`/updatePost/${info.id}`}
          className="text-gray-400 ml-2 cursor-pointer hover:text-blue-500 transition-colors duration-300"
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </a>
        <span
          onClick={() => setOpen((prev) => !prev)}
          className="text-gray-400 ml-2 cursor-pointer hover:text-red-500 transition-colors duration-300"
        >
          <i className="fa-solid fa-trash"></i>
        </span>
        {open && (
          <div className="absolute z-50 w-max h-max left-[20%] border-2 rounded-3xl px-1 py-2 bg-gray-50 border-gray-400 text-[0.8rem]">
            ¿Desea eliminar el post?
            <div className="flex gap-4 items-center">
              <button
                className="cursor-pointer rounded-2xl p-1 bg-blue-900 text-white w-[100px] text-[0.8rem]"
                onClick={handleDelete}
              >
                Sí
              </button>
              <button
                className="cursor-pointer rounded-2xl p-1 bg-red-400 text-white w-[100px] text-[0.8rem]"
                onClick={() => setOpen(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        )}
        {error && (
          <div className="bg-red-500 text-white w-max p-1 text-sm rounded-2xl mt-5">
            {error}
          </div>
        )}
      </div>
      <div className="flex-1 ">
        <img
          src={info.image || "./tributaria/1.png"}
          alt=""
          className="rounded-2xl object-cover w-full h-[200px]"
        />
      </div>
    </div>
  );
};

export default Post;

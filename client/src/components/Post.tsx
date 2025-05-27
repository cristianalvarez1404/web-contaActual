import React from "react";

type infoObj = {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
  image?: string;
};

const Post = ({ info }: { info: infoObj }) => {
  const datePost = new Date(info.date);

  return (
    <div className="mb-6 border-1 border-gray-400 p-5 rounded-2xl flex justify-around gap-2 ">
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
      </div>
      <div className="flex-1 ">
        <img
          src={"./tributaria/1.png"}
          alt=""
          className="rounded-2xl object-cover w-full h-[200px]"
        />
      </div>
    </div>
  );
};

export default Post;

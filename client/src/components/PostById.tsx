import React from "react";
import { mainPosts } from "../utilities/mainPost.js";
import { useLocation } from "react-router-dom";

const PostById = () => {
  const location = useLocation();
  const typePage = location.pathname.split("/")[1];
  const postsId = location.pathname.split("/")[2];
  const post = mainPosts.find(
    (post: any) => post.type === typePage && post.id == postsId
  );

  const lastPosts = mainPosts.slice(-5);
  return (
    <div className="w-[95%] min-h-[calc(100vh-100px)] m-auto flex gap-5 relative">
      <div className="flex-4">
        <h2 className="mt-5 mb-5 font-extrabold text-2xl">{post.title}</h2>
        <div className="flex gap-5">
          <div className="flex-1">
            <img
              className="w-[400px] h-[400px] object-cover rounded-2xl"
              src={`../../${post.image}`}
              alt=""
            />
          </div>
          <div className="flex-2">
            <p className="mt-5 text-sm leading-loose text-justify">
              {post.description}
            </p>
            <small className="text-[10px] font-medium">
              Fecha de publicación: {post.date}
            </small>
          </div>
        </div>
        <section className="mt-10 p-6 bg-white rounded-xl shadow-md">
          <h2 className="text-xl font-bold mb-4">Comentarios</h2>
          <form className="mb-6">
            <textarea
              className="w-full border border-gray-300 rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-950"
              rows="3"
              placeholder="Escribe tu comentario..."
            ></textarea>
            <button
              type="submit"
              className="mt-2 px-4 py-2 bg-blue-950 text-white rounded-lg hover:bg-blue-600 transition cursor-pointer"
            >
              Comentar
            </button>
          </form>

          {/* Lista de comentarios estáticos */}
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg border border-gray-300">
              <p className="font-semibold text-sm text-gray-700">Jon Doe</p>
              <p className="text-gray-800 mt-1">¡Muy buen post!</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg border border-gray-300">
              <p className="font-semibold text-sm text-gray-700">Ana Doe</p>
              <p className="text-gray-800 mt-1">Gracias por compartir esto.</p>
            </div>
          </div>
        </section>
      </div>
      <div className="flex-1 bg-gray-100 p-2">
        <div className="sticky top-0 text-sm">
          {lastPosts.map((post: any) => (
            <a
              className="block mb-5 p-2 border border-gray-300 rounded-2xl"
              href={`/${post.type}/${post.id}`}
            >
              <div className="text-sm" key={post.id}>
                <h3 className="font-bold mb-2">{post.title}</h3>
                <p>{post.description.slice(0, 60) + "..."}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostById;

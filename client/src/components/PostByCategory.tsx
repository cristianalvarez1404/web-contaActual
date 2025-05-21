import React from "react";
import { mainPosts } from "../utilities/mainPost.js";
import Post from "../components/Post.tsx";
import { useLocation } from "react-router-dom";

const PostByCategory = () => {
  const location = useLocation();
  const typePage = location.pathname.slice(1);
  const posts = mainPosts.filter((post: any) => post.type === typePage);
  return (
    <>
      {posts.length ? (
        <div className="w-[85%] p-2 m-auto min-h-[calc(100vh-100px)]">
          <h2 className="mb-5 text-2xl font-bold capitalize">{typePage}</h2>
          {posts.map((post: any) => (
            <Post info={post} />
          ))}
        </div>
      ) : (
        <div className="h-[calc(100vh-10vh)] w-[85%] mt-5 m-auto ">
          <p className="text-[2rem] font-extrabold">
            Actualmente no hay posts de "{typePage}" 😢
          </p>
        </div>
      )}
    </>
  );
};

export default PostByCategory;

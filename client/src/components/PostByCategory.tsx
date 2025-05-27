import React, { useEffect, useState } from "react";
import { mainPosts } from "../utilities/mainPost.js";
import Post from "../components/Post.tsx";
import { useLocation } from "react-router-dom";
import axios from "axios";

const PostByCategory = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const location = useLocation();
  const typePage = location.pathname.slice(1);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const req = await axios.get("http://localhost:3000");
        const postsFiltered = req.data.filter(
          (post: any) => post.category === typePage
        );
        setPosts(postsFiltered);
      } catch (err: any) {
        setError(err.message || "Request failed 😢");
      }
    };
    getPosts();
  }, []);

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
            {error ? (
              <div className="w-[85%] p-2 m-auto min-h-[calc(100vh-100px)] text-2xl ">
                {error} 🤦‍♂️
              </div>
            ) : (
              <p>Actualmente no hay posts de "{typePage}"😢`</p>
            )}
          </p>
        </div>
      )}
    </>
  );
};

export default PostByCategory;

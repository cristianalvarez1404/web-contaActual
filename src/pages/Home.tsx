import React from "react";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import { mainPosts } from "../utilities/mainPost.js";
import Post from "../components/Post";

const Home = () => {
  return (
    <div className="">
      <div className="w-[85%] p-2 m-auto ">
        {/* Main posts */}
        <h2 className="mb-5 mt-5 text-2xl font-bold">Principales novedades</h2>
        {mainPosts.map((post: any) => (
          <Post key={post.id} info={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;

import { mainPosts } from "../utilities/mainPost.js";
import Post from "../components/Post";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getPosts = async () => {
      try {
        const req = await axios.get("http://localhost:3000");
        setPosts(req.data);
      } catch (err: any) {
        setError(err.message || "Request failed 😢");
      }
    };
    getPosts();
  }, []);

  return (
    <div className="">
      {error && (
        <div className="w-[85%] p-2 m-auto min-h-[calc(100vh-100px)] text-2xl ">
          {error} 🤦‍♂️
        </div>
      )}

      <div className="w-[85%] p-2 m-auto ">
        {/* Main posts */}
        <h2 className="mb-5 mt-5 text-2xl font-bold">Principales novedades</h2>
        {/* {mainPosts.map((post: any) => (
          <Post key={post.id} info={post} />
        ))} */}
        {posts ? (
          posts.map((post: any) => <Post key={post.id} info={post} />)
        ) : (
          <div>There're not post yet 😔</div>
        )}
      </div>
    </div>
  );
};

export default Home;

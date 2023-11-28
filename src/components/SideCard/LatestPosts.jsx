import { useEffect, useState } from "react";
import axios from "axios";

const LatestPosts = () => {
  const [latestPosts, setLatestPosts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://health-plus-q4tt.onrender.com/api/v1/post/read/?sort=latest"
      );
      const latestPostsData = response.data.data.resultPosts;
      console.log(latestPostsData);

      if (Array.isArray(latestPostsData)) {
        const sortedPosts = latestPostsData.sort((a, b) => {
          return new Date(b.timestamp) - new Date(a.timestamp);
        });

        // Limit to the last 4 posts
        setLatestPosts(sortedPosts.slice(0, 4));
      } else {
        console.error("Latest posts data is not an array:", latestPostsData);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(latestPosts);

  return (
    <div className="py-2">
      {latestPosts.map((post, index) => (
        <a href={`/post/read?slug=${post.slug}`} key={index}>
          <div className=" gap-2 mb-4 border-b" key={index}>
            <div className="flex flex-row">
              <img
                className="w-16 h-16 object-cover pb-2 pr-2 rounded-md"
                src={post.picture}
                alt={post.title}
              />
              <h1 className="text-sm text-gray-900">{post.title}</h1>
            </div>

            <div>
              <p className=" text-xs text-gray-500 mb-2">
                {post.description.substring(0, 100)}
              </p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default LatestPosts;

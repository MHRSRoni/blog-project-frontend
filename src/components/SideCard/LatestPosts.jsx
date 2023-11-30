import { useEffect, useState } from "react";
import axios from "../../utilities/axiosInstance";

const LatestPosts = () => {
  const [latestPosts, setLatestPosts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("/post/read/?sort=latest");
      const latestPostsData = response.data.data.resultPosts;

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

  const handleHover = (event, fullTitle) => {
    event.currentTarget.title = fullTitle;
  };

  return (
    <div className="py-2">
      {latestPosts.map((post, index) => (
        <a
          href={`/post/read?slug=${post.slug}`}
          key={index}
          title={post.title}
          onMouseOver={(e) => handleHover(e, post.title)}
        >
          <div className="flex gap-2 border-t mb-2" key={index}>
            <img
              className="w-20 h-20 object-cover p-2 rounded-md"
              src={post.picture}
              alt={post.title}
            />
            <div>
              <h1 className="text-sm text-gray-900 mt-2">
                {post.title.substring(0, 25)}...
              </h1>
              <p className="text-xs text-gray-500 mb-2">
                {post.description.substring(0, 50)}...
              </p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default LatestPosts;

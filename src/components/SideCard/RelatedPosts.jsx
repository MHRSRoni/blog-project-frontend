import { useEffect, useState } from "react";
import axios from "../../utilities/axiosInstance";
import TooltipComponent from "../Tooltip/TooltipComponent";

const RelatedPosts = ( { categoryId } ) => {
  const [latestPosts, setLatestPosts] = useState([]);

  console.log(categoryId);

  const fetchData = async () => {
    try {
        const response = await axios.get(
            `https://health-plus-q4tt.onrender.com/api/v1/post/read/?category=${categoryId}`
          );
      const latestPostsData = response.data.data.resultPosts;

      if (Array.isArray(latestPostsData)) {
        const sortedPosts = latestPostsData.sort((a, b) => {
          return new Date(b.timestamp) - new Date(a.timestamp);
        });

        console.log(latestPosts);

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
    if (categoryId) {
      fetchData();
    }
  }, [categoryId]);
  

  return (
    <div className="py-2">
      {latestPosts.length > 0 ? (
        latestPosts.map((post, index) => {
          return (
            <a href={`/post/read?slug=${post.slug}`} key={index}>
              <div className=" border-t" key={index}>
                <div className="flex mt-2">
                  <img
                    className="w-16 h-16 object-cover pb-2 pr-2 rounded-md"
                    src={post.picture}
                    alt={post.title}
                  />

                  <TooltipComponent text={post.title}>
                    <h1 className="text-sm text-gray-900">
                      {post.title.slice(0, 100)}
                    </h1>
                  </TooltipComponent>
                </div>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-2">
                  {post.description.substring(0, 100)}...
                </p>
              </div>
            </a>
          );
        })
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default RelatedPosts;

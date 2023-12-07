import { Button } from "keep-react";
// import Search from "../../components/Search/Search";
// import { MagnifyingGlass } from "phosphor-react";
// import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../../utilities/axiosInstance";

const ReadList = () => {
  // const navigate = useNavigate();
  const [readList, setReadList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const BASE_URL = "http://localhost:5173";

  //fetch read list
  const fetchData = async () => {
    try {
      const response = await axios.get("post/read/?sort=latest");
      const readListData = response.data.data.resultPosts;

      if (Array.isArray(readListData)) {
        const sortedPosts = readListData.sort((a, b) => {
          return new Date(b.timestamp) - new Date(a.timestamp);
        });

        // Limit to the last 4 posts
        setReadList(sortedPosts.slice(0, 10));
      } else {
        console.error("Read list posts data is not an array:", readListData);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  //format the date
  const formatDate = (createdAt) => {
    const date = new Date(createdAt);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  //handle search
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  //filteredReadList
  const filteredReadList = readList.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayList = searchTerm ? filteredReadList : readList;
  const noSearchResults = searchTerm && filteredReadList.length === 0;

  return (
    <div className="container mx-auto p-3 h-screen overflow-auto">
      {/* heading */}
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold">
          Reading list ({displayList.length})
        </h3>
        <input
          type="text"
          placeholder="Search here..."
          value={searchTerm}
          onChange={handleSearch}
          className="px-2 py-1 border border-gray-300 rounded-md"
        />

        {/* <form>
          <Search
            Icon={MagnifyingGlass}
            placeholder="Search anything"
            style={{ width: "200px" }}
            iconPosition="right"
          />
        </form> */}
      </div>

      {/* content */}
      <div className="p-5">
        {displayList.length > 0 ? (
          displayList.map((post, index) => {
            return (
              <a href={`${BASE_URL}/post/read?slug=${post.slug}`} key={index}>
                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center gap-3">
                    <img
                      className="w-12 h-12 object-cover pb-2 pr-2 rounded-md"
                      src={post.picture}
                      alt={post.title}
                    />
                    <div>
                      <h6>{post.title}</h6>
                      <div className="flex">
                        <p className="mr-4">{post.userId.name}</p>
                        <p className="mr-4">{formatDate(post.createdAt)}</p>
                        <p>{post.readTime} minutes</p>
                      </div>
                    </div>
                  </div>
                  <Button size="xs" color="error">
                    Remove
                  </Button>
                </div>
              </a>
            );
          })
        ) : noSearchResults ? (
          <div>No posts found...</div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default ReadList;

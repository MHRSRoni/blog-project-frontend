import { Button } from "keep-react";
import { useEffect, useState } from "react";
import axios from "../../utilities/axiosInstance";
import { SpinnerButtonComponent } from "../../components/SpinnerButtonComponent/SpinnerButtonComponent";

const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchReadList, setSearchReadList] = useState([]);
  const [inLineLoading, setInLineLoading] = useState(false);
  const [totalReadList, setTotalReadList] = useState();
  const [page, setPage] = useState(1);

  //fetch read list
  const fetchData = async () => {
    try {
      const response = await axios.get(`post/read/?page=${page}&limit=6`);
      const readListData = response.data.data.resultPosts;
      const readListCount = response.data.data.totalPost;

      setTotalReadList(readListCount);

      if (Array.isArray(readListData)) {
        setReadList([...readList, ...readListData]);
      } else {
        console.error("Read list posts data is not an array:", readListData);
      }
      setInLineLoading(false);
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

  // fetch search read list
  useEffect(() => {
    let timeOut = setTimeout(async () => {
      try {
        const response = await axios.get(`post/read/?search=${searchTerm}`);
        const searchReadListData = response.data.data.resultPosts;

        if (Array.isArray(searchReadListData)) {
          setSearchReadList(searchReadListData);
        } else {
          console.error(
            "Search read list posts data is not an array:",
            searchReadListData
          );
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }, 800);

    return () => clearTimeout(timeOut);
  });

  useEffect(() => {
    if (page > 1 && totalReadList > readList.length) {
      fetchData();
    }
  }, [page]);

  const displayList = searchTerm ? searchReadList : readList;
  const noSearchResults = searchTerm && searchReadList.length === 0;

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
      </div>

      {/* content */}
      <div className="p-5">
        {displayList.length > 0 ? (
          displayList.map((post, index) => {
            return (
              <a href={`/post/read?slug=${post.slug}`} key={index}>
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

        {/* loading button */}
        {totalReadList > displayList?.length && (
          <div className="flex justify-center items-center m-8">
            {inLineLoading ? (
              <SpinnerButtonComponent />
            ) : (
              <Button
                style={{ padding: "0 1rem" }}
                size="xs"
                type="primary"
                onClick={() => {
                  setInLineLoading(true);
                  setPage(page + 1);
                }}
              >
                Load More
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReadList;

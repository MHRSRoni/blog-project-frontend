import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SearchCard from "../components/Search/SearchCard";
import { Link } from "react-router-dom";

import axios from "axios";

const SearchPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("q");
  const [searchResults, setSearchResults] = useState([]);
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (query) {
          const response = await axios.get(
            `https://health-plus-q4tt.onrender.com/api/v1/post/read/?search=${query}`
          );
          const searchData = response.data.data;

          if (searchData.length === 0) {
            setNoResults(true); // Set noResults state to true if no search results
          } else {
            setSearchResults(searchData);
            setNoResults(false); // Reset noResults state if there are search results
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [query]);

  return (
    <div className="pr-10 pl-10">
      <h1 className="mb-2 mt-2">Search Results for: {query}</h1>
      {noResults ? (
        <div className="text-center h-screen flex justify-center items-center flex-col">
          <p className="text-xl">No post found. Try another search!</p>
          <Link
            to="/"
            className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md text-md transition duration-300 ease-in-out"
          >
            Go to Home Page
          </Link>
        </div>
      ) : (
        <div className="search-card-grid">
          {searchResults.map((result, index) => (
            <SearchCard
              key={index}
              picture={result.picture}
              title={result.title}
              description={result.description}
              slug={`/post/${result.slug}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;

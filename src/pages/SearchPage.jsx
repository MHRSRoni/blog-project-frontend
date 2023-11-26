import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SearchCard from "../components/Search/SearchCard";
import axios from "axios";

const SearchPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("q");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (query) {
          const response = await axios.get(
            `https://health-plus-q4tt.onrender.com/api/v1/post/read/?search=${query}`
          ); // Use Axios to make the GET request
          setSearchResults(response.data.data); // Set searchResults to response.data.data (the array of posts)
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
    </div>
  );
};

export default SearchPage;

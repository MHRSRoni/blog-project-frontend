import { Navbar } from "keep-react";
import { MagnifyingGlass } from "phosphor-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    } else {
      // Handle empty search query if needed
    }
  };

  const onSearchSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <Navbar.Container className="flex items-center gap-6">
      <Navbar.Container
        tag="ul"
        className="lg:flex items-center justify-between gap-4"
      >
        <form onSubmit={onSearchSubmit}>
          <div className="flex items-center">
            <div>
              <input
                className="w-96 p-2"
                placeholder="Search anything"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <MagnifyingGlass
              className="ml-2 text-xl"
              size={24}
              onClick={handleSearch}
              style={{ cursor: "pointer" }}
            />
          </div>
        </form>
      </Navbar.Container>
    </Navbar.Container>
  );
};

export default SearchBar;

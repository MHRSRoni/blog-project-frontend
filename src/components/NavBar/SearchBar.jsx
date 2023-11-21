import { Navbar } from "keep-react";

import { MagnifyingGlass } from "phosphor-react";
import Search from "../Search/Search";

const SearchBar = () => {
  return (
    <Navbar.Container className="flex items-center gap-6">
      <Navbar.Container
        tag="ul"
        className="lg:flex items-center justify-between gap-4"
      >
        <div className="w-52 lg:w-96">
          <Search Icon={MagnifyingGlass} placeholder="Search anything" />
        </div>
      </Navbar.Container>
    </Navbar.Container>
  );
};

export default SearchBar;

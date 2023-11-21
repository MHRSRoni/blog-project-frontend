"use client";
import { Navbar, Button } from "keep-react";
import logo from "../../assets/images/Logo.svg";
import { UserDropdown } from "./UserDropdown";
import { SideBar } from "./SideBar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";

export const NavBar = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  return (
    <Navbar fluid={false} className="shadow-md  custom-sidebar">
      <Navbar.Container className="flex items-center justify-between lg:p-2 ">
        <Navbar.Container className="flex items-center toggleIcon">
          <Navbar.Toggle />
          <Navbar.Brand>
            <img
              src={logo}
              alt="logo"
              width="100"
              height="40"
              onClick={() => navigate("/")}
            />
          </Navbar.Brand>

          {/* collapse */}
          <Navbar.Collapse collapseType="fullWidth">
            <div className="pl-5">
              <SearchBar />
            </div>
            <Navbar.Container tag="ul" className="flex flex-col gap-5">
              <SideBar />
            </Navbar.Container>
          </Navbar.Collapse>
        </Navbar.Container>

        {/* search bar */}
        <div className="hidden lg:block">
          <SearchBar />
        </div>

        {/* user section */}
        {user?.status === "verified" ? (
          <Navbar.Container className="flex gap-2 justify-center items-center">
            <Button
              size="xs"
              type="outlinePrimary"
              pill={true}
              onClick={() => navigate("/createpost")}
            >
              Create Post
            </Button>
            <UserDropdown />
          </Navbar.Container>
        ) : (
          <Navbar.Container className="flex gap-2 justify-center items-center">
            <Button
              size="xs"
              type="default"
              onClick={() => navigate("/register")}
            >
              Create Account
            </Button>

            <Button size="xs" type="primary" onClick={() => navigate("/login")}>
              Login
            </Button>
          </Navbar.Container>
        )}
      </Navbar.Container>
    </Navbar>
  );
};

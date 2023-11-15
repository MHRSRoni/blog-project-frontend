"use client";
import { MagnifyingGlass } from "phosphor-react";


import { Navbar, Button } from "keep-react";
import logo from "../../assets/images/Logo.svg";
import { UserDropdown } from "./UserDropdown";
import { SideBar } from "./SideBar";
import { useNavigate } from "react-router-dom";
import Search from "../Search/Search";

export const NavBar = () => {
  const navigate = useNavigate();
  const loginStatus = true;
  return (
    <Navbar fluid={false} className="shadow-md custom-sidebar">
      <Navbar.Container className="flex items-center justify-between">
        <Navbar.Container className="flex items-center">
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

          <Navbar.Container className="flex items-center gap-6">
            <Navbar.Container
              tag="ul"
              className="lg:flex items-center justify-between gap-4"
            >
              <Search
                Icon={MagnifyingGlass}
                placeholder="Search anything"
                style={{ width: "300px" }}
              />
            </Navbar.Container>
          </Navbar.Container>

          <Navbar.Collapse collapseType="fullWidth">
            <Navbar.Container tag="ul" className="flex flex-col gap-5">
              <SideBar />
            </Navbar.Container>
          </Navbar.Collapse>
        </Navbar.Container>

        {loginStatus ? (
          <Navbar.Container className="flex gap-2 justify-center items-center">
            <Button size="xs" type="outlinePrimary" pill={true}>
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

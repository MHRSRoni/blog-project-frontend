"use client";

import { MagnifyingGlass } from "phosphor-react";
import { Navbar, Button, TextInput } from "keep-react";
import logo from "../../assets/images/logo.png";
import { Avatar } from "keep-react";
import { UserDropdown } from "./UserDropdown";

export const NavBar = () => {
  return (
    <Navbar fluid={false} className="shadow-md">
      <Navbar.Container className="flex items-center justify-between">
        <Navbar.Container className="flex items-center">
          <Navbar.Toggle />
          <Navbar.Brand>
            <img src={logo} alt="logo" width="100" height="40" />
          </Navbar.Brand>

          <Navbar.Container className="flex items-center gap-6">
            <Navbar.Container
              tag="ul"
              className="lg:flex items-center justify-between gap-4"
            >
              <TextInput
                id="#id-10"
                placeholder="Search anything"
                color="gray"
                sizing="sm"
                type="text"
                addon={<MagnifyingGlass size={20} color="#5E718D" />}
                addonPosition="left"
                style={{ width: "300px" }}
              />
            </Navbar.Container>
          </Navbar.Container>

          <Navbar.Collapse collapseType="fullWidth">
            <Navbar.Container tag="ul" className="flex flex-col gap-5">
              <Navbar.Link linkName="Home" />
              <Navbar.Link linkName="Projects" />
              <Navbar.Link linkName="Blogs" />
              <Navbar.Link linkName="News" />
              <Navbar.Link linkName="Resources" />
            </Navbar.Container>
          </Navbar.Collapse>
        </Navbar.Container>

        <Navbar.Container className="flex gap-2">
          <Button size="xs" type="outlinePrimary" pill={true}>
            Create Post
          </Button>
          <UserDropdown />
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  );
};

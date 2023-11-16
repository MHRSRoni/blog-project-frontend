
"use client";
import { Navbar, Button } from "keep-react";
import logo from "../../assets/images/logo.svg";
import { UserDropdown } from "./UserDropdown";

const Navbar2 = () => {
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
}


export default Navbar2;
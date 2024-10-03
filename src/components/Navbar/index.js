import React from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MenuIcon,
  NavMenu,
  NabvItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">dolla</NavLogo>
          <MenuIcon>
            <HiBars3BottomRight />
          </MenuIcon>
          <NavMenu>
            <NabvItem>
              <NavLinks to="about">About</NavLinks>
            </NabvItem>
            <NabvItem>
              <NavLinks to="discover">Discover</NavLinks>
            </NabvItem>
            <NabvItem>
              <NavLinks to="services">Services</NavLinks>
            </NabvItem>
            <NabvItem>
              <NavLinks to="signup">Sign Up</NavLinks>
            </NabvItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;

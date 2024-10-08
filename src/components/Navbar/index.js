import React, { useState, useEffect } from "react";
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

const Navbar = ({ toggleNavbar }) => {
  const [scrollNav, setscrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setscrollNav(true);
    } else {
      setscrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <>
      <Nav $scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/">Pesa Otas</NavLogo>
          <MenuIcon onClick={toggleNavbar}>
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

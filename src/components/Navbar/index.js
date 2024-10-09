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
import { animateScroll as scroll } from "react-scroll";

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

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav $scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            Pesa Otas
          </NavLogo>
          <MenuIcon onClick={toggleNavbar}>
            <HiBars3BottomRight />
          </MenuIcon>
          <NavMenu>
            <NabvItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                delay={200}
                spy={true}
                exact="true"
                offset={80}
              >
                About
              </NavLinks>
            </NabvItem>
            <NabvItem>
              <NavLinks
                to="discover"
                smooth={true}
                duration={500}
                delay={200}
                spy={true}
                exact="true"
                offset={80}
              >
                Discover
              </NavLinks>
            </NabvItem>
            <NabvItem>
              <NavLinks
                to="stocks"
                smooth={true}
                duration={500}
                delay={200}
                spy={true}
                exact="true"
                offset={80}
              >
                Stocks
              </NavLinks>
            </NabvItem>
            <NabvItem>
              <NavLinks
                to="services"
                smooth={true}
                duration={500}
                delay={200}
                spy={true}
                exact="true"
                offset={80}
              >
                Services
              </NavLinks>
            </NabvItem>
            <NabvItem>
              <NavLinks
                to="signup"
                smooth={true}
                duration={500}
                delay={200}
                spy={true}
                exact="true"
                offset={80}
              >
                Sign Up
              </NavLinks>
            </NabvItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink
              to="/signin"
            >
              Sign In
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;

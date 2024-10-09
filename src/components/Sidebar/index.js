import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggleNavbar }) => {
  return (
    <SidebarContainer $isOpen={isOpen} onClick={toggleNavbar}>
      <Icon onClick={toggleNavbar}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggleNavbar}>
            About
          </SidebarLink>
          <SidebarLink to="discover" onClick={toggleNavbar}>
            Discover
          </SidebarLink>
          <SidebarLink to="stocks" onClick={toggleNavbar}>
            Stocks
          </SidebarLink>
          <SidebarLink to="services" onClick={toggleNavbar}>
            Services
          </SidebarLink>
          <SidebarLink to="signup" onClick={toggleNavbar}>
            Sign Up
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="signin">Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;

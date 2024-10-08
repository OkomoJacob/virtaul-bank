import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="discover">How It Works</FooterLink>
              <FooterLink to="signin">Testimonials</FooterLink>
              <FooterLink to="signin">Careers</FooterLink>
              <FooterLink to="signin">Testimonials</FooterLink>
              <FooterLink to="signin">Terms of Service</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="discover">How It Works</FooterLink>
              <FooterLink to="signin">Testimonials</FooterLink>
              <FooterLink to="signin">Careers</FooterLink>
              <FooterLink to="signin">Testimonials</FooterLink>
              <FooterLink to="signin">Terms of Service</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to="discover">Contact</FooterLink>
              <FooterLink to="signin">Support</FooterLink>
              <FooterLink to="signin">Destinations</FooterLink>
              <FooterLink to="signin">Sponsorships</FooterLink>
              <FooterLink></FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="discover">X</FooterLink>
              <FooterLink to="signin">Facebook</FooterLink>
              <FooterLink to="signin">YouTube</FooterLink>
              <FooterLink to="signin">Instagram</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">Pesa Otas</SocialLogo>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;

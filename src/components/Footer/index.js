import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

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
            <WebsiteRights>
              Pesa Otas &#169; {new Date().getFullYear()} Allrights Reserved
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="YouTube">
                <IoLogoYoutube />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="X">
                <FaXTwitter />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;

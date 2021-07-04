import React from "react";
import styled from "styled-components";
function Footer() {
  return (
    <Div>
      <FooterLogo>
        <h3>Shortly</h3>
      </FooterLogo>
      <FooterSection>
        <FooterLinks>
          <LinkTitle>Features</LinkTitle>
          <Links>
            <a href="">Link Shortening</a>
            <a href="">Branded Links</a>
            <a href="">Analytics</a>
          </Links>
        </FooterLinks>
        <FooterLinks>
          <LinkTitle>Resources</LinkTitle>
          <Links>
            <a href="">Blog</a>
            <a href="">Developers</a>
            <a href="">Support</a>
          </Links>
        </FooterLinks>
        <FooterLinks>
          <LinkTitle>Company</LinkTitle>
          <Links>
            <a href="">About</a>
            <a href="">Our Team</a>
            <a href="">Careers</a>
            <a href="">Contact</a>
          </Links>
        </FooterLinks>
      </FooterSection>
      <FooterIcons>
        <a href="">
          <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg">
            <image href="/images/icon-facebook.svg" height="25" width="25" />
          </svg>
        </a>
        <a href="">
          <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg">
            <image href="/images/icon-twitter.svg" height="25" width="25" />
          </svg>
        </a>
        <a href="">
          <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg">
            <image href="/images/icon-pinterest.svg" height="25" width="25" />
          </svg>
        </a>
        <a href="">
          <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg">
            <image href="/images/icon-instagram.svg" height="25" width="25" />
          </svg>
        </a>
      </FooterIcons>
    </Div>
  );
}

export default Footer;
const Div = styled.div`
  background-color: #232127;
  color: #fff;
  display: flex;
  height: 250px;
  padding-top: 20px;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    height: 750px;
  }
`;
const FooterLogo = styled.div`
  width: 40%;
  text-align: center;
  padding-top: 10px;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
const FooterSection = styled.div`
  width: 40%;
  display: flex;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    width: 100%;
    text-align: center;
  }
`;
const FooterLinks = styled.div`
  width: 30%;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    width: 100%;
    text-align: center;
  }
`;
const LinkTitle = styled.h5``;
const Links = styled.div`
  display: flex;
  flex-direction: column;
  a {
    color: #9e9aa7;
    text-decoration: none;
    font-size: 13px;
    line-height: 30px;
    :hover {
      color: #2acfcf;
    }
  }
`;
const FooterIcons = styled.div`
  display: flex;
  width: 30%;
  padding: 20px;

  a {
    text-decoration: none;
    margin: 15px;
    margin-top: 10px;
    svg {
      :hover {
        filter: invert(55%) sepia(100%) saturate(3.5) hue-rotate(120deg);
      }
    }
  }
  @media only screen and (max-width: 600px) {
    padding: 0;
    padding-top: 20px;
    justify-content: center;
    width: 100%;
    overflow: hidden;
    margin: 0 auto;
  }
`;

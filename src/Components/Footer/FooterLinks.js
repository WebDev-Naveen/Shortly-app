import React from "react";
import styled from "styled-components";
function FooterLinks() {
  return (
    <FooterSection>
      <FooterLink>
        <LinkTitle>Features</LinkTitle>
        <Links>
          <a href="">Link Shortening</a>
          <a href="">Branded Links</a>
          <a href="">Analytics</a>
        </Links>
      </FooterLink>
      <FooterLink>
        <LinkTitle>Resources</LinkTitle>
        <Links>
          <a href="">Blog</a>
          <a href="">Developers</a>
          <a href="">Support</a>
        </Links>
      </FooterLink>
      <FooterLink>
        <LinkTitle>Company</LinkTitle>
        <Links>
          <a href="">About</a>
          <a href="">Our Team</a>
          <a href="">Careers</a>
          <a href="">Contact</a>
        </Links>
      </FooterLink>
    </FooterSection>
  );
}

export default FooterLinks;
const FooterSection = styled.div`
  width: 40%;
  display: flex;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    width: 100%;
    text-align: center;
  }
`;
const FooterLink = styled.div`
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

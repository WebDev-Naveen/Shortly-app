import React from "react";
import styled from "styled-components";
function FooterIcon() {
  return (
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
  );
}

export default FooterIcon;
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
  @media only screen and (max-width: 1052px) {
    width: 25%;
    padding-left: 0px;
    padding-top: 15px;
    overflow: hidden;
    a {
      margin: 10px;
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

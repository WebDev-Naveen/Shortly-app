import React from "react";
import styled from "styled-components";
import FooterLinks from "./FooterLinks";
import FooterIcon from "./FooterIcon";
function Footer() {
  return (
    <Div>
      <FooterLogo>
        <h3>Shortly</h3>
      </FooterLogo>
      <FooterLinks />
      <FooterIcon />
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

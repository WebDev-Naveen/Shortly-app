import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
function Header() {
  const [shoNav, setShowNav] = useState(false);
  function handleClick() {
    setShowNav(!shoNav);
  }
  return (
    <Head>
      <Logo src="/images/logo.svg"></Logo>
      <Navbar shoNav={shoNav} />
      <MenuIcon>
        <button onClick={handleClick}>
          <img src="/images/menu1.svg" alt="Menu" />
        </button>
      </MenuIcon>
    </Head>
  );
}

export default Header;
const Head = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  margin-left: 80px;
  margin-right: 80px;
  @media only screen and (max-width: 1052px) {
    margin-left: 100px;
    margin-right: 40px;
  }
  @media only screen and (max-width: 600px) {
    margin-left: 20px;
    margin-right: 20px;
    justify-content: space-between;
  }
`;

const Logo = styled.img`
  margin-top: 10px;

  max-width: 100%;
  @media only screen and (max-width: 600px) {
    height: 30px;
  }
`;
const MenuIcon = styled.div`
  display: none;
  @media only screen and (max-width: 600px) {
    height: 48px;
    display: block;
    button {
      outline: none;
      border: none;
      background-color: #fff;
      padding-top: 5px;
    }
  }
`;

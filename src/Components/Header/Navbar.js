import React from "react";
import styled from "styled-components";

function Navbar(props) {
  return (
    <Nav shoNav={props.shoNav}>
      <Div>
        <Navlink href="">Features</Navlink>
        <Navlink href="">Pricing</Navlink>
        <Navlink href="">Resources</Navlink>
      </Div>
      <UserAuth>
        <Navlink href="">Login</Navlink>
        <Navlink href="">SignUp</Navlink>
      </UserAuth>
    </Nav>
  );
}

export default Navbar;

const Nav = styled.nav`
  display: flex;
  width: 60vw;
  justify-content: space-between;
  @media only screen and (max-width: 1052px) {
    margin-top: 5px;
    justify-content: space-around;
    width: 90%;
  }
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    width: 90%;
    background-color: #3b3054;
    visibility: ${(props) => (props.shoNav ? "visible" : "hidden")};
    height: 340px;
    position: absolute;
    left: 5px;
    border-radius: 5px;
    top: 60px;
    z-index: 1;
  }
`;

const Navlink = styled.a`
  color: #9e9aa7;
  text-decoration: none;
  @media only screen and (max-width: 1052px) {
    font-size: 14px;
  }
  @media only screen and (max-width: 600px) {
    padding-bottom: 20px;
    color: #fff;
  }
`;
const Div = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  a:hover {
    color: black;
  }
  @media only screen and (max-width: 1052px) {
    width: 50%;
  }
  @media only screen and (max-width: 600px) {
    border-bottom: 1px solid #fff;
    padding-top: 20px;
    padding-bottom: 20px;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    a:hover {
      opacity: 0.5;
      color: #fff;
    }
  }
`;
const UserAuth = styled.div`
  width: 35%;
  display: flex;
  justify-content: space-around;

  a {
    width: 150px;
    margin-right: 20px;
    height: 25px;
    padding: 10px;

    text-align: center;
  }
  a:hover {
    background-color: #2acfcf;
    color: #fff;
    border-radius: 40px;
  }
  @media only screen and (max-width: 1052px) {
    width: 30%;
    height: 20px;
    font-size: 14px;
  }
  @media only screen and (max-width: 600px) {
    a {
      width: 90%;
      margin-right: 0;
      margin-bottom: 20px;
    }

    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
  }
`;

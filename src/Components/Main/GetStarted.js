import React from "react";
import styled from "styled-components";

function GetStarted() {
  return (
    <Section>
      <h3>Boost your links today</h3>
      <a href="">Get Started</a>
    </Section>
  );
}

export default GetStarted;
const Section = styled.div`
  background-image: url("/images/bg-boost-desktop.svg");
  height: 130px;
  background-color: #3b3054;
  text-align: center;
  margin-top: 0;
  padding-top: 10px;

  h3 {
    color: #fff;
    margin-bottom: 15px;
  }
  a {
    background-color: #2acfcf;
    color: #fff;

    text-decoration: none;
    border: none;
    outline: none;
    height: 30px;
    padding: 10px 20px 10px 20px;

    border-radius: 40px;
    :hover {
      opacity: 0.5;
    }
  }
  @media only screen and (max-width: 600px) {
    background-image: url("/images/bg-boost-mobile.svg");
  }
`;

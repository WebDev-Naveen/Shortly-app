import React from "react";
import Section from "./DetailSection";
import SearchBar from "./MiddleSection";
import GetStarted from "./GetStarted";
import styled from "styled-components";

function MainSection() {
  return (
    <Main>
      <Section />
      <SearchBar />
      <GetStarted />
    </Main>
  );
}

export default MainSection;
const Main = styled.main``;

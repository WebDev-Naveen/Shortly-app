import React from "react";
import Section from "./Section";
import SearchBar from "./SearchBar";
import GetStarted from "./GetStarted";
import styled from "styled-components";

function Middle() {
  return (
    <Main>
      <Section />
      <SearchBar />
      <GetStarted />
    </Main>
  );
}

export default Middle;
const Main = styled.main``;

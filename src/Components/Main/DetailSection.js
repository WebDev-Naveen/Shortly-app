import React from "react";
import styled from "styled-components";
function DetailSection() {
  return (
    <Div>
      <Content>
        <ContentTitle>
          <h1>More than just shorter links</h1>
          <p>
            Build your brand's recongnition and get detailed insights on how
            your links are performing
          </p>
          <a href="">Get Started</a>
        </ContentTitle>

        <ContentImg>
          <Image src="/images/illustration-working.svg" />
        </ContentImg>
      </Content>
    </Div>
  );
}

export default DetailSection;
const Div = styled.section`
  width: 80%;
  margin: auto;
  margin-top: 20px;
  position: relative;
  margin-bottom: 100px;
  @media only screen and (max-width: 600px) {
    top: 40px;
    height: 580px;
    width: 100%;
    margin-top: 0;
  }
`;
const Content = styled.div`
  width: 100%;
  display: flex;
  @media only screen and (max-width: 600px) {
    ${
      "" /* position: relative;
    top: -300px; */
    }

    z-index: 0;
    flex-direction: column-reverse;
  }
`;
const ContentTitle = styled.div`
  width: 50%;
  h1 {
    font-size: 66px;
    margin-bottom: 0px;
    line-height: 80px;
  }
  p {
    margin-top: 0px;
    opacity: 0.7;
  }
  a {
    text-decoration: none;

    height: 30px;
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px;
    background-color: #2acfcf;
    color: #fff;
    border-radius: 40px;

    text-align: center;
  }
  a:hover {
    opacity: 0.5;
  }
  @media only screen and (max-width: 600px) {
    margin: 0 auto;
    margin-bottom: 10px;

    h1 {
      font-size: 36px;
      line-height: 40px;
    }
    p {
      font-size: 16px;
      margin-top: 5px;
    }
    width: 80%;
    text-align: center;
  }
`;
const ContentImg = styled.div`
  width: 50%;
  overflow: hidden;
  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 280px;
    ${"" /* margin-bottom: 20px; */}
  }
`;
const Image = styled.img`
  position: relative;
  width: 100%;

  left: 20px;
`;

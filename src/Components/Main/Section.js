import React from "react";
import styled from "styled-components";
function Section() {
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

export default Section;
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
    margin-top: 10px;
    h1 {
      font-size: 36px;
      line-height: 40px;
    }
    p {
      font-size: 16px;
      margin-top: 5px;
    }
    width: 100%;
    text-align: center;
  }
`;
const ContentImg = styled.div`
  width: 50%;
  overflow: hidden;
  @media only screen and (max-width: 600px) {
    width: 100%;

    margin-bottom: 20px;
  }
`;
const Image = styled.img`
  position: relative;
  width: 100%;

  left: 20px;
`;
// const NavSection = styled.div`
//   visibility: hidden;
//   position: relative;
//   background-color: #3b3054;
//   width: 95%;
//   border-radius: 10px;
//   height: 360px;
//   z-index: 1;
//   left: 0;
//   top: 15px;
//   @media only screen and (min-width: 600px) {
//     display: none;
//   }
// `;
// const Nav = styled.nav`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   padding-top: 10px;
// `;
// const NavLinks = styled.div`
//   width: 100%;
//   margin: 0 auto;
//   div {
//     width: 80%;
//     margin: 0 auto;
//     margin-bottom: 20px;
//   }
//   a {
//     display: flex;
//     flex-direction: column;
//     text-decoration: none;
//     align-items: center;
//     color: #fff;
//     padding: 10px;
//     :hover {
//       border-radius: 40px;
//       background-color: #2acfcf;
//     }
//   }
// `;
// const UserAuth = styled.div`
//   border-top: 0.5px solid #9e9aa7;
//   width: 80%;
//   margin: 0 auto;
//   margin-top: 20px;
//   padding-top: 20px;
//   a {
//     display: flex;
//     flex-direction: column;
//   }
// `;

import React from "react";
import styled from "styled-components";
function Stats() {
  return (
    <DetailsSection>
      <Topic>
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with out advanced
          statistics dashboard
        </p>
      </Topic>
      <StatsSection>
        <StatBox1>
          <Stat>
            <StatImg>
              <img
                src="/images/icon-brand-recognition.svg"
                alt="Brand Recongnition"
              />
            </StatImg>
            <StatTitle>
              <h3>Brand Recongnition</h3>
            </StatTitle>
            <StatDetail>
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your content
            </StatDetail>
          </Stat>
        </StatBox1>
        <span></span>
        <StatBox2>
          <Stat>
            <StatImg>
              <img
                src="/images/icon-detailed-records.svg"
                alt="Detailed Records"
              />
            </StatImg>
            <StatTitle>
              <h3>Detailed Records</h3>
            </StatTitle>
            <StatDetail>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </StatDetail>
          </Stat>
        </StatBox2>
        <span></span>
        <StatBox3>
          <Stat>
            <StatImg>
              <img
                src="/images/icon-fully-customizable.svg"
                alt="Fully Customizable"
              />
            </StatImg>
            <StatTitle>
              <h3>Fully Customizable</h3>
            </StatTitle>
            <StatDetail>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </StatDetail>
          </Stat>
        </StatBox3>
      </StatsSection>
    </DetailsSection>
  );
}

export default Stats;
const DetailsSection = styled.div`
  max-width: 80%;
  margin: 0 auto;
`;
const Topic = styled.div`
  text-align: center;
  h2 {
    margin-bottom: 5px;
  }
  p {
    width: 54%;
    opacity: 0.7;
    margin: 0 auto;
  }
  @media only screen and (max-width: 600px) {
    font-size: 14px;

    p {
      width: 100%;
    }
  }
`;
const StatsSection = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 150px;
  height: 260px;
  span {
    background-color: #2acfcf;
    width: 30%;
    height: 10px;
    position: absolute;
    margin: 60px;
  }
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    height: 750px;
    width: 100%;
    text-align: center;
    span {
      right: 50%;
      width: 2%;
      height: 90%;
      margin: 0 auto;
    }
  }
`;
const Stat = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 15px;
  margin: 10px;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    padding-bottom: 20px;
    margin-bottom: 30px;
    margin-left: 0;
    margin-right: 0;
  }
`;
const StatImg = styled.div`
  border-radius: 50%;
  background-color: #3b3054;
  width: 25%;
  height: 55px;
  text-align: center;
  padding-top: 14px;
  position: relative;
  top: -50px;
  bottom: 0;
  left: 10px;
  @media only screen and (max-width: 600px) {
    left: 35%;
  }
`;
const StatTitle = styled.div`
  margin-top: -40px;
`;
const StatDetail = styled.div`
  font-size: 15px;
  padding-bottom: 10px;
  color: #9e9aa7;
  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
`;
const StatBox1 = styled.div`
  position: relative;
  top: -60px;
  width: 33%;
  z-index: 1;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
const StatBox2 = styled.div`
  position: relative;
  top: -30px;
  width: 33%;
  z-index: 1;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
const StatBox3 = styled.div`
  position: relative;
  z-index: 1;

  width: 33%;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

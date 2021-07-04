import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Stats from "./Stats";
import ShortenLinks from "./ShortenLinks";
function MiddleSection() {
  const [inputValue, setInputValue] = useState("");
  const [codeRed, setCodeRed] = useState(false);
  const [enterLink, setEnterLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([
    {
      original: "https://www.frontendmentor.io",
      shortenLink: "https://rel.ink/k4lkyk",
    },
    {
      original: "https://twitter.com/frontendmentor",
      shortenLink: "https://rel.ink/gxOXp9",
    },
    {
      original: "https://www.linkedin.com/company/frontend-mentor",
      shortenLink: "https://rel.ink/gob3X9",
    },
  ]);
  //function to change input value
  function handleChange(e) {
    setInputValue(e.target.value);
  }
  function handleSubmit() {
    if (inputValue === "" || typeof inputValue === undefined) setCodeRed(true);
    else {
      setCodeRed(false);
    }
    setEnterLink(inputValue);
    setInputValue("");
  }

  useEffect(() => {
    if (enterLink) {
      setLoading(true);
      fetch(`https://api.shrtco.de/v2/shorten?url=${enterLink}`)
        .then((response) => response.json())
        .then((responseData) => {
          if (responseData.ok === true) {
            console.log("response", responseData);
            let tempLink = [
              {
                shortenLink: responseData.result.full_short_link,
                original: responseData.result.original_link,
              },
            ];
            let findIndex = data.findIndex(
              (e) => e.original === tempLink[0].original
            );
            console.log("we are", findIndex);
            if (findIndex > 0) {
              alert("already shorten ");
              setLoading(false);
            } else {
              //   console.log("hello");
              let temp = [...data, ...tempLink];
              setData(temp);
              setLoading(false);
            }

            console.log(responseData.result.full_short_link);
          }
        });
      setEnterLink("");
    }
  }, [enterLink]);

  console.log(inputValue);
  return (
    <Div>
      <Section>
        <Form>
          <Input
            type="text"
            placeholder="Shorten a link here"
            value={inputValue}
            onChange={(e) => handleChange(e)}
            codeRed={codeRed}
          />
          <p style={{ visibility: codeRed && "visible" }}>Please add a link</p>
          <Button type="button" onClick={handleSubmit} disabled={loading}>
            {loading ? "loading..." : "Shorten It!"}
          </Button>
        </Form>
      </Section>
      <ShortenLinks data={data} />
      <Stats />
    </Div>
  );
}

export default MiddleSection;
const Div = styled.div`
  background-color: #bfbfbf;
  margin-bottom: 0;
  padding-bottom: 50px;
`;
const Section = styled.div`
  max-width: 80%;
  margin: 0 auto;
  background-image: url("/images/bg-shorten-desktop.svg");
  background-color: #3b3054;
  position: relative;
  top: -50px;

  height: 100px;
  text-align: center;
  border-radius: 5px;
  @media only screen and (max-width: 600px) {
    max-width: 85%;
    height: 180px;
    background-image: url("/images/bg-shorten-mobile.svg");
  }
`;
const Form = styled.form`
  display: flex;
  height: 40px;
  width: 100%;

  padding: 10px;
  padding-top: 25px;
  p {
    font-size: 12px;
    color: #f46262;
    position: absolute;
    visibility: hidden;
    padding-left: 10px;
    font-style: italic;
    font-weight: 200;
    bottom: -5px;
  }
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    margin: 10px;
    padding: 0;
    padding-top: 25px;
    p {
      font-size: 10px;
      color: #f46262;
      text-align: start;
      margin-top: 0;
      position: relative;
      margin-bottom: 10px;
    }
  }
`;
const Input = styled.input`
  height: 5px;
  width: 70%;

  border: ${(props) => (props.codeRed ? "1px solid red" : "none")};
  outline: none;
  border-radius: 5px;
  padding: 20px;
  ::placeholder {
    color: ${(props) => (props.codeRed ? "red" : "black")};
    opacity: 0.7;
  }
  @media only screen and (max-width: 600px) {
    width: 80%;
    margin-bottom: 0px;
  }
`;
const Button = styled.button`
  height: 45px;
  margin-left: 10px;
  width: 20%;
  outline: none;
  border: none;
  background: none;
  background-color: #2acfcf;
  color: #fff;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 18px;
  font-family: "Poppins", sans-serif;
  :hover {
    opacity: 0.5;
  }
  :disabled {
    background-color: black;
  }
  @media only screen and (max-width: 600px) {
    width: 92%;
    height: 80px;
    padding: 10px;
    margin-top: 10px;
    margin-left: 0;
  }
`;

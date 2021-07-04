import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import styled from "styled-components";

function ShortenLinks({ data }) {
  let copied = false;
  function onCopy() {
    copied = true;
  }
  function handleClick(e) {
    if (copied) {
      e.target.innerHTML = "Copied!";
      e.target.style.backgroundColor = "#3b3054";
      e.target.style.color = "#fff";
      setTimeout(() => {
        e.target.innerHTML = "Copy";
        e.target.style.backgroundColor = " #2acfcf";
        e.target.style.color = "#fff";
      }, 2000);
    }
  }
  return (
    <LinkSection>
      {data.map((data) => {
        return (
          <ShortenLink key={data.shortlink}>
            <p>{data.original}</p>
            <a href={data.shortenLink} target="_blank">
              {data.shortenLink}
            </a>

            <CopyToClipboard onCopy={onCopy} text={data.shortenLink}>
              <button onClick={(e) => handleClick(e)}>Copy</button>
            </CopyToClipboard>
          </ShortenLink>
        );
      })}
    </LinkSection>
  );
}

export default ShortenLinks;
const LinkSection = styled.div`
  max-width: 80%;
  margin: 0 auto;
  margin-top: -20px;
  padding: 20px;
  @media only screen and (max-width: 600px) {
    width: 100%;
    padding-left: 0;
  }
`;
const ShortenLink = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  margin-bottom: 20px;
  border-radius: 5px;
  padding: 10px;

  p {
    width: 60%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  a {
    width: 30%;
    text-decoration: none;
    color: #2acfcf;
    padding-top: 20px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  button {
    border: none;
    background-color: #2acfcf;
    color: #fff;
    outline: none;
    border-radius: 5px;
    margin-left: 30px;
    width: 10%;
    margin-top: 10px;
    cursor: pointer;
    font-size: 15px;
    height: 40px;
    margin-left: -10px;

    :hover {
      opacity: 0.5;
    }
  }
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    font-size: 16px;
    padding-bottom: 5px;
    justify-content: center;
    width: 100%;

    a {
      width: 80%;
      margin-left: 10px;
      padding-bottom: 10px;
    }
    button {
      width: 90%;
      margin: 0 auto;
      margin-bottom: 10px;
    }
    p {
      border-bottom: 1px solid #3b3054;
      width: 100%;
      margin-bottom: 0px;
      margin-top: 15px;

      padding-bottom: 20px;
    }
  }
`;

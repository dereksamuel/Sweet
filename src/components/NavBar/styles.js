/* eslint-disable max-len */
import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const Nav = styled.nav`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 196, 196, 0.88) 46.35%, #EB8C8C 100%);
  position: fixed;
  min-height: 178px;
  bottom: 0;
  width: 100%;
  max-width: 500px;
  margin: auto;
  display: block;
  .links {
    position: relative;
    min-height: 178px;
    button, div {
      position: absolute;
    }
    .Button1 {
      left: 20px;
      bottom: 37px;
    }

    .Button2 {
      left: 50%;
      transform: translateX(-50%);
      top: 0;
    }

    div {
      left: 50%;
      transform: translateX(-50%);
      bottom: 0;
    }

    .Button3 {
      right: 20px;
      bottom: 37px;
    }
  }
`;

export const Link = styled(LinkRouter)`
  border: none;
  outline: none;
  border-radius: 50%;
  padding: 1rem;
  font-size: ${({ active }) => {
    return active ? "35px" : "30px";
  }};
  background-color: ${({ active }) => {
    return active ? "#6764DF" : "#E4DEDE";
  }};
  color: ${({ active }) => {
    return active ? "#FFFFFF" : "#A49DCC";
  }};
  display: flex;
  justify-content: center;
  align-items: center;
`;

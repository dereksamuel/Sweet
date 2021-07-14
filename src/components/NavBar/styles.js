/* eslint-disable no-extra-boolean-cast */
/* eslint-disable max-len */
import styled from "styled-components";
import { Link } from "react-router-dom";
import { fadeIn } from "../../styles/animation";

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
    button, a, div {
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

export const ButtonLink = styled(Link)`
  border: none;
  outline: none;
  border-radius: 50%;
  padding: 1rem;
  font-size: ${({ active }) => {
    return JSON.parse(active) ? "35px" : "30px";
  }};
  background-color: ${({ active }) => {
    return JSON.parse(active) ? "#6764DF" : "#E4DEDE";
  }};
  color: ${({ active }) => {
    return JSON.parse(active) ? "#FFFFFF" : "#A49DCC";
  }};
  transition: 0.3s all;
  animation: ${fadeIn("1s", "ease")};
  display: flex;
  justify-content: center;
  align-items: center;
`;

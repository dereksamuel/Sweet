import { css, keyframes } from "styled-components";

export const fadeIn = ({ time = "1", type = "ease" } = {}) => {
  return css`animation: ${time}s ${fadeInKeyFrames} ${type} alternate;`;
};

const fadeInKeyFrames = keyframes`
  0% {
    filter: blur(6px);
    opacity: 0;
  }
  100% {
    filter: blur(0);
    opacity: 1;
  }
`;
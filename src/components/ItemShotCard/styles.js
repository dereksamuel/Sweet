import styled, { keyframes } from "styled-components";
import { fadeIn } from "../../styles/animation";

const scaleRotate = keyframes`
  0% {
    opacity: 0.5;
    transform: scale(0.3) rotate(-360deg);
  }
  50% {
    transform: scale(0.5) rotate(180deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
`;

export const Card = styled.figure`
  width: 100%;
  min-width: 100%;
  padding: 32px;
  display: block;
  max-width: 350px;
  min-height: 350px;
  .container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    flex-wrap: wrap;
    .category {
      background: #CD9B68;
      padding: 1rem;
      color: #ffffffdd;
      border-radius: 5px;
      font-style: italic;
      font-size: 17px;
      width: 140px;
      overflow-x: auto;
      text-align: center;
      line-height: 19.92px;
    }
  }
  .favorite {
    /* opacity: 0; */
    transform: scale(0.2);
    transition: 0.1s transform;
    animation: 0.8s ${scaleRotate} ease-in-out forwards;
    will-change: transform opacity;
  }
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 30px;
  height: 100%;
  margin: auto;
  max-height: 230px;
  object-fit: cover;
  ${fadeIn({ time: 1, type: "ease", })}
`;

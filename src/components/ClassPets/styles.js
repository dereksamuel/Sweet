import styled, { css } from "styled-components";
import { fadeIn } from "../../styles/animation";

export const List = styled.ul`
  display: flex;
  align-items: center;
  min-height: 96px;
  width: 100%;
  max-width: 100%;
  background-color: #4D4B5B;
  overflow-x: auto;
  list-style: none;
  padding: 0;
  ${({ fixed }) => fixed && css`
    position: fixed;
    z-index: 100;
    top: 5px;
    left: 0;
    right: 0;
    max-width: 350px;
    margin: auto;
    border-radius: 10px;
    ${fadeIn("0.1s", "ease")}
  `}
  &::-webkit-scrollbar-thumb {
    background: #4D4B5B;
    border-radius: 4px;
  }

  /* Cambiamos el fondo y agregamos una sombra cuando esté en hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #85819c;
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
  }

  /* Cambiamos el fondo cuando esté en active */
  &::-webkit-scrollbar-thumb:active {
    background-color: #85819d;
  }

  &::-webkit-scrollbar-track {
    background: #585666;
    border-radius: 4px;
  }

  /* Cambiamos el fondo cuando esté en active o hover */
  &::-webkit-scrollbar-track:hover,
  &::-webkit-scrollbar-track:active {
    background: #585555;
  }
`;

export const Item = styled.li`
  margin-left: 20px;
  &:nth-child(1) {
    margin-left: 12px;
  }
`;

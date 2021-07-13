import styled from "styled-components";
import { Link } from "react-router-dom";

export const Anchor = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  transform: rotate(-10deg);
  transition: 0.2s transform;
  transition-delay: 0.5s;
  &:hover {
    transition-delay: 0s;
    transform: rotate(0deg);
  }
`;

import styled from "styled-components";

export const Anchor = styled.a`
  text-decoration: none;
  cursor: pointer;
  margin-left: 20px;
  &:nth-child(1) {
    margin: 0;
  }
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

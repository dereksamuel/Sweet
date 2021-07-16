import styled from "styled-components";

export const SubmitButton = styled.button`
  background-color: ${(props) => props.color};
  width: 100%;
  box-shadow: 0px 4px 1px #534F6C;
  border-radius: 10px;
  border: none;
  padding: 2.2rem;
  cursor: pointer;
  font-weight: bold;
  font-size: 25px;
  line-height: 29px;
  color: #F2E6E6;
  transition: 0.5s all;
  max-width: ${(props) => props.maxAll};
  margin: auto;
  display: block;
  &:focus {
    box-shadow: none;
  }
`;
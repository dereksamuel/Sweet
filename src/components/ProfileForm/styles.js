import styled, { css } from "styled-components";

export const Form = styled.form`
  padding: 50px;
`;

export const Button = styled.button`
  background-color: #7E76AB;
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
  &:hover {
    background-color: #7a66AB;
  }
  &:focus {
    box-shadow: none;
  }
`;

export const Input = styled.input`
  background-color: #F9F4F4;
  width: 100%;
  border-radius: 10px;
  border: none;
  padding: 2.5rem;
  color: gray;
  transition: 0.5s all;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  outline: none;
  margin-bottom: 45px;
  &:hover {
    background-color: #F1F6f9;
  }
`;

export const Label = styled.div`
  background-color: #FBE4E4;
  width: 100%;
  border-radius: 10px;
  border: none;
  padding: 2.5rem;
  transition: 0.5s all;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  outline: none;
  margin-bottom: 45px;
  ${({ maxWidthDk }) => {
    return maxWidthDk ? css`
      max-width: ${maxWidthDk};
      margin: auto;
      display: block;
    ` : "";
  }}
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  color: 565252;
  margin-bottom: 40px;
  strong {
    color: #E07777;
    margin-right: 0.5rem;
  }
`;

export const ButtonChange = styled.button`
  background-color: #69667b;
  box-shadow: 0px 4px 1px #534F6C;
  border-radius: 10px;
  border: none;
  min-width: 120px;
  padding: 9px;
  cursor: pointer;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  color: #F2E6E6;
  transition: 0.5s all;
  margin-bottom: 42px;
  &:hover {
    background-color: #69667e;
  }
  &:focus {
    box-shadow: none;
  }
`;

export const Error = styled.span`
  color: red;
  font-size: 1.5rem;
  padding: 1rem;
`;

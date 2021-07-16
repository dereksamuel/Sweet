import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    font-weight: bold;
    font-size: 4rem;
    color: red;
  }
  img {
    max-width: 300px;
    margin: auto;
    display: block;
  }
  p {
    font-size: 2rem;
  }
`;
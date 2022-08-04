import styled from "styled-components";

export const DivTopMovies = styled.div`
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  width: min-content;
  height: 280px;
  align-items: center;
  align-self: center;

  img {
    height: 150px;
    display: flex !important;
    justify-content: center !important;
    align-items: center;
    align-self: center;
  }

  a {
    text-decoration: none;
    color: inherit;    
  }
`;

export const DivContent = styled.div`
  display: flex !important;
  flex-wrap: wrap;
  justify-content: space-evenly;
`
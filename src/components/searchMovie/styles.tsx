import styled from "styled-components";

export const DivTopMovies = styled.div`
  display: flex !important;
  flex-direction: column;
  width: min-content;
  padding: 10px;
  margin: 5px;
  background-color: #001529;
  border: black 1px solid;
  border-radius: 15px;
  box-shadow: 10px 5px 5px black;
  :hover {
    background-color: #11283D;
  }

  img {
    height: 300px;
    display: flex !important;
    justify-content: center !important;
    align-items: center;
    align-self: center;
    width: 200px;
  }

  a {
    text-decoration: none;
    color: inherit;    
  }

  h4 {
    color: inherit
  }
`;

export const DivContent = styled.div`
  display: flex !important;
  flex-wrap: wrap;
  justify-content: space-evenly;
`
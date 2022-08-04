import styled from "styled-components";

export const DivTopMovies = styled.div`
  display: flex !important;
  flex-direction: column;
  height: 280px;
  padding: 15px;
  margin: 0px;
  :hover {
    background-color: #11283d;
  }

  img {
    height: 150px;
    display: flex !important;
    justify-content: center !important;
    align-items: center;
    align-self: center;
    box-shadow: 10px 5px 5px black;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h3 {
    color: inherit;
  }
`;

export const DivContent = styled.div`
  background-color: #001529;
  border-radius: 20px;
  color: white;
  box-shadow: 10px 5px 5px black;
`;

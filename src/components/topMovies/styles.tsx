import styled from "styled-components";

export const DivTopMovies = styled.div`
  display: flex !important;
  flex-direction: column;
  height: 315px;
  padding: 20px;
  margin: 0px;
  :hover {
    background-color: #11283d;
  }

  img {
    height: 200px;
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
    margin: 0;
  }

  h4 {
      color: inherit;
    margin: 0;
    margin-top: 10px;
  }


  p {
    margin: 0
  }
`;

export const DivContent = styled.div`
  background-color: #001529;
  border-radius: 20px;
  color: white;
  box-shadow: 10px 5px 5px black; 
  
   h2 {
    display: flex;
    justify-content: flex-start;
    text-align: start;
    color: inherit;
    margin-left: 70px;
    padding-top: 15px;
  }

`;

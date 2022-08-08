import styled from "styled-components";

export const DivTopMovies = styled.div`
  display: flex !important;
  flex-direction: column;
  justify-content: start;
  align-self: flex-start;
  width: 70vw;
  height: fit-content;
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
    height: fit-content;
    display: flex !important;
    justify-content: flex-start !important;
    align-items: flex-start !important;
    align-self: flex-start;
    width: 300px;
  }

  a {
    text-decoration: none;
    color: inherit;    
  }

  h4, h1 {
    color: inherit
  }
  
  p {
    margin: 0;
  }
`;

export const DivContent = styled.div`
  display: flex !important;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

export const DivContentDetail = styled.div`
display: flex;
margin-top: 30px;
margin-left: 15px;
margin-right: 15px;
text-align: justify;
`
export const DivCredits = styled.div`
  img {
    height: 150px;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    align-self: center !important;
    width: 100px;
    margin-top: 15px;
  }

  a {
    text-decoration: none;
    color: inherit;    
  }

 p{
  font-size: smaller;
 }
`;
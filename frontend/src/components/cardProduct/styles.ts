import styled from "styled-components";

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  justify-self: center;
  background-color: #ffffff;
  width: 20vw;
  height: 5vh;
  border-radius: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  align-content: space-around;
  padding: 3rem;
 
`
export const BoxNameProduct = styled.div`
  color: black;
  text-align: start;
  margin: 0.05rem;
  font-size: 0.9rem;
  margin-top: 0.6rem;
  font-family: "Asap", sans-serif;
  font-weight: 600;

`
export const BoxPriceProduct = styled.div`
  color: "22A577";
  text-align: end;
  font-family: "Asap", sans-serif;
  font-size: 2rem;
  font-weight: 600;
  margin-top: 1rem;

`

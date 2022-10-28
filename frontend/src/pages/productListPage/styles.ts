import styled from "styled-components";

export const ContainerProductList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 10rem;
  height: 100%;
  width: 100%;
  padding-top: 2rem;
  background-color: #29a67a;
  padding-bottom: 2rem;
  min-height: 47vh;
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
  background-color: #29a67a;

  text svg {
    position: absolute;
    transform: translate(18px, 15px);
  }
`;

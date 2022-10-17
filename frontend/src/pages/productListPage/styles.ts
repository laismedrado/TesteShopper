import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 150px;
  grid-auto-columns: -70px;
  align-self: center;
  margin-top: 0.3rem;
  height: 100%;
  width: 100%;
  padding-top: 2rem;
  background-color: #22a577;
  grid-row-gap: -10rem;
`;

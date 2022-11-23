import styled from "styled-components";

export const ContainerListManagement = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #29a67a;
  margin-top: 3rem;
`;
export const Container = styled.div`
  min-height: 53vh;
  background-color: #29a67a;
`;
export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr;
  justify-self: center;
  align-content: center;
  justify-content: center;
  width: 100%;
  height: 1.5rem;
  background-color: #29a67a;
  padding: 1rem;
  margin-top: -3rem;
  border-radius: 0.1rem;
  z-index: 10;
  position: fixed;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;
export const BoxNameProduct = styled.div`
  display: flex;
  text-align: start;
  font-weight: 600;
  font-size: 1rem;
  align-items: center;
`;
export const PaginationField = styled.div`
  display: flex;
  background-color: #29a67a;
  padding: 1rem;
  align-items: center;
  justify-content: center;
`;

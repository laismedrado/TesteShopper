import styled from "styled-components";

export const ContainerModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  font-size: 1rem;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  color: black;
`;
export const TitleModal = styled.text`
  display: flex;
  font-weight: 1000;

  width: 100%;

  font-size: 1.5rem;
`;

export const TitleInput = styled.text`
  margin-bottom: 0.5rem;
  margin-top: 1rem;
  font-weight: 600;
`;

export const FieldHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const InputField = styled.input`
  margin-top: 2rem;
`;

export const BoxField = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  flex-direction: column;
  width: 100%;
`;

export const BoxButton = styled.div`
  display: flex;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  justify-content: space-between;
  width: 100%;
`;

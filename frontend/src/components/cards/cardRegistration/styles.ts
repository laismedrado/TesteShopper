import styled from "styled-components";

export const ContainerRegistration = styled.div`
  justify-content: space-around;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-content: center;
  width: 20vw;
  height: 45vh;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;
export const TextDescriptionField = styled.text`
  font-weight: 700;
  font-size: 0.8rem;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;
export const TitleField = styled.text`
  width: 100%;
  font-size: 1rem;
  font-weight: 800;
  margin-bottom: 0.3rem;
`;
export const BoxButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

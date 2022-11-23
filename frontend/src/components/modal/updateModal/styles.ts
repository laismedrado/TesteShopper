import styled from "styled-components";

export const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export const ContainerModal = styled.div `
display: grid;
grid-template-columns: 2fr 1fr 1fr ;
justify-content: center;
align-content: center;
width: 100%;
font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;


`

export const BoxField = styled.div `
display: grid;
grid-template-columns: 2fr 1fr 1fr 1fr;
justify-content: center;
align-content: center;
width: 100%;
gap:-15rem;
`

export const BoxName = styled.div `
display: grid;
grid-template-columns: 2fr 1fr 1fr ;
justify-content: center;
align-content: center;
width: 100%;
margin-top: -1rem;
gap:-15rem;
`

export const FieldName = styled.text `
font-size: 1rem;
font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-weight: 600;
`
export const FieldTitle = styled.text `
font-size: 1.5rem;
margin-left:.5rem;
font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
font-weight: 600;
`
export const BoxButton = styled.div`
display:flex;
width: 100%;
justify-content: end;
font-size: 1.5rem;
margin-left:-.75rem;
gap:1rem;

`



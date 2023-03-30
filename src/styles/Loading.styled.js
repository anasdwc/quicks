import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoadingStyled = styled.div`
  width: ${(props) => props.size || "65px"};
  height: ${(props) => props.size || "65px"};
  animation: ${spin} 1.5s infinite linear;
  border-radius: 50%;
  border: ${(props) => props.borderSize || "10px"} solid
    ${(props) => props.theme.colors[`${props.colorActive}`] || "#c4c4c4"};
  border-right-color: ${(props) =>
    props.theme.colors[`${props.color}`] || "#f8f8f8"};
  border-bottom-color: ${(props) =>
    props.theme.colors[`${props.color}`] || "#f8f8f8"};
  margin-bottom: ${(props) => props.marginBottom || "18px"};
  margin: ${(props) => props.margin};
`;

export { LoadingStyled };

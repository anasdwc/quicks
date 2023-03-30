import styled from "styled-components";

const PargraphStyled = styled.p`
  color: ${(props) => props.theme.colors[`${props.color || "blue"}`]};
  font-weight: ${(props) => props.fontWeight || "400"};
  font-size: ${(props) => `${props.fontSize}px` || "16px"};
  margin: ${(props) => `${props.margin}px` || "0"};
`;

export { PargraphStyled };

import styled from "styled-components";

const PargraphStyled = styled.p`
  color: ${(props) => props.theme.colors[`${props.color || "blue"}`]};
  font-weight: ${(props) => props.fontWeight || "400"};
  font-size: ${(props) => `${props.fontSize}px` || "16px"};
  margin: ${(props) => `${props.margin}px` || "0"};
`;

const ParagraphLine = styled.p`
  text-align: center;
  margin-bottom: 10px;
  color: ${(props) =>
    props.status ? props.theme.colors.red : props.theme.colors.darkGray};
  font-weight: bold;
  display: flex;
  width: 100%;
  gap: 8px;
  align-items: center;
  justify-content: space-between;

  &:after,
  &:before {
    content: " ";
    width: 34%;
    background-color: ${(props) =>
      props.status == true
        ? props.theme.colors.red
        : props.theme.colors.darkGray};
    display: inline-block;
    height: 1px;
  }
`;

export { PargraphStyled, ParagraphLine };

import styled, { css, keyframes } from "styled-components";

const toLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const animation = css`
  animation: ${toLeft} 0.5s ease;
  right: ${(props) => props.right || props.right};
`;

const transparent = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const animationPara = css`
  animation: ${transparent} 0.8s ease;
  opacity: 1;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  display: inline-block;
  bottom: 27px;
  /* right: ${(props) => (props.right ? props.right : "34px")}; */
  right: 34px;

  ${(props) => (props.isExpanded ? animation : "")}

  & > p {
    opacity: 0;
    color: white;
    text-align: center;
    padding-bottom: 12px;
    font-size: 14px;

    ${(props) => (props.isExpanded ? animationPara : "")}
  }
`;

export const CircleButton = styled.button`
  background-color: ${(props) =>
    props.theme.colors[`${props.bgColor || "gray"}`]};
  border: none;
  width: 56px;
  height: 56px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  position: relative;
  z-index: 1;
`;

export const CloseButton = styled(CircleButton)`
  background-color: ${(props) => props.theme.colors.darkGray};
  position: absolute;
  bottom: 0;
  right: 15px;
  z-index: 0;
`;

export const ButtonStyled = styled.button`
  background-color: ${(props) =>
    props.theme.colors[`${props.bgColor || "blue"}`]};
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  color: white;
`;

export const ButtonIconStyled = styled.button`
  padding: 0;
  width: fit-content;
  height: fit-content;
  border: none;
  background-color: transparent;
  margin: ${(props) => props.margin || "auto"};

  & > img {
    width: ${(props) => props.size || "24px"};
    height: ${(props) => props.size || "24px"};
  }
`;

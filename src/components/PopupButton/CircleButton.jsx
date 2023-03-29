import React from "react";
import { ButtonContainer, CircleButton } from "../../styles/Button.styled";

function PopupAction({
  isExpanded,
  right,
  handleClick,
  iconUrl,
  bgColor,
  title,
}) {
  let calculateRightAnimation = 34 + 56 * right + 24 * right;

  return (
    <ButtonContainer
      isExpanded={isExpanded}
      right={`${calculateRightAnimation}px`}
    >
      <p>{title}</p>
      <CircleButton
        bgColor={bgColor}
        onClick={handleClick}
      >
        <img
          src={iconUrl}
          alt=""
        />
      </CircleButton>
    </ButtonContainer>
  );
}

export default PopupAction;

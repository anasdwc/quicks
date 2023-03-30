import React from "react";
import {
  ButtonContainer,
  CircleButton,
  CloseButton,
} from "../../styles/Button.styled";
import { PopupContainer } from "../../styles/Container.styled";
import InboxPopup from "../InboxPopup/InboxPopup";

function ActiveButton({ data, handleCloseActiveButton }) {
  return (
    <ButtonContainer>
      <PopupContainer>{data[0].id == "inbox" && <InboxPopup />}</PopupContainer>
      <CircleButton bgColor={data[0].color}>
        <img
          src={data[0].activeIcon}
          alt=""
        />
      </CircleButton>
      <CloseButton onClick={handleCloseActiveButton} />
    </ButtonContainer>
  );
}

export default ActiveButton;

import React from "react";
import styled from "styled-components";
import { PargraphStyled } from "../../styles/Text.styled";
import arrowBackIcon from "../../assets/arrow_back.svg";
import closeIcon from "../../assets/close.svg";
import { ButtonIconStyled } from "../../styles/Button.styled";

const PopupTitleStyled = styled.div`
  display: flex;
  gap: 16px;
  align-items: ${(props) => props.alignItems || "normal"};
  border-bottom: ${(props) => props.borderBottom || "none"};
  margin: -20px -34px;
  padding: 18px 34px;
`;

function PopupTitle({ selectedChat, handleClosePopup }) {
  return (
    <PopupTitleStyled
      alignItems="center"
      borderBottom="1px solid #BDBDBD"
    >
      <div className="button-container">
        <ButtonIconStyled onClick={handleClosePopup}>
          <img
            src={arrowBackIcon}
            alt=""
          />
        </ButtonIconStyled>
      </div>
      <div
        className="header-title"
        style={{ flexGrow: 1 }}
      >
        <PargraphStyled fontWeight="bold">{selectedChat.title}</PargraphStyled>
        {selectedChat.participants && (
          <PargraphStyled
            color="#333"
            fontSize={14}
            margin="9px 0 0"
          >
            {selectedChat.participants} Participants
          </PargraphStyled>
        )}
      </div>
      <div className="button-container">
        <ButtonIconStyled onClick={handleClosePopup}>
          <img
            src={closeIcon}
            alt=""
          />
        </ButtonIconStyled>
      </div>
    </PopupTitleStyled>
  );
}

export default PopupTitle;

import React from "react";
import {
  ButtonContainer,
  CircleButton,
  CloseButton,
} from "../../styles/Button.styled";

import searchBlackIcon from "../../assets/search-black.svg";

import styled from "styled-components";

const PopupContainer = styled.div`
  background-color: #fff;
  margin-bottom: 16px;
  height: 60vh;
  width: 30vw;
  padding: 20px 34px;
  position: absolute;
  bottom: 52px;
  right: 0;
  border-radius: 5px;
`;

const RelativeContainer = styled.div`
  position: relative;
`;

const InputStyled = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.colors.lightGray};
`;

const RelativeIcon = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  right: 20px;
`;

const InboxItemStyled = styled.div`
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightGray};
  margin-top: 26px;
  gap: 17px;
  padding-bottom: 32px;
`;

function ActiveButton({ data, handleCloseActiveButton }) {
  return (
    <ButtonContainer>
      <p>{data[0].title}</p>
      <PopupContainer>
        <RelativeContainer className="search">
          <InputStyled
            type="text"
            placeholder="Search"
          />
          <RelativeIcon src={searchBlackIcon} />
        </RelativeContainer>
        <div className="inbox-list">
          <InboxItemStyled>
            <div className="user-img">
              <h1>hl</h1>
            </div>
            <div className="chats">
              <h2>109220-Naturalization</h2>
              <h3>Cameron Phillips</h3>
              <p>Please check this out</p>
            </div>
          </InboxItemStyled>
        </div>
      </PopupContainer>
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

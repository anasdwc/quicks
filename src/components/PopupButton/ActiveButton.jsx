import React, { useEffect, useState } from "react";
import {
  ButtonContainer,
  CircleButton,
  CloseButton,
} from "../../styles/Button.styled";
import { PopupContainer } from "../../styles/Container.styled";
import InboxPopup from "../InboxPopup/InboxPopup";

const inboxData = [
  {
    title: "109220-Naturalization",
    date: "January, 1 2021 19:10",
    lastPerson: "Cameron Phillips",
    lastMessage: "Please check this out",
    isGroup: true,
    hasRead: false,
  },
  {
    title:
      "Jeannette Moraima Guaman Chamba (Huttto I-589) [ Hutto Follow Up - Brief Service ]",
    date: "02/06/2021 10:45",
    lastPerson: "Ellen",
    lastMessage: "Hey, please read.",
    isGroup: true,
    hasRead: true,
  },
  {
    title: "8405-Diana SALAZAR MUNGUIA",
    date: "01/06/2021 12:19",
    lastPerson: "Cameron Phillips",
    lastMessage:
      "I understand your intial concerns and thats very valid, Elizabeth. But you...",
    isGroup: true,
    hasRead: true,
  },
  {
    title: "FastVisa Support",
    date: "01/06/2021 12:19",
    lastPerson: "",
    lastMessage: "Hey there! Welcome to your inbox.",
    isGroup: false,
    hasRead: true,
  },
];

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
  width: 65px;
  height: 65px;
  animation: ${spin} 1.5s infinite linear;
  border-radius: 50%;
  border: solid 10px #c4c4c4;
  border-right-color: #f8f8f8;
  border-bottom-color: #f8f8f8;
  margin-bottom: 18px;
`;

const ColorParagraph = styled.p`
  color: ${(props) => props.theme.colors[`${props.color}`]};
  font-weight: bold;
`;

const FlexCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

function ActiveButton({ data, handleCloseActiveButton }) {
  const [datas, setDatas] = useState([]);
  const [inboxLoading, setInboxLoading] = useState(true);

  // Simulate loading
  useEffect(() => {
    setTimeout(() => {
      setDatas(inboxData);
      setInboxLoading(false);
    }, 3000);
  }, []);

  return (
    <ButtonContainer>
      <PopupContainer>
        {inboxLoading ? (
          <FlexCenter>
            <LoadingStyled />
            <ColorParagraph color="darkGray">Loading Chats...</ColorParagraph>
          </FlexCenter>
        ) : (
          data[0].id == "inbox" && <InboxPopup inboxData={datas} />
        )}
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

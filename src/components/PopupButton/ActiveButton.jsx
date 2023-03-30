import React, { useEffect, useState } from "react";
import {
  ButtonContainer,
  CircleButton,
  CloseButton,
} from "../../styles/Button.styled";
import { PopupContainer } from "../../styles/Container.styled";
import { PargraphStyled } from "../../styles/Text.styled";
import InboxPopup from "../InboxPopup/InboxPopup";

const inboxData = [
  {
    id: 1,
    title: "109220-Naturalization",
    date: "January, 1 2021 19:10",
    lastPerson: "Cameron Phillips",
    lastMessage: "Please check this out",
    isGroup: true,
    hasRead: false,
    participants: 3,
    chats: [
      {
        id: 1,
        message:
          "No worries. It will be completed ASAP. I've asked him yesterday.",
        date: "19:32",
      },
      {
        id: 2,
        user: "Mary Hilda",
        message:
          "Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks.",
        date: "19:32",
      },
      {
        id: 3,
        message:
          "Please contact Mary for questions regarding the case bcs she will be managing your forms from now on! Thanks Mary.",
        date: "19:32",
      },
      {
        id: 4,
        user: "Mary Hilda",
        message: "Sure thing, Claren",
        date: "19:32",
      },
      {
        id: 5,
        user: "Obaidullah Amarkhil",
        message: "Morning. I'll try to do them. Thanks",
        date: "19:32",
      },
    ],
  },
  {
    id: 2,
    title:
      "Jeannette Moraima Guaman Chamba (Huttto I-589) [ Hutto Follow Up - Brief Service ]",
    date: "02/06/2021 10:45",
    lastPerson: "Ellen",
    lastMessage: "Hey, please read.",
    isGroup: true,
    hasRead: true,
    participants: 3,
  },
  {
    id: 3,
    title: "8405-Diana SALAZAR MUNGUIA",
    date: "01/06/2021 12:19",
    lastPerson: "Cameron Phillips",
    lastMessage:
      "I understand your intial concerns and thats very valid, Elizabeth. But you...",
    isGroup: true,
    hasRead: true,
    participants: 3,
  },
  {
    id: 4,
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
            <PargraphStyled color="darkGray">Loading Chats...</PargraphStyled>
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

import React, { useEffect, useState } from "react";
import {
  ButtonContainer,
  CircleButton,
  CloseButton,
} from "../../styles/Button.styled";
import { PopupContainer } from "../../styles/Container.styled";
import { PargraphStyled } from "../../styles/Text.styled";
import InboxPopup from "../InboxPopup/InboxPopup";

const chatsData = [
  {
    id: 6,
    user: "Mary Hilda",
    message: "Juadahis updates yea?",
    date: "19:32",
  },
  {
    id: 0,
    user: "Mary Hilda",
    message: "Just Fill me in for his updates yea?",
    date: "19:32",
  },
  {
    id: 1,
    message: "No worries. It will be completed ASAP. I've asked him yesterday.",
    date: "19:32",
  },
  {
    id: 2,
    user: "Mary Hilda",
    message:
      "Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks.",
    date: "19:32",
    dateTime: "Today June 09, 2021",
  },
  {
    id: 3,
    message:
      "Please contact Mary for questions regarding the case bcs she will be managing your forms from now on! Thanks Mary.",
    date: "19:32",
    dateTime: "Today June 09, 2021",
  },
  {
    id: 4,
    user: "Mary Hilda",
    message: "Sure thing, Claren",
    date: "19:32",
    dateTime: "Today June 09, 2021",
  },
  {
    id: 5,
    user: "Obaidullah Amarkhil",
    message: "Morning. I'll try to do them. Thanks",
    date: "19:32",
    dateTime: "New",
  },
];

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
    chats: chatsData,
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
    chats: chatsData,
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
    chats: chatsData,
  },
  {
    id: 4,
    title: "FastVisa Support",
    date: "01/06/2021 12:19",
    lastPerson: "",
    lastMessage: "Hey there! Welcome to your inbox.",
    isGroup: false,
    hasRead: true,
    isSupport: true,
    chats: [
      {
        id: 1,
        user: "FastVisa Support",
        message:
          "Hey there. Welcome to your inbox! Contact us for more information and help about anything! We'll send you a response as soon as possible.",
        date: "19:32",
        isSupport: true,
      },
      {
        id: 2,
        message: "Hi, I need help with something can you help me?",
        date: "19:32",
      },
    ],
  },
];

import styled from "styled-components";
import { LoadingStyled } from "../../styles/Loading.styled";

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

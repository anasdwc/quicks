import React from "react";
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

function ActiveButton({ data, handleCloseActiveButton }) {
  return (
    <ButtonContainer>
      <PopupContainer>
        {data[0].id == "inbox" && <InboxPopup inboxData={inboxData} />}
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

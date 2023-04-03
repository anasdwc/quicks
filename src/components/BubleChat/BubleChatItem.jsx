import React from "react";
import moreIcon from "../../assets/more.svg";
import { ParagraphLine } from "../../styles/Text.styled";
import { ButtonIconStyled } from "../../styles/Button.styled";
import {
  BubleChatContainer,
  ChatItemContainer,
  BubleChat,
} from "./BubleChat.styled";

function BubleChatItem({ chat, idx, toggleOption }) {
  return (
    <>
      {chat.dateTime && (
        <div>
          <ParagraphLine status={chat.isNew}>{chat.dateTime}</ParagraphLine>
        </div>
      )}
      <ChatItemContainer
        key={idx}
        user={chat.user}
        outlineColor={
          chat.user == "Mary Hilda"
            ? "outlineYellow"
            : chat.user == "Obaidullah Amarkhil"
            ? "outlineGreen"
            : chat.user == "FastVisa Support"
            ? "blue"
            : ""
        }
      >
        <h3>{chat.user || "You"}</h3>
        <BubleChatContainer user={chat.user}>
          {!chat.isSupport && (
            <ButtonIconStyled
              className="bubleAction"
              size="16px"
              margin="0"
              onClick={() => toggleOption(chat)}
            >
              <img
                src={moreIcon}
                alt=""
              />
              {chat.isOption && (
                <OptionChatContainer>
                  <p>Edit</p>
                  <p>Delete</p>
                </OptionChatContainer>
              )}
            </ButtonIconStyled>
          )}
          <BubleChat
            baseColor={
              chat.user == "Mary Hilda"
                ? "baseYellow"
                : chat.user == "Obaidullah Amarkhil"
                ? "baseGreen"
                : chat.user == "FastVisa Support"
                ? "customGray"
                : ""
            }
          >
            <p>{chat.message}</p>
            <p className="date">{chat.date}</p>
          </BubleChat>
        </BubleChatContainer>
      </ChatItemContainer>
    </>
  );
}

export default BubleChatItem;

import { useEffect, useState } from "react";
import styled from "styled-components";
import InboxItem from "./InboxItem";
import SearchInput from "./SearchInput";

import arrowBackIcon from "../../assets/arrow_back.svg";
import closeIcon from "../../assets/close.svg";
import moreIcon from "../../assets/more.svg";
import { PargraphStyled } from "../../styles/Text.styled";
import { InputStyled } from "../../styles/Popup.styled";
import { LoadingStyled } from "../../styles/Loading.styled";

const FlexContainerStyled = styled.div`
  display: flex;
  gap: 16px;
  align-items: ${(props) => props.alignItems || "normal"};
  border-bottom: ${(props) => props.borderBottom || "none"};
  margin: -20px -34px;
  padding: 18px 34px;
`;

const Flexxxx = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "row"};
  justify-content: ${(props) => props.justifyContent || "normal"};
  height: ${(props) => props.height || "auto"};
  gap: ${(props) => props.gap};
  overflow-y: scroll;
  overflow-x: hidden;
`;

const ButtonIconStyled = styled.button`
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

const ButtonStyled = styled.button`
  background-color: ${(props) =>
    props.theme.colors[`${props.bgColor || "blue"}`]};
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  color: white;
`;

const BubleChat = styled.div`
  background-color: ${(props) =>
    props.theme.colors[`${props.baseColor}` || "basePurple"]};
  border-radius: 5px;
  padding: 10px;
  width: fit-content;
  max-width: 80%;

  & > p {
    color: ${(props) => props.theme.colors.darkGray};
    font-size: 14px;
    line-height: 1.25;
  }

  & > .date {
    margin-top: 8px;
  }
`;

const BubleChatContainer = styled.div`
  margin: 7px 0 12px;
  display: flex;
  justify-content: ${(props) => (props.user ? "start" : "end")};
  gap: 5px;
  width: 100%;
  position: relative;

  & > .bubleAction {
    order: ${(props) => (props.user ? 1 : 0)};
  }
`;

const ChatItemContainer = styled.div`
  margin-bottom: 10px;

  & > h3 {
    font-size: 14px;
    color: ${(props) =>
      props.theme.colors[`${props.outlineColor}` || "outlinePurple"]};
    font-weight: bold;
  }

  ${({ user }) =>
    !user &&
    `
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  `}
`;

const OptionChatContainer = styled.div`
  background-color: #fff;
  position: absolute;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  width: 126px;

  & > p {
    padding: 14px 0 11px 18px;
    text-align: left;
    color: ${({ theme }) => theme.colors.red};
  }

  & > p:first-child {
    border-bottom: 1px solid #bdbdbd;
    color: ${({ theme }) => theme.colors.blue};
  }
`;

const InfoContainer = styled.div`
  padding: 10px;
  margin-bottom: 12px;
  background-color: ${({ theme }) => theme.colors.softBlue};
  font-size: 14px;
  border-radius: 5px;
  display: flex;
  gap: 6px;

  & > p {
    margin: auto 0;
    color: ${({ theme }) => theme.colors.darkGray};
    font-weight: bold;
  }
`;

const ParagraphLine = styled.p`
  text-align: center;
  margin-bottom: 10px;
  color: ${(props) =>
    props.status ? props.theme.colors.red : props.theme.colors.darkGray};
  font-weight: bold;
  display: flex;
  width: 100%;
  gap: 8px;
  align-items: center;
  justify-content: space-between;

  &:after,
  &:before {
    content: " ";
    width: 34%;
    background-color: ${(props) =>
      props.status == true
        ? props.theme.colors.red
        : props.theme.colors.darkGray};
    display: inline-block;
    height: 1px;
  }
`;

function InboxPopup({ inboxData }) {
  const [activeChat, setActiveChat] = useState();
  const [selectedChat, setSelectedChat] = useState();
  const [optionChat, setOptionChat] = useState(false);

  const handleActiveChat = (id) => {
    setActiveChat(id);
    const filterChat = inboxData.filter((chat) => chat.id == id);
    setSelectedChat(...filterChat);
  };

  return (
    <>
      {!activeChat && (
        <>
          <SearchInput />
          <div className="inbox-list">
            {inboxData.map((inbox) => (
              <InboxItem
                key={inbox.id}
                {...inbox}
                handleActiveChat={() => handleActiveChat(inbox.id)}
              />
            ))}
          </div>
        </>
      )}
      {activeChat && (
        <>
          <Flexxxx
            justifyContent="space-between"
            height="100%"
            flexDirection="column"
          >
            <FlexContainerStyled
              alignItems="center"
              borderBottom="1px solid #BDBDBD"
            >
              <div className="button-container">
                <ButtonIconStyled onClick={() => setActiveChat()}>
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
                <PargraphStyled fontWeight="bold">
                  {selectedChat.title}
                </PargraphStyled>
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
                <ButtonIconStyled onClick={() => setActiveChat()}>
                  <img
                    src={closeIcon}
                    alt=""
                  />
                </ButtonIconStyled>
              </div>
            </FlexContainerStyled>
            <Flexxxx
              flexDirection="column"
              style={{ flexGrow: 1, marginTop: "40px", marginBottom: "25px" }}
            >
              {selectedChat.chats.map((chat, idx) => (
                <>
                  {chat.dateTime && (
                    <div>
                      <ParagraphLine status={chat.isNew}>
                        {chat.dateTime}
                      </ParagraphLine>
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
                          onClick={() => {
                            setOptionChat(!optionChat);
                            chat.isOption = optionChat;
                          }}
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
              ))}
            </Flexxxx>
            {selectedChat.isSupport && (
              <InfoContainer>
                <LoadingStyled
                  marginBottom="0"
                  margin="6px"
                  size="18px"
                  borderSize="2px"
                  colorActive="blue"
                  color="customGray"
                />
                <p>Please wait while we connect you with one of our team...</p>
              </InfoContainer>
            )}
            <Flexxxx gap="10px">
              <InputStyled
                type="text"
                placeholder="Type a new message"
              />
              <ButtonStyled>Send</ButtonStyled>
            </Flexxxx>
          </Flexxxx>
        </>
      )}
    </>
  );
}

export default InboxPopup;

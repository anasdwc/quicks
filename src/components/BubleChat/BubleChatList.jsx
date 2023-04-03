import React, { useState } from "react";
import BubleChatItem from "./BubleChatItem";
import SupportBuble from "./SupportBuble";
import { FlexContainer } from "../../styles/Container.styled";

function BubleChatList({ selectedChat }) {
  const [optionChat, setOptionChat] = useState(false);

  const toggleOption = (chat) => {
    setOptionChat(!optionChat);
    chat.isOption = optionChat;
  };

  return (
    <>
      <FlexContainer
        flexDirection="column"
        style={{ flexGrow: 1, marginTop: "40px", marginBottom: "25px" }}
      >
        {selectedChat.chats.map((chat, idx) => (
          <BubleChatItem
            key={idx}
            chat={chat}
            idx={idx}
            toggleOption={(chat) => toggleOption(chat)}
          />
        ))}
      </FlexContainer>
      {selectedChat.isSupport && <SupportBuble />}
    </>
  );
}

export default BubleChatList;

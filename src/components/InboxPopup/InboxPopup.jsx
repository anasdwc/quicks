import { useState } from "react";
import { FlexContainer } from "../../styles/Container.styled";

import InboxList from "./InboxList";
import PopupTitle from "./PopupTitle";
import BubleChatList from "../BubleChat/BubleChatList";
import BubleChatInput from "../BubleChat/BubleChatInput";

function InboxPopup({ inboxData }) {
  const [activeChat, setActiveChat] = useState();
  const [selectedChat, setSelectedChat] = useState();

  const handleActiveChat = (id) => {
    setActiveChat(id);
    const filterChat = inboxData.filter((chat) => chat.id == id);
    setSelectedChat(...filterChat);
  };

  const handleClosePopup = () => setActiveChat();

  return (
    <>
      {!activeChat && (
        <InboxList
          inboxData={inboxData}
          handleActiveChat={handleActiveChat}
        />
      )}
      {activeChat && (
        <>
          <FlexContainer
            justifyContent="space-between"
            height="100%"
            flexDirection="column"
          >
            <PopupTitle
              selectedChat={selectedChat}
              handleClosePopup={handleClosePopup}
            />
            <BubleChatList selectedChat={selectedChat} />
            <BubleChatInput />
          </FlexContainer>
        </>
      )}
    </>
  );
}

export default InboxPopup;

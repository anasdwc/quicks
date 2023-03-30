import { InboxItemStyled } from "../../styles/Popup.styled";
import { GroupIconStyled, IconStyled } from "../../styles/Icon.styled";

import personGrayIcon from "../../assets/person-gray.svg";
import personWhiteIcon from "../../assets/person-white.svg";

function InboxItem({
  title,
  date,
  lastPerson,
  lastMessage,
  isGroup,
  hasRead,
  handleActiveChat,
}) {
  return (
    <InboxItemStyled onClick={handleActiveChat}>
      <GroupIconStyled>
        {isGroup ? (
          <>
            <IconStyled
              bgColor="softGray"
              left={0}
            >
              <img
                src={personGrayIcon}
                alt=""
              />
            </IconStyled>
            <IconStyled
              bgColor="blue"
              right={0}
            >
              <img
                src={personWhiteIcon}
                alt=""
              />
            </IconStyled>
          </>
        ) : (
          <IconStyled bgColor="blue">
            <p>{title[0]}</p>
          </IconStyled>
        )}
      </GroupIconStyled>
      <div className="chats">
        <div className="chats-date">
          <h2>{title}</h2>
          <p>{date}</p>
        </div>
        {lastPerson && <h3>{lastPerson} :</h3>}
        <p>{lastMessage}</p>
      </div>
      {!hasRead && <div className="isRead"></div>}
    </InboxItemStyled>
  );
}

export default InboxItem;

import { InboxItemStyled } from "../../styles/Popup.styled";
import { GroupIconStyled, IconStyled } from "../../styles/Icon.styled";

import personGrayIcon from "../../assets/person-gray.svg";
import personWhiteIcon from "../../assets/person-white.svg";

function InboxItem({ group = true }) {
  return (
    <InboxItemStyled>
      <GroupIconStyled>
        {group ? (
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
            <p>F</p>
          </IconStyled>
        )}
      </GroupIconStyled>
      <div className="chats">
        <div className="chats-date">
          <h2>109220-Naturalization</h2>
          <p>January, 1 2021 19:10</p>
        </div>
        <h3>Cameron Phillips</h3>
        <p>Please check this out</p>
      </div>
      <div className="isRead"></div>
    </InboxItemStyled>
  );
}

export default InboxItem;

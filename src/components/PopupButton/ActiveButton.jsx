import React from "react";
import {
  ButtonContainer,
  CircleButton,
  CloseButton,
} from "../../styles/Button.styled";
import {
  PopupContainer,
  RelativeContainer,
} from "../../styles/Container.styled";
import {
  IconStyled,
  GroupIconStyled,
  AbsoluteIcon,
} from "../../styles/Icon.styled";
import { InputStyled, InboxItemStyled } from "../../styles/Popup.styled";

import personWhiteIcon from "../../assets/person-white.svg";
import personGrayIcon from "../../assets/person-gray.svg";
import searchBlackIcon from "../../assets/search-black.svg";

function ActiveButton({ data, handleCloseActiveButton }) {
  return (
    <ButtonContainer>
      <p>{data[0].title}</p>
      <PopupContainer>
        <RelativeContainer className="search">
          <InputStyled
            type="text"
            placeholder="Search"
          />
          <AbsoluteIcon src={searchBlackIcon} />
        </RelativeContainer>
        <div className="inbox-list">
          <InboxItemStyled>
            <GroupIconStyled>
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
          <InboxItemStyled>
            <div className="user-img">
              <GroupIconStyled>
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
              </GroupIconStyled>
            </div>
            <div className="chats">
              <div className="chats-date">
                <h2>
                  Jeannette Moraima Guaman Chamba (Hutto I-5859)[Hutto Follow Up
                  - Brief Service]
                </h2>
                <p>02/06/2021 10:45</p>
              </div>
              <h3>Cameron Phillips</h3>
              <p>Please check this out</p>
            </div>
          </InboxItemStyled>
          <InboxItemStyled>
            <div className="user-img">
              <GroupIconStyled>
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
              </GroupIconStyled>
            </div>
            <div className="chats">
              <div className="chats-date">
                <h2>109220-Naturalization</h2>
                <p>January, 1 2021 19:10</p>
              </div>
              <h3>Cameron Phillips</h3>
              <p>Please check this out</p>
            </div>
          </InboxItemStyled>
          <InboxItemStyled>
            <GroupIconStyled>
              <IconStyled bgColor="blue">
                <p>F</p>
              </IconStyled>
            </GroupIconStyled>
            <div className="chats">
              <div className="chats-date">
                <h2>109220-Naturalization</h2>
                <p>January, 1 2021 19:10</p>
              </div>
              <h3>Cameron Phillips</h3>
              <p>Please check this out</p>
            </div>
          </InboxItemStyled>
        </div>
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

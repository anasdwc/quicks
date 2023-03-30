import React from "react";
import {
  ButtonContainer,
  CircleButton,
  CloseButton,
} from "../../styles/Button.styled";

import personWhiteIcon from "../../assets/person-white.svg";
import personGrayIcon from "../../assets/person-gray.svg";

import searchBlackIcon from "../../assets/search-black.svg";

import styled from "styled-components";

const PopupContainer = styled.div`
  background-color: #fff;
  margin-bottom: 16px;
  height: 60vh;
  width: 30vw;
  padding: 20px 34px;
  position: absolute;
  bottom: 52px;
  right: 0;
  border-radius: 5px;
`;

const RelativeContainer = styled.div`
  position: relative;
`;

const InputStyled = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.colors.lightGray};
`;

const RelativeIcon = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  right: 20px;
`;

const InboxItemStyled = styled.div`
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightGray};
  margin-top: 26px;
  gap: 17px;
  position: relative;
  padding-bottom: 32px;

  & > .isRead {
    background-color: red;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
  }

  & > .chats {
    .chats-date {
      display: flex;
      gap: 16px;
    }

    h2 {
      color: ${(props) => props.theme.colors.blue};
      font-size: 16px;
      margin-bottom: 8px;
      flex: 1;
      line-height: 1.25;
    }

    h2,
    h3 {
      font-weight: bold;
    }

    h3,
    p {
      font-size: 14px;
      color: ${(props) => props.theme.colors.darkGray};
    }

    h3 {
      margin-bottom: 4px;
    }
  }
`;

const IconStyled = styled.div`
  background-color: ${(props) => props.theme.colors[`${props.bgColor}`]};
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: ${(props) => props.position || "absolute"};
  right: ${(props) => props.right};
  left: ${(props) => props.left};

  & > p {
    color: white;
  }
`;

const GroupIconStyled = styled.div`
  display: flex;
  position: relative;
  width: 51px;
  height: 34px;
  flex-shrink: 0;
  justify-content: center;
`;

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
          <RelativeIcon src={searchBlackIcon} />
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

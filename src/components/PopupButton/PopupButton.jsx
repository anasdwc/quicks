import React from "react";

import styled from "styled-components";

import cloudLightningIcon from "../../assets/cloud-lightning.svg";
import inboxIcon from "../../assets/inbox2.svg";
import taskIcon from "../../assets/task2.svg";

const CircleButton = styled.button`
  background-color: ${(props) =>
    props.theme.colors.primary[`${props.bgColor || "gray"}`]};
  border: none;
  width: 56px;
  height: 56px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

const ButtonContainer = styled.div`
  position: absolute;
  display: inline-block;
  bottom: 27px;
  right: ${(props) => (props.right ? props.right : "34px")};

  & > p {
    color: white;
    text-align: center;
    padding-bottom: 12px;
    font-size: 14px;
  }
`;

function PopupButton() {
  return (
    <div>
      <ButtonContainer right={`${34 + 56 + 24}px`}>
        <p>Inbox</p>
        <CircleButton>
          <img
            src={inboxIcon}
            alt=""
          />
        </CircleButton>
      </ButtonContainer>
      <ButtonContainer right={`${34 + 56 * 2 + 24 * 2}px`}>
        <p>Task</p>
        <CircleButton>
          <img
            src={taskIcon}
            alt=""
          />
        </CircleButton>
      </ButtonContainer>
      <ButtonContainer>
        <CircleButton bgColor="blue">
          <img
            src={cloudLightningIcon}
            alt=""
          />
        </CircleButton>
      </ButtonContainer>
    </div>
  );
}

export default PopupButton;

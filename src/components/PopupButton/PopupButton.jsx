import React from "react";
import { useState } from "react";

import styled, { css, keyframes } from "styled-components";

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

const buttonData = [
  {
    title: "Inbox",
    iconUrl: inboxIcon,
  },
  {
    title: "Task",
    iconUrl: taskIcon,
  },
];

const toLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const animation = css`
  animation: ${toLeft} 0.5s ease;
  right: ${(props) => props.right || props.right};
`;

const transparent = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const toRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(500px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const animationRight = css`
  animation: ${toRight} 1s ease;
`;

const animationPara = css`
  animation: ${transparent} 0.8s ease;
  opacity: 1;
`;

const ButtonContainer = styled.div`
  position: absolute;
  display: inline-block;
  bottom: 27px;
  /* right: ${(props) => (props.right ? props.right : "34px")}; */
  right: 34px;

  ${(props) => (props.isExpanded ? animation : "")}

  & > p {
    opacity: 0;
    color: white;
    text-align: center;
    padding-bottom: 12px;
    font-size: 14px;

    ${(props) => (props.isExpanded ? animationPara : "")}
  }
`;

function PopupButton() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <ButtonContainer
        isExpanded={isExpanded}
        right={`${34 + 56 + 24}px`}
      >
        <p>Inbox</p>
        <CircleButton>
          <img
            src={inboxIcon}
            alt=""
          />
        </CircleButton>
      </ButtonContainer>
      <ButtonContainer
        isExpanded={isExpanded}
        right={`${34 + 56 * 2 + 24 * 2}px`}
      >
        <p>Task</p>
        <CircleButton>
          <img
            src={taskIcon}
            alt=""
          />
        </CircleButton>
      </ButtonContainer>
      <ButtonContainer>
        <CircleButton
          bgColor="blue"
          onClick={() => setIsExpanded(!isExpanded)}
        >
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

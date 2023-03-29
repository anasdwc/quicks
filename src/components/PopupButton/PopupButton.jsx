import React from "react";
import { useState, useEffect } from "react";

import cloudLightningIcon from "../../assets/cloud-lightning.svg";
import inboxIcon from "../../assets/inbox2.svg";
import taskIcon from "../../assets/task2.svg";
import taskWhiteIcon from "../../assets/task-white.svg";
import inboxWhiteIcon from "../../assets/inbox-white.svg";

import PopupAction from "./CircleButton";
import ActiveButton from "./ActiveButton";

const buttonData = [
  {
    id: "inbox",
    title: "Inbox",
    iconUrl: inboxIcon,
    activeIcon: inboxWhiteIcon,
    color: "purple",
  },
  {
    id: "task",
    title: "Task",
    iconUrl: taskIcon,
    activeIcon: taskWhiteIcon,
    color: "orange",
  },
];

function PopupButton() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [buttonActive, setButtonActive] = useState("");
  const [tempButtonData, setTempButtonData] = useState(buttonData);

  useEffect(() => {
    const notSelected = buttonData.filter(
      (button) => button.id !== buttonActive
    );

    setTempButtonData(notSelected);
  }, [buttonActive]);

  const handleButtonBase = () => {
    setIsExpanded(!isExpanded);
    setButtonActive("");
    setTempButtonData(buttonData);
  };

  const buttonActiveData = buttonData.filter(
    (button) => button.id == buttonActive
  );

  const handleActiveButton = (id) => {
    setButtonActive(id);
  };

  const closeActiveButton = () => {
    setButtonActive("");
    setIsExpanded(false);
  };

  return (
    <>
      {tempButtonData.map((button, idx) => (
        <PopupAction
          key={idx}
          isExpanded={isExpanded}
          handleClick={() => handleActiveButton(button.id)}
          title={button.title}
          iconUrl={button.iconUrl}
          right={idx + 1}
        />
      ))}
      {!buttonActive ? (
        <PopupAction
          bgColor={"blue"}
          iconUrl={cloudLightningIcon}
          handleClick={handleButtonBase}
        />
      ) : (
        <ActiveButton
          data={buttonActiveData}
          handleCloseActiveButton={closeActiveButton}
        />
      )}
    </>
  );
}

export default PopupButton;

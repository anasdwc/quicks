import React, { useEffect, useState } from "react";
import { TaskItemStyled } from "../../styles/Popup.styled";
import DatePicker from "react-date-picker";
import moreIcon from "../../assets/more.svg";
import dateIcon from "../../assets/date.svg";
import expandIcon from "../../assets/expand.svg";
import pencilIcon from "../../assets/pencil.svg";
import CalendarIcon from "./CalendarIcon";
import clsx from "clsx";
import { OptionChatContainer } from "../BubleChat/BubleChat.styled";

function TaskItem({ title, daysLeft, date, description, isDone }) {
  let dateFormatted = date.split("/").map(parseFloat).reverse();
  dateFormatted[1] = dateFormatted[1] - 1;
  const [dateValue, onChange] = useState(new Date(...dateFormatted));
  const [isChecked, setIsChecked] = useState(isDone);
  const [isExpand, setIsExpand] = useState(isChecked ? false : true);
  const [isOption, setIsOption] = useState(false);

  let formattedStringDate = new Intl.DateTimeFormat("id").format(dateValue);

  useEffect(() => {
    if (isChecked) {
      setIsExpand(false);
      return;
    }

    setIsExpand(true);
  }, [isChecked]);

  const handleOption = () => {
    setIsOption(!isOption);
  };

  const handleCheckbox = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <TaskItemStyled>
      <input
        type="checkbox"
        id="checkbox"
        checked={isChecked}
        onChange={handleCheckbox}
      />
      <div className="task-body">
        <div className="task-body-header">
          <div className="label">
            <label
              className={clsx(isChecked && "is-done")}
              htmlFor="checkbox"
            >
              {title}
            </label>
          </div>
          <div className="action-group">
            <p className="left-days">{!isChecked && `${daysLeft} Days Left`}</p>
            <p>{formattedStringDate}</p>
            <img
              onClick={() => setIsExpand(!isExpand)}
              src={expandIcon}
              alt=""
              className={clsx(isExpand && "rotate")}
            />{" "}
            <div>
              <img
                onClick={handleOption}
                src={moreIcon}
                alt=""
              />
              {isOption && (
                <OptionChatContainer
                  right="0"
                  style={{ marginTop: "3px" }}
                >
                  <p style={{ color: "#EB5757" }}>Delete</p>
                </OptionChatContainer>
              )}
            </div>
          </div>
        </div>
        <div className={clsx("task-body-detail", !isExpand && "hidden")}>
          <div className={clsx("detail-item")}>
            <img
              src={dateIcon}
              alt=""
            />
            <div className="date-picker">
              <DatePicker
                onChange={onChange}
                value={dateValue}
                clearIcon={null}
                calendarIcon={<CalendarIcon />}
                className={"calendar-picker"}
                format="dd/MM/yyyy"
              />
            </div>
          </div>
          <div className="detail-item">
            <img
              src={pencilIcon}
              alt=""
            />
            <p>{description || "No Description"}</p>
          </div>
        </div>
      </div>
    </TaskItemStyled>
  );
}

export default TaskItem;

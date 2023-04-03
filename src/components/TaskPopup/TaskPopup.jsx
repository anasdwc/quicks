import React, { useState, useEffect } from "react";
import { ButtonStyled } from "../../styles/Button.styled";
import { FlexContainer } from "../../styles/Container.styled";
import Loading from "../Loading";
import { HeaderTaskStyled, TaskItemStyled } from "../../styles/Popup.styled";
import moreIcon from "../../assets/more.svg";
import expandIcon from "../../assets/expand.svg";
import pencilIcon from "../../assets/pencil.svg";
import dateIcon from "../../assets/date.svg";
import DatePicker from "react-date-picker";
import CalendarIcon from "./CalendarIcon";

function TaskPopup() {
  const [isLoading, setIsLoading] = useState(true);
  const [value, onChange] = useState(new Date());

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <FlexContainer
      gap="20px"
      flexDirection="column"
      height="100%"
    >
      <HeaderTaskStyled>
        <div className="options-task">
          <select
            defaultValue="my-task"
            name="task"
            id="task"
          >
            <option value="my-task">My Task</option>
            <option value="personal-errands ">Personal Errands</option>
            <option value="to-do">Urgent To-Do</option>
          </select>
        </div>
        <ButtonStyled>New Task</ButtonStyled>
      </HeaderTaskStyled>
      <div
        className="task-list"
        style={{ height: "100%" }}
      >
        {isLoading && <Loading text="Loading Task List..." />}
        <TaskItemStyled>
          <input
            type="checkbox"
            id="checkbox"
          />
          <div className="task-body">
            <div className="task-body-header">
              <div className="label">
                <label htmlFor="checkbox">
                  Close off Case #012920 - Rodrigues, Amiguel
                </label>
              </div>
              <div className="action-group">
                <p className="left-days">2 Days Left</p>
                <p>12/06/2021</p>
                <img
                  src={expandIcon}
                  alt=""
                />{" "}
                <img
                  src={moreIcon}
                  alt=""
                />
              </div>
            </div>
            <div className="task-body-detail">
              <div className="detail-item">
                <img
                  src={dateIcon}
                  alt=""
                />
                <div className="date-picker">
                  <DatePicker
                    onChange={onChange}
                    value={value}
                    clearIcon={null}
                    calendarIcon={<CalendarIcon />}
                    calendarClassName={"calendar-icon"}
                    className={"calendar-picker"}
                  />
                </div>
              </div>
              <div className="detail-item">
                <img
                  src={pencilIcon}
                  alt=""
                />
                <p>
                  Closing off this case since this application has been
                  cancelled. No one really understand how this case could
                  possibly be cancelled. The options and the documents within
                  this document were totally a guaranteed for a success!
                </p>
              </div>
            </div>
          </div>
        </TaskItemStyled>
      </div>
    </FlexContainer>
  );
}

export default TaskPopup;

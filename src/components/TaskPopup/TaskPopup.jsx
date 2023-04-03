import React, { useState, useEffect } from "react";
import { ButtonStyled } from "../../styles/Button.styled";
import { FlexContainer } from "../../styles/Container.styled";
import { HeaderTaskStyled } from "../../styles/Popup.styled";
import Loading from "../Loading";
import TaskItem from "./TaskItem";

const data = [
  {
    id: 1,
    title: "Close off Case #012920 - Rodrigues, Amiguel",
    daysLeft: 2,
    date: "12/06/2021",
    description:
      "Closing off this case since this application has been cancelled. No one really understand how this case could possibly be cancelled. The options and the documents within this document were totally a guaranteed for a success!",
    isDone: false,
  },
  {
    id: 2,
    title:
      "Set up documentation report for several Cases: Case 145443, Case 192829 and Case 182203",
    daysLeft: 4,
    date: "14/06/2021",
    description:
      "All Cases must include all payment transactions, all document and forms filled. All conversations in comments and messages in channels and emails should be provided as well in.",
    isDone: false,
  },
  {
    id: 3,
    title: "Set up appointment with Dr Blake",
    daysLeft: 10,
    date: "22/06/2021",
    description: "",
    isDone: false,
  },
  {
    id: 4,
    title: "Contact Mr Caleb - video conference?",
    daysLeft: 0,
    date: "03/06/2021",
    description: "",
    isDone: true,
  },
  {
    id: 5,
    title: "Assign 3 homework to Client A",
    daysLeft: 0,
    date: "02/06/2021",
    description: "",
    isDone: true,
  },
];

function TaskPopup() {
  const [isLoading, setIsLoading] = useState(true);

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
        <div className="task-list">
          {data.map((task) => (
            <TaskItem
              key={task.id}
              {...task}
            />
          ))}
        </div>
      </div>
    </FlexContainer>
  );
}

export default TaskPopup;

import styled from "styled-components";

const InputStyled = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.colors.lightGray};
`;

const InboxItemStyled = styled.div`
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightGray};
  margin-top: 22px;
  gap: 17px;
  position: relative;
  padding-bottom: 22px;

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

const HeaderTaskStyled = styled.div`
  display: flex;
  justify-content: space-between;

  .options-task {
    width: 289px;
    display: flex;
    justify-content: center;

    select {
      background-color: white;
      width: 120px;
      height: 100%;
      justify-content: center;
      border: 1px solid ${({ theme }) => theme.colors.lightGray};
      border-radius: 5px;
      padding: 10px 14px 10px 14px;
      color: ${({ theme }) => theme.colors.darkGray};
      font-weight: 700;

      option {
        border: 1px solid ${({ theme }) => theme.colors.lightGray};
        color: ${({ theme }) => theme.colors.darkGray};
        font-weight: 700;
      }
    }
  }
`;

const TaskItemStyled = styled(InboxItemStyled)`
  align-items: start;

  .task-header {
    display: flex;
  }

  & > .task-body {
    flex: 1;

    & > .task-body-header {
      display: flex;
      align-items: center;
      color: #4f4f4f;
      font-size: 12px;

      .label {
        flex: 1.2;
      }

      label {
        font-weight: 700;
        &.is-done {
          text-decoration: line-through;
        }
      }

      & > .action-group {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 12px;

        .left-days {
          color: #eb5757;
        }

        & > .rotate {
          transform: rotate(180deg);
        }
      }
    }

    & > .task-body-detail {
      display: flex;
      flex-direction: column;
      gap: 13px;
      margin-top: 16px;

      &.hidden {
        display: none;
      }

      .detail-item {
        display: flex;
        gap: 24px;

        img {
          width: 20px;
        }

        .react-date-picker__wrapper {
          border: 1px solid ${({ theme }) => theme.colors.lightGray};
          border-radius: 5px;
          padding: 6px 12px;
          font-size: 14px;
          width: 193px;

          input {
            color: ${({ theme }) => theme.colors.darkGray};
          }
        }

        &:last-child {
          align-items: start;
        }

        p {
          font-size: 12px;
          line-height: 16px;
        }
      }
    }
  }
`;

export { InputStyled, InboxItemStyled, TaskItemStyled, HeaderTaskStyled };

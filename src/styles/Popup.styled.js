const InputStyled = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.colors.lightGray};
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

export { InputStyled, InboxItemStyled };

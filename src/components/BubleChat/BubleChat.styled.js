import styled from "styled-components";

const ChatItemContainer = styled.div`
  margin-bottom: 10px;

  & > h3 {
    font-size: 14px;
    color: ${(props) =>
      props.theme.colors[`${props.outlineColor}` || "outlinePurple"]};
    font-weight: bold;
  }

  ${({ user }) =>
    !user &&
    `
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  `}
`;

const BubleChatContainer = styled.div`
  margin: 7px 0 12px;
  display: flex;
  justify-content: ${(props) => (props.user ? "start" : "end")};
  gap: 5px;
  width: 100%;
  position: relative;

  & > .bubleAction {
    order: ${(props) => (props.user ? 1 : 0)};
  }
`;

const BubleChat = styled.div`
  background-color: ${(props) =>
    props.theme.colors[`${props.baseColor}` || "basePurple"]};
  border-radius: 5px;
  padding: 10px;
  width: fit-content;
  max-width: 80%;

  & > p {
    color: ${(props) => props.theme.colors.darkGray};
    font-size: 14px;
    line-height: 1.25;
  }

  & > .date {
    margin-top: 8px;
  }
`;

const OptionChatContainer = styled.div`
  background-color: #fff;
  position: absolute;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  width: 126px;

  & > p {
    padding: 14px 0 11px 18px;
    text-align: left;
    color: ${({ theme }) => theme.colors.red};
  }

  & > p:first-child {
    border-bottom: 1px solid #bdbdbd;
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export {
  ChatItemContainer,
  BubleChatContainer,
  BubleChat,
  OptionChatContainer,
};

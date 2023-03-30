import styled from "styled-components";

const GroupIconStyled = styled.div`
  display: flex;
  position: relative;
  width: 51px;
  height: 34px;
  flex-shrink: 0;
  justify-content: center;
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

const AbsoluteIcon = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  right: 20px;
`;

export { GroupIconStyled, IconStyled, AbsoluteIcon };

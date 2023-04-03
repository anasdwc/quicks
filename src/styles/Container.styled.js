import styled from "styled-components";

const Container = styled.div`
  background-color: #333;
  width: 100%;
  height: 100vh;
  border-left: ${(props) => (props.borderLeft ? "1px solid #fff" : "none")};
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 1.7fr;
`;

const PopupContainer = styled.div`
  background-color: #fff;
  margin-bottom: 16px;
  height: 60vh;
  width: 30vw;
  padding: 24px 32px;
  position: absolute;
  bottom: 52px;
  right: 0;
  border-radius: 5px;
`;

const RelativeContainer = styled.div`
  position: relative;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "row"};
  justify-content: ${(props) => props.justifyContent || "normal"};
  height: ${(props) => props.height || "auto"};
  gap: ${(props) => props.gap};
  overflow-y: scroll;
  overflow-x: hidden;
`;

export {
  FlexContainer,
  Container,
  GridContainer,
  PopupContainer,
  RelativeContainer,
};

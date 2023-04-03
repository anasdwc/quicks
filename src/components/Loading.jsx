import React from "react";
import { LoadingStyled } from "../styles/Loading.styled";
import { PargraphStyled } from "../styles/Text.styled";
import styled from "styled-components";

const FlexCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

function Loading({ text }) {
  return (
    <FlexCenter>
      <LoadingStyled />
      <PargraphStyled color="darkGray">{text}</PargraphStyled>
    </FlexCenter>
  );
}

export default Loading;

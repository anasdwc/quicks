import React from "react";
import { LoadingStyled } from "../../styles/Loading.styled";
import styled from "styled-components";

const InfoContainer = styled.div`
  padding: 10px;
  margin-bottom: 12px;
  background-color: ${({ theme }) => theme.colors.softBlue};
  font-size: 14px;
  border-radius: 5px;
  display: flex;
  gap: 6px;

  & > p {
    margin: auto 0;
    color: ${({ theme }) => theme.colors.darkGray};
    font-weight: bold;
  }
`;

function SupportBuble() {
  return (
    <InfoContainer>
      <LoadingStyled
        marginBottom="0"
        margin="6px"
        size="18px"
        borderSize="2px"
        colorActive="blue"
        color="customGray"
      />
      <p>Please wait while we connect you with one of our team...</p>
    </InfoContainer>
  );
}

export default SupportBuble;

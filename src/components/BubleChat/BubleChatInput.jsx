import React from "react";

import { FlexContainer } from "../../styles/Container.styled";
import { ButtonStyled } from "../../styles/Button.styled";
import { InputStyled } from "../../styles/Popup.styled";

function BubleChatInput() {
  return (
    <FlexContainer
      style={{ overflow: "visible" }}
      gap="10px"
    >
      <InputStyled
        type="text"
        placeholder="Type a new message"
      />
      <ButtonStyled>Send</ButtonStyled>
    </FlexContainer>
  );
}

export default BubleChatInput;

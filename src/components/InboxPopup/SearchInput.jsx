import { RelativeContainer } from "../../styles/Container.styled";
import { InputStyled } from "../../styles/Popup.styled";
import { AbsoluteIcon } from "../../styles/Icon.styled";

import searchBlackIcon from "../../assets/search-black.svg";

function SearchInput() {
  return (
    <RelativeContainer className="search">
      <InputStyled
        type="text"
        placeholder="Search"
      />
      <AbsoluteIcon src={searchBlackIcon} />
    </RelativeContainer>
  );
}

export default SearchInput;

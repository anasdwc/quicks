import searchIcon from "../../assets/search.svg";
import Nav from "../../styles/Navbar.styled";

function Navbar() {
  return (
    <Nav>
      <img
        src={searchIcon}
        alt=""
      />
    </Nav>
  );
}

export default Navbar;

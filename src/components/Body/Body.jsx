import { Container } from "../../styles/Container.styled";
import Navbar from "../Navbar/Navbar";
import PopupButton from "../PopupButton/PopupButton";

function Body() {
  return (
    <Container borderLeft>
      <Navbar />
      <PopupButton />
    </Container>
  );
}

export default Body;

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

export { Container, GridContainer };

import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  height: 58px;
  background-color: ${({ theme }) => theme.colors.darkGray};
  padding: 18px 26px;

  & > img {
    width: 16px;
    height: 16px;
  }
`;

export default Nav;

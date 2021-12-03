import styled from "styled-components";
import { colors } from "../../styles/stylesConstants";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavbarOption = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ active }) => (active ? colors.turquoise : colors.darkGrey)};
  font-weight: 400;
  border-bottom: 3px solid;
  border-color: ${({ active }) => (active ? colors.turquoise : "white")};
  height: 60px;
  width: 150px;

  &:hover {
    cursor: pointer;
  }
`;

export { NavbarContainer, NavbarOption };

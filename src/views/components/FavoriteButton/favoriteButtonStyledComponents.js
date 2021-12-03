import styled from "styled-components";
import { colors } from "../../styles/stylesConstants";

const FavButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  outline: none;
  border: none;
  margin: 0;
  color: ${colors.turquoise};
`;

export { FavButton };

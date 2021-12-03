import styled from "styled-components";
import { colors } from "../../styles/stylesConstants";

const ErrorMessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
  color: ${colors.darkGrey};
  gap: 20px;
`;

export { ErrorMessageContainer };

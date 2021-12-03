import styled from "styled-components";
import { textSizes, colors } from "../../styles/stylesConstants";

const Paragraph = styled.p`
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
  font-size: ${({ size }) => textSizes[size]};
  color: ${({ color }) => colors[color]};
  text-transform: ${({ capitalize }) => (capitalize ? "capitalize" : "none")};
`;

export { Paragraph };

import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 100px 100px 100px;

  @media (max-width: 705px) {
    & {
      padding: 0 40px 40px 40px;
    }
  }
`;

export { AppContainer };

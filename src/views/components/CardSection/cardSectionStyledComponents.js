import styled from "styled-components";

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 20px;

  @media (max-width: 705px) {
    & {
      justify-content: center;
    }
  }
`;

export { CardsWrapper };

import styled from "styled-components";
import { colors } from "../../styles/stylesConstants";

const FavoritesPageContainer = styled.div`
  width: 100%;
`;

const FavoriteHeader = styled.div`
  display: flex;
  align-items: center;
  padding-top: 63px;
  margin-bottom: 40px;
  gap: 15px;
  top: 0;
  background-color: white;
  position: sticky;
`;

const FavoritesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 705px) {
    & {
      justify-content: center;
    }
  }
`;

const EmptyMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  color: ${colors.turquoise};
  font-weight: 500;
`;

const Gradient = styled.div`
  height: 30px;
  width: 100vw;
  left: 0;
  top: 138px;
  position: fixed;
  background-image: linear-gradient(
    to top,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 1)
  );
`;

export {
  FavoritesPageContainer,
  FavoriteHeader,
  FavoritesWrapper,
  EmptyMessage,
  Gradient,
};

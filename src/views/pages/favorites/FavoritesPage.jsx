import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setActiveSection } from "../../../application/actions/resources/resourcesActions";
import Card from "../../components/Card/Card";
import {
  FavoriteHeader,
  FavoritesPageContainer,
  FavoritesWrapper,
  EmptyMessage,
  Gradient,
} from "./favoritesPageStyledComponents";
import Text from "../../components/Text/Text";
import BackButton from "../../components/BackButton/BackButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
import { colors } from "../../styles/stylesConstants";

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const activeSection = useSelector(({ resources }) => resources.activeSection);
  const favorites = useSelector(({ favorites }) => favorites[activeSection]);
  const { favParameter } = useParams();

  useEffect(() => {
    if (favParameter !== "talleres" && favParameter !== "rincones") {
      navigate("/error");
    } else {
      dispatch(setActiveSection(favParameter));
    }
  }, [dispatch, activeSection]);

  return (
    <FavoritesPageContainer>
      <FavoriteHeader>
        <BackButton />
        <Text color="black" size="lg" bold capitalize>
          {activeSection} favoritos
        </Text>
      </FavoriteHeader>
      <Gradient />
      {favorites.length ? (
        <FavoritesWrapper>
          {favorites.map((favorite, index) => {
            return <Card {...favorite} key={index} />;
          })}
        </FavoritesWrapper>
      ) : (
        <EmptyMessage>
          ¡Vaya, parece que aún no tienes favoritos! Los {activeSection} que
          añadas a favoritos aparecerán aquí.
          <FontAwesomeIcon
            icon={faHandHoldingHeart}
            color={colors.turquoise}
            size="5x"
          />
        </EmptyMessage>
      )}
    </FavoritesPageContainer>
  );
};

export default FavoritesPage;

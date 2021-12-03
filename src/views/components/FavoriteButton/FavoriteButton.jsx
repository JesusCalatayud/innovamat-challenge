import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { colors } from "../../styles/stylesConstants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as emptyHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as filledHeart } from "@fortawesome/free-solid-svg-icons";
import { FavButton } from "./favoriteButtonStyledComponents";

const FavoriteButton = ({ onClick, resourceId }) => {
  const activeSection = useSelector(({ resources }) => resources.activeSection);
  const favorites = useSelector(({ favorites }) =>
    favorites[activeSection].map((fav) => fav.resourceId)
  );

  return (
    <FavButton onClick={onClick}>
      <FontAwesomeIcon
        icon={favorites.includes(resourceId) ? filledHeart : emptyHeart}
        color={colors.turquoise}
        size="lg"
      />
      {favorites.includes(resourceId) ? "Favorito" : ""}
    </FavButton>
  );
};

FavoriteButton.propTypes = {
  onClick: PropTypes.func,
  resourceId: PropTypes.string,
};

FavoriteButton.defaultProps = {
  onClick: () => null,
  resourceId: "",
};

export default FavoriteButton;

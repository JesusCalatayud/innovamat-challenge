import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import Text from "../Text/Text";
import { FavLinkButton } from "./favoritesLinkButtonStyledComponents";
import { colors } from "../../styles/stylesConstants";

const FavoritesButton = () => {
  const navigate = useNavigate();
  const activeSection = useSelector(({ resources }) => resources.activeSection);

  const handleClick = () => {
    navigate(`/favoritos/${activeSection}`);
  };

  return (
    <FavLinkButton onClick={() => handleClick()}>
      <FontAwesomeIcon icon={faEye} color={colors.turquoise} size="lg" />
      <Text color="turquoise">Ver favoritos</Text>
    </FavLinkButton>
  );
};

export default FavoritesButton;

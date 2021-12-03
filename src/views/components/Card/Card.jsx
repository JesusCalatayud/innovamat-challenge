import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CardContainer } from "./cardStyledComponents";
import Image from "../Image/Image";
import Text from "../Text/Text";
import { handleFavorite } from "../../../application/actions/favorites/favoritesActions";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

const Card = ({ title, text, source, resourceId, resourceType }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favorites = useSelector(({ favorites }) => favorites);

  const handleClick = () => {
    navigate(`/recurso/${resourceId}`);
  };

  const handleClickFavorite = (event) => {
    event.stopPropagation();
    dispatch(
      handleFavorite(
        { title, text, source, resourceId, resourceType },
        favorites
      )
    );
  };

  return (
    <CardContainer onClick={() => handleClick()}>
      <div>
        <Image source={source} />
        <Text color="black">{title}</Text>
        <Text>{text}</Text>
      </div>
      <FavoriteButton onClick={handleClickFavorite} resourceId={resourceId} />
    </CardContainer>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  source: PropTypes.string,
  resourceId: PropTypes.string,
  resourceType: PropTypes.string,
};

Card.defaultProps = {
  title: "",
  text: "",
  source: "",
  resourceId: "",
  resourceType: "",
};

export default Card;

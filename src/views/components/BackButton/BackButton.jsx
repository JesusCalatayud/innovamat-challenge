import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { colors } from "../../styles/stylesConstants";
import { NavigateBackButton } from "./backButtonStyledComponents";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <NavigateBackButton onClick={() => navigate(-1)}>
      <FontAwesomeIcon icon={faChevronLeft} color={colors.black} size="lg" />
    </NavigateBackButton>
  );
};

export default BackButton;

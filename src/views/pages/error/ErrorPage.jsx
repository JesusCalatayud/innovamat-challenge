import React from "react";
import Text from "../../components/Text/Text";
import { ErrorPageContainer } from "./errorPageStyledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { colors } from "../../styles/stylesConstants";

const ErrorPage = () => {
  return (
    <ErrorPageContainer>
      <FontAwesomeIcon
        icon={faExclamationTriangle}
        color={colors.darkGrey}
        size="3x"
      />
      <Text bold>Lo sentimos, la página que buscas no existe</Text>
    </ErrorPageContainer>
  );
};

export default ErrorPage;

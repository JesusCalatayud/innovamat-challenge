import React from "react";
import PropTypes from "prop-types";
import { colors } from "../../styles/stylesConstants";
import { ErrorMessageContainer } from "./errorMessageStyledComponents";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedo } from "@fortawesome/free-solid-svg-icons";

const ErrorMessage = ({ err }) => {
  const navigate = useNavigate();
  return (
    <ErrorMessageContainer>
      Lo sentimos, algo ha salido mal: {err}
      <FontAwesomeIcon
        icon={faRedo}
        color={colors.turquoise}
        size="lg"
        cursor="pointer"
        onClick={() => navigate(0)}
      />
    </ErrorMessageContainer>
  );
};

ErrorMessage.propTypes = {
  err: PropTypes.string,
};

export default ErrorMessage;

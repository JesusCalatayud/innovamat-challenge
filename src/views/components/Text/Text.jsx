import React from "react";
import PropTypes from "prop-types";
import { Paragraph } from "./textStyledComponents";

const Text = ({ children, bold, size, color, capitalize }) => {
  return (
    <Paragraph bold={bold} size={size} color={color} capitalize={capitalize}>
      {children}
    </Paragraph>
  );
};

Text.propTypes = {
  children: PropTypes.node,
  bold: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "m", "lg"]),
  color: PropTypes.string,
  capitalize: PropTypes.bool,
};

Text.defaultProps = {
  bold: false,
  size: "sm",
  color: "darkGrey",
  capitalize: false,
};

export default Text;

import React from "react";
import PropTypes from "prop-types";
import { ImageContainer } from "./imageStyledComponents";

const Image = ({ source }) => {
  return <ImageContainer src={source} />;
};

Image.propTypes = {
  source: PropTypes.string,
};

Image.defaultProps = {
  source: "",
};

export default Image;

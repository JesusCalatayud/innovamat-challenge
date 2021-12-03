import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { NavbarContainer, NavbarOption } from "./navbarStyledComponents";

const Navbar = ({ onSelectOption }) => {
  const activeSection = useSelector(({ resources }) => resources.activeSection);
  return (
    <NavbarContainer>
      <NavbarOption
        onClick={() => onSelectOption("talleres")}
        active={activeSection === "talleres"}
      >
        Talleres
      </NavbarOption>

      <NavbarOption
        onClick={() => onSelectOption("rincones")}
        active={activeSection === "rincones"}
      >
        Rincones
      </NavbarOption>
    </NavbarContainer>
  );
};

Navbar.propTypes = {
  onSelectOption: PropTypes.func,
};

Navbar.defaultProps = {
  onSelectOption: () => null,
};

export default Navbar;

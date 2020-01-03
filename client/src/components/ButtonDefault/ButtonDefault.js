import React from "react";
import THEME from "../../theme";
import styles from "./styles";
import styled from "styled-components";
import { useMediaQuery } from "../../hooks";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  &:hover {
    ${({ isMedia, isActiveSubmit }) =>
      isMedia === "mobile"
        ? null
        : isActiveSubmit
        ? `background-color: ${THEME.colors.hoverBlue} !important;
          border-color: ${THEME.colors.hoverBlue} !important;`
        : `opacity: 0.3;
          cursor: not-allowed !important;
        `}
  }
`;

const ButtonDefault = ({ type, isActiveSubmit, children }) => {
  const isMedia = useMediaQuery();

  return (
    <StyledButton
      isMedia={isMedia}
      isActiveSubmit={isActiveSubmit}
      style={
        isActiveSubmit
          ? {
              ...styles.default,
              ...styles.active
            }
          : {
              ...styles.default
            }
      }
      type={type}
      disabled={!isActiveSubmit}
    >
      {children}
    </StyledButton>
  );
};

export default ButtonDefault;

ButtonDefault.propTypes = {
  type: PropTypes.oneOf(["submit", "reset", "button"]).isRequired,
  isActiveSubmit: PropTypes.bool
};

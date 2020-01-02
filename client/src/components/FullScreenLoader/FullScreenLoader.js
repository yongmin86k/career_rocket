import React from "react";
import styles from "./styles";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";

const opacity = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`;

const StyledDiv = styled.div`
  animation: ${opacity} 1.2s linear infinite;
`;

const FullScreenLoader = ({ show, label = "Loading" }) => {
  const Spinner = [];

  for (let i = 0; i < 12; i++) {
    Spinner.push(
      <StyledDiv
        key={`child_${i}`}
        style={{
          ...styles.child,
          ...styles[`nthChild_${i}`]
        }}
      >
        <div style={{ ...styles.pseudo }}></div>
      </StyledDiv>
    );
  }

  return (
    <section
      style={
        show
          ? { ...styles.modalContainer }
          : { ...styles.modalContainer, ...styles.hide }
      }
    >
      <div style={styles.ldsSpinner}>{Spinner}</div>
      <p style={styles.label}>{label}</p>
    </section>
  );
};

export default FullScreenLoader;

FullScreenLoader.propTypes = {
  show: PropTypes.bool.isRequired,
  label: PropTypes.string
};

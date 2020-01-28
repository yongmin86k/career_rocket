import React, { useState } from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
import styles from "./styles";
import PropTypes from "prop-types";

const BottomTabIcon = ({ label, image, link, onClick }) => {
  const matchURL = useRouteMatch("/job_training/:trainingTitle");
  const [isActive, setActive] = useState(false);
  const [isPathTraining, setPathTraining] = useState(false);

  if (!isPathTraining && matchURL) {
    setPathTraining(true);
  } else if (isPathTraining && !matchURL) {
    setPathTraining(false);
  }

  if (link) {
    return (
      <NavLink
        to={link}
        isActive={match => {
          if (!match) {
            setActive(false);
          } else {
            setActive(true);
          }
        }}
      >
        <div style={styles.container}>
          <div>
            <div
              style={
                isActive
                  ? { ...styles.wrapper, ...styles.activeWrapper }
                  : { ...styles.wrapper }
              }
            >
              <img
                src={`/images/${image}${
                  isActive ? "-active" : "-inactive"
                }.svg`}
                alt={label}
              />
            </div>
            <p
              style={
                isActive
                  ? { ...styles.label, ...styles.activeLabel }
                  : { ...styles.label }
              }
            >
              {label}
            </p>
          </div>
        </div>
      </NavLink>
    );
  }

  if (onClick) {
    return (
      <div style={styles.container} onClick={onClick}>
        <div>
          <div
            style={
              isPathTraining
                ? { ...styles.wrapper, ...styles.activeWrapper }
                : { ...styles.wrapper }
            }
          >
            <img
              src={`/images/${image}${
                isPathTraining ? "-active" : "-inactive"
              }.svg`}
              alt={label}
            />
          </div>
          <p
            style={
              isPathTraining
                ? { ...styles.label, ...styles.activeLabel }
                : { ...styles.label }
            }
          >
            {label}
          </p>
        </div>
      </div>
    );
  }
};

export default BottomTabIcon;

BottomTabIcon.propTypes = {
  label: PropTypes.string.isRequired,
  image: PropTypes.string,
  link: PropTypes.string
};

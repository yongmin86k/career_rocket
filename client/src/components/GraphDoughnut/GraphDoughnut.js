import React from "react";
import styles from "./styles";
import THEME from "../../theme";
import PropTypes from "prop-types";

const GraphDoughnut = ({
  strokeColor = THEME.colors.solitudeBlue,
  strokeDashoffset = 402,
  rotate = 0
}) => {
  return (
    <div style={styles.container}>
      <svg style={styles.element} x={0} y={0} viewBox="0 0 200 200">
        <g>
          <circle
            r={64}
            cy={100}
            cx={100}
            strokeWidth={16}
            fill="none"
            strokeDasharray={402}
            strokeDashoffset={402 - strokeDashoffset}
            stroke={strokeColor}
            transform={`rotate(${-90 + rotate}, 100, 100)`}
          />
        </g>
      </svg>
    </div>
  );
};

export default GraphDoughnut;

GraphDoughnut.propTypes = {
  strokeColor: PropTypes.node,
  strokeDashoffset: PropTypes.number,
  rotate: PropTypes.number
};

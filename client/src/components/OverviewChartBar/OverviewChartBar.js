import React, { useState } from "react";
import moment from "moment";
import styles from "./styles";
import PropTypes from "prop-types";

const BarElement = ({ type, data, totalNumber }) => {
  const [isHover, setHover] = useState(false);

  return (
    <div
      style={styles.barElement(type, (data[type] / totalNumber) * 100)}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      {data[type] / totalNumber > 0 && (
        <p
          style={
            isHover
              ? { ...styles.info, ...styles.infoHover }
              : { ...styles.info }
          }
        >
          {type === "LAYOFF"
            ? "Layoff"
            : type === "WITHDRAW"
            ? "Withdraw"
            : type === "IN_PROGRESS"
            ? "In progress"
            : "Hired"}{" "}
          : {data[type]}
        </p>
      )}
    </div>
  );
};

const OverviewChartBar = ({ data, totalNumber }) => {
  return (
    <div style={styles.bar}>
      {Object.keys(data.data).map((type, index) => {
        return (
          <BarElement
            key={`chartBar_${index}`}
            type={type}
            data={data.data}
            totalNumber={totalNumber}
          />
        );
      })}

      <p style={styles.month}>{moment(`${data.month}01`).format("MMM")}</p>
    </div>
  );
};

export default OverviewChartBar;

OverviewChartBar.propTypes = {
  data: PropTypes.object,
  totalNumber: PropTypes.number
};

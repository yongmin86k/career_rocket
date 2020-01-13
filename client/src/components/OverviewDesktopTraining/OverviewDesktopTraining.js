import React from "react";
import { OverviewTableRow } from "../../components";
import styles from "./styles";
import PropTypes from "prop-types";

const OverviewDesktopTraining = ({ loading, error, trainingData }) => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.select}>#</div>

        <div style={styles.type}>
          Type
          <img style={styles.icOrder} src="/images/ic-order.svg" alt="Order" />
        </div>

        <div style={styles.title}>
          Title
          <img style={styles.icOrder} src="/images/ic-order.svg" alt="Order" />
        </div>

        <div style={styles.date}>
          Date
          <img style={styles.icOrder} src="/images/ic-order.svg" alt="Order" />
        </div>

        <div style={styles.applicants}>Applicants</div>
        <div style={styles.passed}>Passed</div>
        <div style={styles.hired}>Hired</div>

        <div style={styles.actions}>actions</div>
      </div>

      <div style={styles.contents}>
        {trainingData &&
          trainingData.map((data, index) => (
            <OverviewTableRow
              key={`trainingDataRow_${index}`}
              data={data}
              lastChild={index === trainingData.length - 1}
            />
          ))}
      </div>
    </div>
  );
};

export default OverviewDesktopTraining;

OverviewDesktopTraining.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.object,
  trainingData: PropTypes.array
};

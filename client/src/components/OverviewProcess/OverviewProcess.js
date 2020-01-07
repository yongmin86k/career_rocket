import React from "react";
import { GraphDoughnut } from "../../components";
import { thousandFormatHelper } from "../../lib/numberFormatHelper";
import { useWindowDimensions } from "../../hooks";
import THEME from "../../theme";
import styles from "./styles";
import PropTypes from "prop-types";

const OverviewProcess = ({ loading, error, data }) => {
  const dimension = useWindowDimensions();

  if (loading) return <div>loading</div>;
  if (error) return <div>error</div>;
  if (data) {
    const TYPES = {
      HIRED: 0,
      JOB_SEEKING: 0,
      IN_TRANSITION: 0,
      CONSTULING: 0,
      UNOCCUPIED: 0
    };
    const totalNumber = data.length;

    data.forEach(item => {
      TYPES[item.process] += 1;
    });

    return (
      <section style={styles.box(dimension)}>
        <div style={styles.pieWrapper}>
          <GraphDoughnut />

          {Object.keys(TYPES).map((item, index) => (
            <GraphDoughnut
              key={`graphDoughnut_${index}`}
              strokeColor={
                index === 0
                  ? THEME.colors.legends.mainBlue
                  : index === 1
                  ? THEME.colors.legends.lightBlue
                  : index === 2
                  ? THEME.colors.legends.columbiaBlue
                  : index === 3
                  ? THEME.colors.legends.echoBlue
                  : THEME.colors.legends.grey
              }
              strokeDashoffset={(402 * TYPES[item]) / totalNumber}
              rotate={
                index === 0
                  ? 0
                  : index === 1
                  ? (360 * TYPES.HIRED) / totalNumber
                  : index === 2
                  ? (360 * (TYPES.HIRED + TYPES.JOB_SEEKING)) / totalNumber
                  : index === 3
                  ? (360 *
                      (TYPES.HIRED + TYPES.JOB_SEEKING + TYPES.IN_TRANSITION)) /
                    totalNumber
                  : (360 *
                      (TYPES.HIRED +
                        TYPES.JOB_SEEKING +
                        TYPES.IN_TRANSITION +
                        TYPES.CONSTULING)) /
                    totalNumber
              }
            />
          ))}

          <img
            style={styles.pieLegend}
            src="/images/pic-chart-legend.svg"
            alt="pie chart"
          />

          <div style={styles.totalWrapper}>
            <p style={styles.labelText}>Total</p>
            <p style={styles.totalText}>{thousandFormatHelper(totalNumber)}</p>
          </div>
        </div>

        <div style={styles.indicesWrapper}>
          {Object.keys(TYPES).map((item, index) => (
            <div
              key={`indices_${index}`}
              style={
                index === Object.keys(TYPES).length - 1
                  ? { ...styles.indexItem, ...styles.indexLastItem }
                  : { ...styles.indexItem }
              }
            >
              <p style={styles.indexContent}>
                <span
                  style={{
                    ...styles.indexMark,
                    ...styles[`indexMark_${index}`]
                  }}
                />
                {item === "HIRED"
                  ? "Hired"
                  : item === "JOB_SEEKING"
                  ? "Job seeking"
                  : item === "IN_TRANSITION"
                  ? "In transition"
                  : item === "CONSTULING"
                  ? "Consulting"
                  : "Unoccupied"}
              </p>

              <p style={styles.indexLabel}>
                {`${TYPES[item]} clients`} (
                {`${((TYPES[item] / totalNumber) * 100).toFixed(1)}`}
                <span style={styles.percent}>%</span>)
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }
};

export default OverviewProcess;

OverviewProcess.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object,
  data: PropTypes.array
};

import React from "react";
import { OverviewChartBar } from "../../components";
import {
  legendFormatHelper,
  thousandFormatHelper
} from "../../lib/numberFormatHelper";
import styles from "./styles";

import PropTypes from "prop-types";

const OverviewDesktopStatus = ({ loading, error, data }) => {
  if (loading) return <div>loading</div>;
  if (error) return <div>error</div>;

  if (data) {
    let chartLegend,
      chartData = [];

    Object.keys(data).forEach((childData, index) => {
      const TYPES = {
        LAYOFF: 0,
        WITHDRAW: 0,
        IN_PROGRESS: 0,
        HIRED: 0
      };

      data[childData].forEach(item => {
        TYPES[item.statusType] += 1;
      });

      chartData.push({ month: childData, data: TYPES });

      const totalNumber = data[childData].length;

      const LEGEND = legendFormatHelper(totalNumber);

      if ((index = Object.keys(data).length - 1)) {
        chartLegend = LEGEND;
      }
    });

    return (
      <div style={styles.container}>
        <div style={styles.chartContainer}>
          {chartLegend.map((legend, index) => {
            return (
              <div key={`chartLines_${index}`} style={styles.chartLine}>
                <p style={styles.legendNum}>{thousandFormatHelper(legend)}</p>
              </div>
            );
          })}

          <div style={styles.cartContents}>
            {chartData.map((data, index) => (
              <OverviewChartBar
                key={`OverviewChartBar_${index}`}
                data={data}
                totalNumber={chartLegend[5]}
              />
            ))}
          </div>
        </div>

        <div style={styles.legendInfo}>
          <div style={styles.legendItem}>
            <span style={{ ...styles.legendColor, ...styles.hired }} />
            Hired
          </div>

          <div style={styles.legendItem}>
            <span style={{ ...styles.legendColor, ...styles.inProgress }} />
            In progress
          </div>

          <div style={styles.legendItem}>
            <span style={{ ...styles.legendColor, ...styles.withdraw }} />
            Withdraw
          </div>

          <div style={styles.legendItem}>
            <span style={{ ...styles.legendColor, ...styles.layoff }} />
            Layoff
          </div>
        </div>
      </div>
    );
  }
};

export default OverviewDesktopStatus;

OverviewDesktopStatus.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.object,
  data: PropTypes.object
};

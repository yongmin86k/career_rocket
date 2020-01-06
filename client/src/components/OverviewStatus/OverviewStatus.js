import React from "react";
import moment from "moment";
import { useWindowDimensions } from "../../hooks";
import {
  legendFormatHelper,
  thousandFormatHelper
} from "../../lib/numberFormatHelper";
import styles from "./styles";

const OverviewStatus = () => {
  const dimension = useWindowDimensions();

  const DATA = {
    layoff: 236,
    withdraw: 423,
    inProgress: 729,
    hired: 983
  };

  const totalNumber = Object.keys(DATA).reduce((acc, cur) => {
    return acc + DATA[cur];
  }, 0);
  const LEGEND = legendFormatHelper(totalNumber);

  return (
    <div style={styles.box(dimension)}>
      <div style={styles.contents}>
        <div>
          <p style={styles.label}>Month</p>
          <p style={styles.contentText}>
            {moment().format("MMMM")}{" "}
            <span style={styles.dateYear}> / {moment().format("Y")}</span>
          </p>
        </div>

        <div>
          <p style={styles.label}>Total</p>
          <p style={{ ...styles.contentText, ...styles.totalNumber }}>
            {totalNumber.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
          </p>
        </div>
      </div>

      <div style={styles.chart}>
        <div style={styles.graph}>
          <div style={styles.graphBar}>
            <div style={styles.barWrapper}>
              <div style={styles.barOutline} />

              {Object.keys(DATA).map((barObject, index) => {
                const perTotal = parseFloat(
                  ((DATA[barObject] / LEGEND[5]) * 100).toFixed(2)
                );

                return (
                  <div
                    key={`barObject_${index}`}
                    style={{
                      ...styles.barObject(perTotal),
                      ...styles[`barObject_${index}`]
                    }}
                  />
                );
              })}
            </div>

            <div style={styles.barMarkingWrapper}>
              {LEGEND.map((legend, index) => (
                <div key={`barMarking_${index}`} style={styles.barMarking}>
                  <p style={styles.barMarkingLegend}>
                    {thousandFormatHelper(legend)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={styles.indicesWrapper}>
          {Object.keys(DATA).map((item, index) => (
            <div
              key={`indices_${index}`}
              style={
                index === Object.keys.length - 1
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
                {item === "layoff"
                  ? "Layoff"
                  : item === "withdraw"
                  ? "Withdraw"
                  : item === "inProgress"
                  ? "In progress"
                  : "Hired"}
              </p>

              <p style={styles.indexLabel}>
                {`${DATA[item]} clients`} (
                {`${((DATA[item] / totalNumber) * 100).toFixed(1)}`}
                <span style={styles.percent}>%</span>)
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OverviewStatus;

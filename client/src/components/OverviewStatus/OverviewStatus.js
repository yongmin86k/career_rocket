import React from "react";
import moment from "moment";
import { useWindowDimensions } from "../../hooks";
import {
  legendFormatHelper,
  thousandFormatHelper
} from "../../lib/numberFormatHelper";
import styles from "./styles";
import PropTypes from "prop-types";

const OverviewStatus = ({ loading, error, data }) => {
  const dimension = useWindowDimensions();

  if (loading) return <div>loading</div>;
  if (error) return <div>error</div>;

  if (data) {
    return (
      <section style={styles.container}>
        <div style={styles.gap} />

        {Object.keys(data).map((childData, index) => {
          const TYPES = {
            LAYOFF: 0,
            WITHDRAW: 0,
            IN_PROGRESS: 0,
            HIRED: 0
          };

          data[childData].forEach(item => {
            TYPES[item.statusType] += 1;
          });

          const totalNumber = data[childData].length;

          const LEGEND = legendFormatHelper(totalNumber);

          return (
            <div
              key={`overviewStatusChildData_${index}`}
              style={
                index === Object.keys(data).length - 1
                  ? { ...styles.box(dimension), ...styles.lastChildBox }
                  : { ...styles.box(dimension) }
              }
            >
              <div style={styles.contents}>
                <div>
                  <p style={styles.label}>Month</p>
                  <p style={styles.contentText}>
                    {moment(`${childData}01`).format("MMMM")}{" "}
                    <span style={styles.dateYear}>
                      {" "}
                      / {moment(`${childData}01`).format("Y")}
                    </span>
                  </p>
                </div>

                <div>
                  <p style={styles.label}>Total</p>
                  <p style={{ ...styles.contentText, ...styles.totalNumber }}>
                    {totalNumber
                      .toString()
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                  </p>
                </div>
              </div>

              <div style={styles.chart}>
                <div style={styles.graph}>
                  <div style={styles.graphBar}>
                    <div style={styles.barWrapper}>
                      <div style={styles.barOutline} />

                      {Object.keys(TYPES).map((barObject, index) => {
                        const perTotal = parseFloat(
                          ((TYPES[barObject] / LEGEND[5]) * 100).toFixed(2)
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
                        <div
                          key={`barMarking_${index}`}
                          style={styles.barMarking}
                        >
                          <p style={styles.barMarkingLegend}>
                            {thousandFormatHelper(legend)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div style={styles.indicesWrapper}>
                  {Object.keys(TYPES).map((item, index) => (
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
                        {item === "LAYOFF"
                          ? "Layoff"
                          : item === "WITHDRAW"
                          ? "Withdraw"
                          : item === "IN_PROGRESS"
                          ? "In progress"
                          : "Hired"}
                      </p>

                      <p style={styles.indexLabel}>
                        {`${TYPES[item]} clients`} (
                        {`${((TYPES[item] / totalNumber) * 100).toFixed(1)}`}
                        <span style={styles.percent}>%</span>)
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}

        <div style={styles.gap} />
      </section>
    );
  }
};

export default OverviewStatus;

OverviewStatus.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object,
  data: PropTypes.object
};

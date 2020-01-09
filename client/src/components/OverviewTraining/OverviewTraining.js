import React from "react";
import moment from "moment";
import { useWindowDimensions } from "../../hooks";
import styles from "./styles";
import PropTypes from "prop-types";

const OverviewTraining = ({ loading, error, data }) => {
  const dimension = useWindowDimensions();

  if (loading) return <div>loading</div>;
  if (error) return <div>error</div>;
  if (data)
    return data.map((item, index) => {
      const trainingStatus = moment().isBefore(item.dateStart, "day")
        ? "Prearranged"
        : moment().isAfter(item.dateEnd, "day")
        ? "Overdated"
        : "In process";

      const totalStudent = item.studentsInfo.length;
      const passedStudent = item.studentsInfo.filter(
        student => student.statusType === "PASS"
      ).length;
      const hiredStudent = item.studentsInfo.filter(student => {
        const latestStatus = student.student.studentState.sort((a, b) => {
          const dateA = moment(a.createdAt);
          const dateB = moment(b.createdAt);

          return dateB - dateA;
        })[0];

        return latestStatus.statusType === "HIRED";
      }).length;

      return (
        <div key={`overviewTraining_${index}`} style={styles.box(dimension)}>
          <div style={styles.boxHeader}>
            <div
              style={
                trainingStatus === "Prearranged"
                  ? { ...styles.labelStatus, ...styles.labelColorGrey }
                  : trainingStatus === "Overdated"
                  ? { ...styles.labelStatus, ...styles.labelColorRed }
                  : { ...styles.labelStatus, ...styles.labelColorBlue }
              }
            >
              {trainingStatus}
            </div>
            <img src="/images/ic-menu.svg" alt="options" />
          </div>

          <div style={styles.trainingMeta}>
            <h2 style={styles.title}>{item.title}</h2>
            <p style={styles.date}>{`${moment(item.dateStart).format(
              "YYYY-MM-DD"
            )} ~ ${moment(item.dateEnd).format("YYYY-MM-DD")}`}</p>
          </div>

          <div style={styles.trainingInfo}>
            <div style={styles.trainingInfoWrapper}>
              <div style={styles.trainingIcon}>
                <img src="/images/ic-applicants.svg" alt="Applicants" />
              </div>

              <div>
                <p style={styles.trainingLabel}>Applicants</p>
                <p
                  style={styles.trainingText}
                >{`${totalStudent}/${item.maxStudents}`}</p>
              </div>
            </div>

            <div style={styles.trainingInfoWrapper}>
              <div style={styles.trainingIcon}>
                <img src="/images/ic-passed.svg" alt="Passed" />
              </div>

              <div>
                <p style={styles.trainingLabel}>Passed</p>
                <p
                  style={styles.trainingText}
                >{`${passedStudent}/${totalStudent}`}</p>
              </div>
            </div>

            <div style={styles.trainingInfoWrapper}>
              <div style={styles.trainingIcon}>
                <img src="/images/ic-hired.svg" alt="Hired" />
              </div>

              <div>
                <p style={styles.trainingLabel}>Hired</p>
                <p
                  style={styles.trainingText}
                >{`${hiredStudent}/${totalStudent}`}</p>
              </div>
            </div>
          </div>
        </div>
      );
    });
};

export default OverviewTraining;

OverviewTraining.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object,
  data: PropTypes.array
};

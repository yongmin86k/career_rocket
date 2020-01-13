import React from "react";
import moment from "moment";
import styles from "./styles";
import PropTypes from "prop-types";

const OverviewTableRow = ({ data, lastChild }) => {
  const trainingStatus = moment().isBefore(data.dateStart, "day")
    ? "Prearranged"
    : moment().isAfter(data.dateEnd, "day")
    ? "Overdated"
    : "In process";

  const totalStudent = data.studentsInfo.length;
  const passedStudent = data.studentsInfo.filter(
    student => student.statusType === "PASS"
  ).length;
  const hiredStudent = data.studentsInfo.filter(student => {
    const latestStatus = student.student.studentState.sort((a, b) => {
      const dateA = moment(a.createdAt);
      const dateB = moment(b.createdAt);

      return dateB - dateA;
    })[0];

    return latestStatus.statusType === "HIRED";
  }).length;
  const isFull = totalStudent / data.maxStudents === 1;

  return (
    <div style={styles.container(lastChild)}>
      <div style={styles.select}>
        <div style={styles.checkBox}></div>
      </div>

      <div
        style={
          trainingStatus === "Prearranged"
            ? { ...styles.type, ...styles.prearranged }
            : trainingStatus === "Overdated"
            ? { ...styles.type, ...styles.overdated }
            : { ...styles.type, ...styles.inProcess }
        }
      >
        {trainingStatus}
      </div>

      <div style={styles.title}>{data.title}</div>

      <div style={styles.date}>{`${moment(data.dateStart).format(
        "YYYY-MM-DD"
      )} ~ ${moment(data.dateEnd).format("YYYY-MM-DD")}`}</div>

      <div style={styles.applicants}>
        <div style={styles.graphBG}>
          <div
            style={styles.graphFilled(isFull, totalStudent / data.maxStudents)}
          ></div>
        </div>
        <div
          style={styles.label(isFull)}
        >{`${totalStudent} / ${data.maxStudents}`}</div>
      </div>

      <div style={styles.passed}>
        <div style={styles.graphBG}>
          <div
            style={styles.graphFilledYellow(passedStudent / totalStudent)}
          ></div>
        </div>
        <div
          style={styles.label(false)}
        >{`${passedStudent} / ${totalStudent}`}</div>
      </div>

      <div style={styles.hired}>
        <div style={styles.graphBG}>
          <div
            style={styles.graphFilledYellow(hiredStudent / totalStudent)}
          ></div>
        </div>
        <div
          style={styles.label(false)}
        >{`${hiredStudent} / ${totalStudent}`}</div>
      </div>

      <div style={styles.actions}>
        <img src="/images/ic-menu.svg" alt="more actions" />
      </div>
    </div>
  );
};

export default OverviewTableRow;

OverviewTableRow.propTypes = {
  data: PropTypes.object,
  lastChild: PropTypes.bool
};

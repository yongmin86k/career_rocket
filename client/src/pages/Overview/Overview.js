import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import styles from "./styles";

const Overview = ({ location }) => {
  return (
    <div style={styles.page}>
      <header style={styles.segmentController}>
        <Link to="/main/status" style={styles.link}>
          <div
            style={
              location.pathname === "/main" ||
              location.pathname === "/main/status"
                ? { ...styles.segment, ...styles.left, ...styles.active }
                : { ...styles.segment, ...styles.left }
            }
          >
            Client Status
          </div>
        </Link>

        <div style={styles.separator} />

        <Link to="/main/process" style={styles.link}>
          <div
            style={
              location.pathname === "/main/process"
                ? { ...styles.segment, ...styles.center, ...styles.active }
                : { ...styles.segment, ...styles.center }
            }
          >
            Consulting process
          </div>
        </Link>

        <div style={styles.separator} />

        <Link to="/main/job_training" style={styles.link}>
          <div
            style={
              location.pathname === "/main/job_training"
                ? { ...styles.segment, ...styles.right, ...styles.active }
                : { ...styles.segment, ...styles.right }
            }
          >
            Job Traning Courses
          </div>
        </Link>
      </header>
    </div>
  );
};

export default withRouter(Overview);

import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { OverviewStatus } from "../../components";
import styles from "./styles";

const Overview = ({ location }) => {
  const pathName = [
    {
      path: "/main/status",
      name: "Client Status"
    },
    {
      path: "/main/process",
      name: "Consulting process"
    },
    {
      path: "/main/job_training",
      name: "Job Traning Courses"
    }
  ];

  return (
    <div style={styles.page}>
      <header style={styles.segmentController}>
        {pathName.map((item, index) => (
          <Link key={`segmentItem_${index}`} to={item.path} style={styles.link}>
            <div
              style={
                index === 0
                  ? location.pathname === "/main" ||
                    location.pathname === item.path
                    ? { ...styles.segment, ...styles.left, ...styles.active }
                    : { ...styles.segment, ...styles.left }
                  : index === pathName.length - 1
                  ? location.pathname === item.path
                    ? { ...styles.segment, ...styles.right, ...styles.active }
                    : { ...styles.segment, ...styles.right }
                  : location.pathname === item.path
                  ? { ...styles.segment, ...styles.center, ...styles.active }
                  : { ...styles.segment, ...styles.center }
              }
            >
              {item.name}
            </div>
          </Link>
        ))}
      </header>

      <h1 style={styles.title}>
        {location.pathname === "/main"
          ? pathName[0].name
          : pathName.filter(item => item.path === location.pathname)[0].name}
      </h1>

      <OverviewStatus />
    </div>
  );
};

export default withRouter(Overview);
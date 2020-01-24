import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { CLIENTS_QUERY, TRAININGS_QUERY } from "../../apollo/queries";
import {
  OverviewDesktopStatus,
  OverviewDesktopTraining,
  OverviewDesktopProcess,
  OverviewStatus,
  OverviewProcess,
  OverviewTraining
} from "../../components";
import { useMediaQuery } from "../../hooks";
import {
  clientStatusDataFormat,
  clientProcessDataFormat
} from "../../lib/overviewDataHelper";
import styles from "./styles";

const Overview = ({ location }) => {
  const isMedia = useMediaQuery();

  const {
    data: clientData,
    loading: clientLoading,
    error: clientError
  } = useQuery(CLIENTS_QUERY);

  const {
    data: trainingData,
    loading: trainingLoading,
    error: trainingError
  } = useQuery(TRAININGS_QUERY);

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
    <div style={styles.page(isMedia)}>
      {isMedia === "mobile" ? (
        <>
          <header style={styles.segmentController}>
            {pathName.map((item, index) => (
              <Link
                key={`segmentItem_${index}`}
                to={item.path}
                style={styles.link}
              >
                <div
                  style={
                    index === 0
                      ? location.pathname === "/main" ||
                        location.pathname === item.path
                        ? {
                            ...styles.segment,
                            ...styles.left,
                            ...styles.active
                          }
                        : { ...styles.segment, ...styles.left }
                      : index === pathName.length - 1
                      ? location.pathname === item.path
                        ? {
                            ...styles.segment,
                            ...styles.right,
                            ...styles.active
                          }
                        : { ...styles.segment, ...styles.right }
                      : location.pathname === item.path
                      ? {
                          ...styles.segment,
                          ...styles.center,
                          ...styles.active
                        }
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
              : pathName.filter(item => item.path === location.pathname)[0]
                  .name}
          </h1>

          {location.pathname === "/main" ||
          pathName[0].path === location.pathname ? (
            <OverviewStatus
              loading={clientLoading}
              error={clientError}
              data={clientData && clientStatusDataFormat(clientData)}
            />
          ) : pathName[1].path === location.pathname ? (
            <OverviewProcess
              loading={clientLoading}
              error={clientError}
              data={clientData && clientProcessDataFormat(clientData)}
            />
          ) : pathName[2].path === location.pathname ? (
            <OverviewTraining
              loading={trainingLoading}
              error={trainingError}
              data={trainingData && trainingData.trainings}
            />
          ) : (
            <div>Page is not found.</div>
          )}
        </>
      ) : (
        <div style={styles.desktopContainer}>
          <div style={styles.leftWrap}>
            <h2 style={styles.contentTitle}>Job Training Courses</h2>

            <OverviewDesktopTraining
              loading={trainingLoading}
              error={trainingError}
              trainingData={trainingData && trainingData.trainings}
            />
          </div>
          <div style={styles.rightWrap}>
            <div style={styles.desktopContent}>
              <h2 style={styles.contentTitle}>Clients Status</h2>

              <OverviewDesktopStatus
                loading={clientLoading}
                error={clientError}
                data={clientData && clientStatusDataFormat(clientData)}
              />
            </div>

            <div style={styles.desktopContent}>
              <h2 style={styles.contentTitle}>Consulting Process</h2>

              <OverviewDesktopProcess
                loading={clientLoading}
                error={clientError}
                data={clientData && clientProcessDataFormat(clientData)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default withRouter(Overview);

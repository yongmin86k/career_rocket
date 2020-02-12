import React from "react";
import { useQuery } from "@apollo/react-hooks";
import moment from "moment";
import { FullScreenLoader } from "../../components";
import { TRAININGS_BY_TITLE_QUERY } from "../../apollo/queries";
import styles from "./styles";
import PropTypes from "prop-types";

const JobTraining = ({ trainingTitle }) => {
  const { data, loading, error } = useQuery(TRAININGS_BY_TITLE_QUERY, {
    variables: { title: trainingTitle }
  });

  if (loading) {
    return (
      <div style={styles.page}>
        <header style={styles.header}>
          <h1 style={styles.header.title}>{trainingTitle}</h1>
        </header>

        <FullScreenLoader show={loading} />
      </div>
    );
  }

  if (data) {
    const trainingData = data.trainingByTitle[0];
    const dateStart = trainingData.dateStart,
      dateEnd = trainingData.dateEnd,
      curStudents = trainingData.studentsInfo,
      maxStudents = trainingData.maxStudents;

    return (
      <div style={styles.page}>
        <header style={styles.header}>
          <h1 style={styles.header.title}>{trainingTitle}</h1>

          <div style={styles.header.meta}>
            <div style={styles.header.meta.date}>
              <img src="/images/ic-calendar-black.svg" alt="Date" />
              {`${moment(dateStart).format("YYYY-MM-DD")} ~ ${moment(
                dateEnd
              ).format("YYYY-MM-DD")}`}
            </div>

            <div style={styles.header.meta.client}>
              <img src="/images/ic-client-sm-black.svg" alt="Clients" />

              {`${curStudents.length} / ${maxStudents}`}
            </div>
          </div>
        </header>

        {curStudents.length < 1 ? (
          <div>No students yet</div>
        ) : (
          <div style={styles.content}>
            {curStudents.map((student, index) => {
              console.log(student);
              const studentName = student.student.name;
              return <div key={`studentInfo_${index}`}>{studentName}</div>;
            })}
          </div>
        )}

        <FullScreenLoader show={loading} />
      </div>
    );
  }
};

export default JobTraining;

JobTraining.propTypes = {
  token: PropTypes.string.isRequired,
  refreshTokenFn: PropTypes.func,
  trainingTitle: PropTypes.string.isRequired
};

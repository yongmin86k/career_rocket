import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { TRAININGS_BY_TITLE_QUERY } from "../../apollo/queries";
import styles from "./styles";
import PropTypes from "prop-types";

const JobTraining = ({ token, refreshTokenFn, trainingTitle }) => {
  const { data, loading, error } = useQuery(TRAININGS_BY_TITLE_QUERY, {
    variables: { title: trainingTitle }
  });

  console.log(data);

  return <div style={styles.page}>{trainingTitle}</div>;
};

export default JobTraining;

JobTraining.propTypes = {
  token: PropTypes.string.isRequired,
  refreshTokenFn: PropTypes.func,
  trainingTitle: PropTypes.string.isRequired
};

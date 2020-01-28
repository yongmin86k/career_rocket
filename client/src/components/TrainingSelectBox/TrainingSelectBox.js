import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { TRAININGS_QUERY } from "../../apollo/queries";
import { TrainingAccordion } from "../../components";
import TrainingContext from "../../context/TrainingContext";
import { trainingDataFormat } from "../../lib/trainingDataHelper";
import styles from "./styles";

const TrainingSelectBox = () => {
  const { toggleTrainingSelect } = useContext(TrainingContext);
  const {
    data: trainingData,
    loading: trainingLoading,
    error: trainingError
  } = useQuery(TRAININGS_QUERY);

  return (
    <div
      style={styles.dimmer}
      id="TrainingSelectDimmer"
      onClick={e => {
        if (e.target.id === "TrainingSelectDimmer") {
          toggleTrainingSelect();
        }
      }}
    >
      <div style={styles.box}>
        <div style={styles.searchBox}>
          <div style={styles.searchField}>
            <input
              style={styles.searchText}
              type="search"
              placeholder="Search..."
            />

            <div style={styles.searchIconBox}>
              <img src="/images/ic-search-white.svg" alt="Search" />
            </div>
          </div>
        </div>

        <div style={styles.resultBox}>
          {trainingData &&
            Object.keys(trainingDataFormat(trainingData.trainings)).map(
              (item, index) => {
                return (
                  <TrainingAccordion
                    key={`trainingCourses_${index}`}
                    title={item}
                    data={trainingDataFormat(trainingData.trainings)[item]}
                  />
                );
              }
            )}
        </div>

        <div style={styles.separator} />

        <div style={styles.buttonBox}>
          <button style={{ ...styles.defaultBtn, ...styles.createNewCourse }}>
            Create a new training course
          </button>

          <button
            style={{ ...styles.defaultBtn, ...styles.close }}
            onClick={toggleTrainingSelect}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrainingSelectBox;

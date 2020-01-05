import React from "react";
import moment from "moment";
import { useWindowDimensions } from "../../hooks";
import styles from "./styles";

const OverviewStatus = () => {
  const dimension = useWindowDimensions();

  return (
    <div>
      <div style={styles.box(dimension)}>Month</div>
    </div>
  );
};

export default OverviewStatus;

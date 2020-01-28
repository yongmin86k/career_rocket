import React, { useContext } from "react";
import styles from "./styles";
import TrainingContext from "../../context/TrainingContext";
import { BottomTabIcon } from "../../components";

const BottomTab = () => {
  const { toggleTrainingSelect } = useContext(TrainingContext);

  return (
    <div style={styles.container}>
      <BottomTabIcon link="/main" label="Overview" image="ic-overview" />
      <BottomTabIcon
        onClick={() => {
          toggleTrainingSelect();
        }}
        label="Job Training"
        image="ic-job-train"
      />
      <BottomTabIcon link="/clients" label="Clients" image="ic-clients" />
      <BottomTabIcon link="/settings" label="Settings" image="ic-settings" />
      <BottomTabIcon link="/logout" label="Log Out" image="ic-log-out" />
    </div>
  );
};

export default BottomTab;

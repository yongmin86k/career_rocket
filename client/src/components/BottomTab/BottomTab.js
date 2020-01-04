import React from "react";
import styles from "./styles";
import { BottomTabIcon } from "../../components";

const BottomTab = () => {
  return (
    <div style={styles.container}>
      <BottomTabIcon link="/main" label="Overview" image="ic-overview" />
      <BottomTabIcon
        link="/job_training"
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

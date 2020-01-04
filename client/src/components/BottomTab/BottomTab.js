import React from "react";
import styles from "./styles";
import { BottomTabIcon } from "../../components";

const BottomTab = () => {
  return (
    <div style={styles.container}>
      <BottomTabIcon active={true} label="Overview" image="ic-overview" />
      <BottomTabIcon active={false} label="Job Training" image="ic-job-train" />
      <BottomTabIcon active={false} label="Clients" image="ic-clients" />
      <BottomTabIcon active={false} label="Settings" image="ic-settings" />
      <BottomTabIcon active={false} label="Log Out" image="ic-log-out" />
    </div>
  );
};

export default BottomTab;

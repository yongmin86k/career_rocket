import React from "react";
import { NavLink } from "react-router-dom";
import { SideBarIcon } from "../../components";
import styles from "./styles";

const SideBar = () => {
  return (
    <>
      <div style={styles.leftContainer}>
        <div style={styles.navContainer}>
          <SideBarIcon
            link="/main"
            image="ic-overview-active.svg"
            alt="Overview"
          />

          <SideBarIcon
            link="/job_training"
            image="ic-job-train-active.svg"
            alt="Job training"
          />

          <SideBarIcon
            link="/clients"
            image="ic-clients-active.svg"
            alt="Clients"
          />
        </div>

        <div style={styles.navContainer}>
          <SideBarIcon
            link="/link"
            image="ic-add-new-course.svg"
            alt="Add a new course"
            style={styles.icNewCourse}
          />

          <SideBarIcon
            link="/link"
            image="ic-add-new-client.svg"
            alt="Add a new client"
            style={styles.icNewClient}
          />
        </div>
      </div>

      <div style={styles.topContainer}>
        <div style={styles.menuContainer}>
          <img src="/images/ic-hamburger-menu.svg" alt="menu" />
        </div>

        <header style={styles.titleContainer}>
          <h2 style={styles.label}>Overview</h2>
        </header>

        <div style={styles.settingContainer}>
          <NavLink to="/settings">
            <div
              style={{
                ...styles.settingMenuList,
                ...styles.settingMenuListFirstChild
              }}
            >
              <img src="/images/ic-settings-active.svg" alt="settings" />
              <p style={styles.label}>Settings</p>
            </div>
          </NavLink>

          <NavLink to="/logout">
            <div style={styles.settingMenuList}>
              <img src="/images/ic-log-out-active.svg" alt="Log out" />
              <p style={styles.label}>Log out</p>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default SideBar;

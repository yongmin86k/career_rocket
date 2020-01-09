import THEME from "../../theme";

const styles = {
  topContainer: {
    position: "fixed",
    top: 0,
    left: 0,
    display: "flex",
    width: "100vw",
    height: 76,
    backgroundColor: "white",
    borderBottom: `1px solid ${THEME.colors.lightGrey}`
  },
  menuContainer: {
    width: 80,
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRight: `1px solid ${THEME.colors.lightGrey}`
  },
  titleContainer: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    paddingLeft: THEME.spacing(3.5)
  },
  settingContainer: {
    display: "flex",
    alignItems: "center",
    paddingLeft: THEME.spacing(1.875),
    paddingRight: THEME.spacing(3.5),
    borderLeft: `1px solid ${THEME.colors.lightGrey}`
  },
  label: {
    ...THEME.typography.caption,
    fontWeight: THEME.typography.weight.bold,
    textTransform: "uppercase",
    color: THEME.colors.grey
  },
  settingMenuList: {
    display: "flex",
    alignItems: "center",
    paddingLeft: THEME.spacing(0.5),
    paddingRight: THEME.spacing(0.75)
  },
  settingMenuListFirstChild: {
    marginRight: THEME.spacing(2.25)
  },

  leftContainer: {
    position: "fixed",
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    width: 80,
    height: "100vh",
    backgroundColor: "white",
    borderRight: `1px solid ${THEME.colors.lightGrey}`,
    paddingTop: THEME.spacing(7)
  },
  navContainer: {
    width: "100%"
  },
  icNewCourse: {
    marginBottom: THEME.spacing(0.75)
  },
  icNewClient: {
    marginBottom: THEME.spacing(2.25)
  }
};

export default styles;

import THEME from "../../theme";

const styles = {
  page: isMedia => ({
    backgroundColor: THEME.colors.solitudeBlue,
    minWidth: "100vw",
    minHeight: "100vh",
    paddingTop: isMedia === "mobile" ? "unset" : THEME.spacing(7.875),
    paddingLeft: isMedia === "mobile" ? "unset" : THEME.spacing(8.5),
    paddingRight: isMedia === "mobile" ? "unset" : THEME.spacing(3.5),
    paddingBottom: isMedia === "mobile" ? 84 : "unset"
  }),
  segmentController: {
    display: "flex",
    paddingTop: 22,
    paddingLeft: THEME.spacing(1.25),
    paddingRight: THEME.spacing(1.25),
    marginBottom: THEME.spacing(1.5)
  },
  link: { flex: 1 },
  segment: {
    height: 32,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 6,
    paddingTop: 0,
    paddingBottom: 0,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: THEME.colors.blue,
    backgroundColor: "white",
    fontSize: 8,
    fontWeight: THEME.typography.weight.medium,
    textTransform: "uppercase",
    textAlign: "center",
    color: THEME.colors.blue,
    cursor: "pointer",
    transition: THEME.transition,
    transitionDuration: "200ms"
  },
  left: {
    borderRightWidth: 1,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4
  },
  center: { borderRightWidth: 0, borderLeftWidth: 0 },
  right: {
    borderLeftWidth: 1,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4
  },
  active: {
    backgroundColor: THEME.colors.blue,
    color: "white"
  },
  title: {
    paddingLeft: THEME.spacing(1.25),
    paddingRight: THEME.spacing(1.25),
    fontSize: 20,
    fontWeight: THEME.typography.weight.bold,
    textTransform: "uppercase",
    marginBottom: THEME.spacing(0.625)
  },
  desktopContainer: {
    display: "flex"
  },
  leftWrap: {
    flex: 1,
    marginRight: THEME.spacing(2)
  },
  rightWrap: {
    width: 302
  },
  contentTitle: {
    marginBottom: THEME.spacing(0.5),
    fontSize: 20,
    fontWeight: THEME.typography.weight.bold,
    textTransform: "uppercase"
  }
};

export default styles;

import THEME from "../../theme";

const styles = {
  page: {
    backgroundColor: THEME.colors.solitudeBlue,
    minWidth: "100vw",
    minHeight: "100vh"
  },
  segmentController: {
    display: "flex",
    paddingTop: 22,
    paddingLeft: 20,
    paddingRight: 20
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
    fontSize: 8,
    fontWeight: THEME.typography.weight.medium,
    textTransform: "uppercase",
    textAlign: "center",
    color: THEME.colors.blue,
    cursor: "pointer"
  },
  left: {
    borderRightWidth: 0,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4
  },
  center: { borderRightWidth: 0, borderLeftWidth: 0 },
  right: {
    borderLeftWidth: 0,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4
  },
  active: {
    backgroundColor: THEME.colors.blue,
    color: "white"
  },
  separator: {
    height: 32,
    width: 1,
    backgroundColor: THEME.colors.blue
  }
};

export default styles;

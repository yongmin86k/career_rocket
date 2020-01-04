import THEME from "../../theme";

const styles = {
  container: {
    width: "100%",
    textAlign: "center",
    ...THEME.typography.copyRight,
    fontWeight: THEME.typography.weight.bold,
    color: THEME.colors.darkBlue,
    cursor: "pointer"
  },
  wrapper: {
    width: 36,
    height: 36,
    margin: "0 auto 2px auto",
    borderRadius: 4,
    backgroundColor: THEME.colors.darkBlue
  },
  activeWrapper: {
    backgroundColor: "white"
  },
  label: {
    width: "100%",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  activeLabel: {
    color: "white"
  }
};

export default styles;

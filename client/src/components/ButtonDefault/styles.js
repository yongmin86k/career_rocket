import THEME from "../../theme";

const styles = {
  default: {
    cursor: "pointer",
    width: "100%",
    height: 48,
    backgroundColor: "white",
    borderRadius: 4,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: THEME.colors.blue,
    textTransform: "uppercase",
    ...THEME.typography.default,
    fontWeight: THEME.typography.weight.bold,
    color: THEME.colors.blue,
    transition: THEME.transition
  },
  active: {
    backgroundColor: THEME.colors.blue,
    color: "white"
  }
};

export default styles;

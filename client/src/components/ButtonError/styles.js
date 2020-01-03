import THEME from "../../theme";

const styles = {
  default: {
    cursor: "pointer",
    height: 48,
    paddingRight: THEME.spacing(1.875),
    paddingLeft: THEME.spacing(1.875),
    backgroundColor: "white",
    borderRadius: 4,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: THEME.colors.red,
    textTransform: "uppercase",
    ...THEME.typography.caption,
    fontWeight: THEME.typography.weight.bold,
    color: THEME.colors.red,
    transition: THEME.transition
  }
};

export default styles;

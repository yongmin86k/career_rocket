import THEME from "../../theme";

const styles = {
  labelText: {
    ...THEME.typography.caption,
    color: THEME.colors.blue,
    fontWeight: THEME.typography.weight.medium,
    marginBottom: THEME.spacing(0.25)
  },
  field: {
    ...THEME.typography.body,
    width: "100%",
    height: 48,
    padding: THEME.spacing(0.75),
    paddingTop: 14,
    paddingBottom: 14,
    backgroundColor: THEME.colors.solitudeBlue,
    borderRadius: 4,
    borderColor: "transparent",
    borderWidth: 0,
    borderStyle: "solid",
    outlineStyle: "none",
    color: THEME.colors.black,
    transition: THEME.transition
  },
  activeField: {
    ...THEME.shadow
  }
};

export default styles;

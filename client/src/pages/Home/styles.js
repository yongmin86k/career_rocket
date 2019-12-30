import THEME from "../../theme";

const styles = {
  container: {
    backgroundImage:
      "linear-gradient(151deg, #f2f3f7, #53a0fd 67%, #2542b7 103%)",
    minWidth: "100vw",
    minHeight: "100vh",
    padding: THEME.spacing(),
    paddingTop: 25,
    paddingBottom: THEME.spacing(0.75)
  },
  box: {
    marginTop: THEME.spacing(2.75)
  },
  title: {
    ...THEME.typography.title,
    color: THEME.colors.black,
    marginBottom: THEME.spacing(0.125)
  },
  caption: {
    ...THEME.typography.caption,
    color: THEME.colors.grey,
    marginBottom: THEME.spacing(2.25)
  },
  input: {
    display: "block",
    marginBottom: THEME.spacing(1.25)
  },
  checkBoxContainer: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: 20,
    marginBottom: 26
  },
  inputCheckBox: {
    display: "none"
  },
  checkBox: {
    width: 20,
    height: "100%",
    marginRight: 6,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: THEME.colors.grey,
    borderRadius: 2
  },
  checkBoxImg: {
    width: "100%",
    height: "100%"
  },
  checkBoxLabel: {
    ...THEME.typography.caption,
    fontWeight: THEME.typography.weight.medium,
    color: THEME.colors.grey
  },
  copyRights: {
    marginTop: THEME.spacing(5),
    ...THEME.typography.copyRight,
    textAlign: "right",
    color: "white"
  }
};

export default styles;

import THEME from "../../theme";

const styles = {
  page: isMedia => ({
    width: "inherit",
    height: "inherit",
    minWidth: "inherit",
    minHeight: "inherit",
    display: isMedia === "mobile" ? "block" : "flex",
    flexDirection: isMedia === "mobile" ? "unset" : "row-reverse"
  }),
  bgContainer: isMedia =>
    isMedia === "mobile"
      ? {
          zIndex: -1,
          position: "fixed",
          top: 0,
          left: 0,
          backgroundImage:
            "linear-gradient(151deg, #f2f3f7, #53a0fd 67%, #2542b7 103%)",
          width: "100vw",
          height: "100vh"
        }
      : {
          position: "relative",
          flex: 1,
          backgroundImage:
            "linear-gradient(151deg, #f2f3f7, #53a0fd 67%, #2542b7 103%)",
          padding: THEME.spacing(4)
        },
  imgWelcome: {
    width: "100%",
    height: "100%",
    backgroundImage: "url(/images/bg-main@2x.png)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "contain"
  },
  container: isMedia =>
    isMedia === "mobile"
      ? {
          minWidth: "100vw",
          minHeight: "100vh",
          padding: THEME.spacing(),
          paddingTop: 25,
          paddingBottom: THEME.spacing(0.75)
        }
      : {
          minWidth: 456,
          padding: THEME.spacing(2.25)
        },
  logo: isMedia => ({
    display: "block",
    width: 212,
    height: 50,
    marginBottom: isMedia === "mobile" ? 0 : THEME.spacing(10)
  }),
  box: isMedia => ({
    margin: "0 auto",
    marginTop: isMedia === "mobile" ? THEME.spacing(2.75) : 0,
    width: isMedia === "mobile" ? "100%" : 312,
    maxWidth: 456,
    transition: THEME.transition
  }),
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
  accountForm: isMedia => ({
    ...THEME.typography.caption,
    cursor: "pointer",
    marginTop: THEME.spacing(1),
    textDecoration: "underline",
    textAlign: "center",
    color: isMedia === "mobile" ? "white" : THEME.colors.blue
  }),
  copyRights: isMedia => ({
    position: isMedia === "mobile" ? "relative" : "absolute",
    marginTop: isMedia === "mobile" ? THEME.spacing(4) : 0,
    bottom: isMedia === "mobile" ? "unset" : 28,
    right: isMedia === "mobile" ? "unset" : 36,
    ...THEME.typography.copyRight,
    textAlign: "right",
    color: "white"
  })
};

export default styles;

import THEME from "../../theme";

const styles = {
  modalContainer: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    padding: THEME.spacing(2.5),
    backgroundColor: "rgba(0,0,0,0.8)",
    backdropFilter: "blur(2px)",
    overflow: "hidden",
    opacity: 1,
    visibility: "visible",
    transition: THEME.transition,
    zIndex: 999
  },
  popup: isMedia => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    ...THEME.shadow,
    padding: THEME.spacing(),
    paddingTop: 24,
    paddingBottom: 20,
    width: isMedia === "mobile" ? "100%" : 280
  }),
  iconError: {
    width: 50,
    height: 50,
    marginBottom: THEME.spacing(0.25)
  },
  title: {
    marginBottom: THEME.spacing(),
    ...THEME.typography.caption,
    fontWeight: THEME.typography.weight.medium,
    textTransform: "uppercase",
    color: THEME.colors.red
  },
  errorText: {
    ...THEME.typography.caption,
    color: THEME.colors.grey,
    marginBottom: THEME.spacing(1.25)
  }
};

export default styles;

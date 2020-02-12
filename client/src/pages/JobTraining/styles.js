import THEME from "../../theme";

const styles = {
  page: {
    backgroundColor: THEME.colors.solitudeBlue,
    minWidth: "100vw",
    minHeight: "100vh"
  },
  header: {
    paddingTop: THEME.spacing(),
    paddingBottom: THEME.spacing(0.5),

    title: {
      width: "100%",
      fontSize: 20,
      fontWeight: THEME.typography.weight.bold,
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      overflow: "hidden",
      paddingLeft: THEME.spacing(1.25),
      paddingRight: THEME.spacing(1.25),
      color: THEME.colors.blue
    },

    meta: {
      display: "flex",
      ...THEME.typography.caption,
      fontWeight: THEME.typography.weight.bold,

      date: {
        display: "flex",
        alignItems: "center",
        marginLeft: 15
      },

      client: {
        display: "flex",
        alignItems: "center",
        marginLeft: THEME.spacing()
      }
    }
  },
  content: {
    paddingLeft: THEME.spacing(1.25),
    paddingRight: THEME.spacing(1.25)
  }
};

export default styles;

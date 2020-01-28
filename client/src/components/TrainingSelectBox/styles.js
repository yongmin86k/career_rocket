import THEME from "../../theme";

const styles = {
  dimmer: {
    ...THEME.dimmer,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: THEME.spacing(1.25),
    paddingTop: 90,
    paddingBottom: 90
  },
  box: {
    ...THEME.box,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  searchBox: {
    flex: "none",
    padding: THEME.spacing(0.625),
    paddingTop: THEME.spacing(0.75),
    paddingBottom: THEME.spacing(0.25)
  },
  searchField: {
    display: "flex",
    alignItems: "center",
    height: 36,
    borderRadius: 4,
    backgroundColor: THEME.colors.solitudeBlue,
    paddingLeft: THEME.spacing(0.625)
  },
  searchText: {
    ...THEME.body,
    flex: 1,
    marginRight: THEME.spacing(0.625)
  },
  searchIconBox: {
    flex: "none",
    width: 36,
    height: "100%",
    backgroundColor: THEME.colors.black,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4
  },
  resultBox: {
    flex: 1,
    padding: THEME.spacing(0.5),
    paddingTop: THEME.spacing(0.625),
    paddingBottom: THEME.spacing(0.625),
    overflowY: "scroll"
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: THEME.colors.lightGrey
  },
  buttonBox: {
    flex: "none",
    padding: THEME.spacing(),
    paddingRight: THEME.spacing(0.625),
    paddingLeft: THEME.spacing(0.625),
    display: "flex",
    flexDirection: "column"
  },
  defaultBtn: {
    width: "100%",
    height: 36,
    borderRadius: 4,
    ...THEME.typography.caption,
    fontWeight: THEME.typography.weight.bold,
    cursor: "pointer"
  },
  createNewCourse: {
    backgroundColor: "white",
    color: THEME.colors.blue,
    border: `solid 1px ${THEME.colors.blue}`,
    marginBottom: THEME.spacing(0.75)
  },
  close: {
    backgroundColor: THEME.colors.blue,
    color: "white",
    border: "none",
    textTransform: "uppercase"
  }
};

export default styles;

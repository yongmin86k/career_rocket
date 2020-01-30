import THEME from "../../theme";

const styles = {
  accordionTitle: {
    flex: 1,
    ...THEME.typography.copyRight,
    fontWeight: THEME.typography.weight.bold,
    color: THEME.colors.grey,
    textTransform: "uppercase"
  },
  accordionNum: title => ({
    width: 32,
    height: 16,
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 8,
    fontWeight: THEME.typography.weight.bold,
    color: "white",
    backgroundColor:
      title === "preArr"
        ? THEME.colors.grey
        : title === "overDate"
        ? THEME.colors.red
        : THEME.colors.blue
  }),
  contentNoData: {
    padding: THEME.spacing(0.5),
    ...THEME.typography.copyRight,
    fontWeight: THEME.typography.weight.medium,
    color: THEME.colors.grey,
    backgroundColor: THEME.colors.solitudeBlue,
    border: `solid 1px ${THEME.colors.lightGrey}`,
    borderTop: `solid 0 transparent`,
    borderRadius: `0 0 4px 4px`
  },
  contentBox: ({ lastChild }) => ({
    position: "relative",
    paddingLeft: THEME.spacing(0.25),
    paddingRight: THEME.spacing(0.25),
    height: 50,
    display: "flex",
    alignItems: "center",
    marginBottom: lastChild ? THEME.spacing(0.5) : "unset",
    backgroundColor: THEME.colors.solitudeBlue,
    borderRight: `solid 1px ${THEME.colors.lightGrey}`,
    borderLeft: `solid 1px ${THEME.colors.lightGrey}`,
    borderBottom: lastChild ? `solid 1px ${THEME.colors.lightGrey}` : "unset",
    borderRadius: lastChild ? `0 0 4px 4px` : "unset"
  }),
  wrapper: {
    width: "100%",
    paddingLeft: THEME.spacing(0.25),
    paddingRight: THEME.spacing(0.25)
  },
  periods: {
    ...THEME.typography.copyRight,
    fontWeight: THEME.typography.weight.medium,
    color: THEME.colors.grey,
    marginBottom: THEME.spacing(0.125)
  },
  title: {
    ...THEME.typography.body,
    fontWeight: THEME.typography.weight.medium,
    width: "100%",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    color: THEME.colors.black
  },
  separator: {
    position: "absolute",
    width: "96%",
    height: 1,
    backgroundColor: THEME.colors.lightGrey,
    bottom: 0,
    left: "50%",
    transform: "translate(-50%)"
  }
};

export default styles;

import THEME from "../../theme";

const styles = {
  container: {
    ...THEME.typography.copyRight,
    fontWeight: THEME.typography.weight.medium,
    border: `1px solid ${THEME.colors.lightGrey}`,
    borderRadius: 4,
    backgroundColor: "white",
    overflow: "hidden"
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 42,
    borderBottom: `1px solid ${THEME.colors.lightGrey}`,
    backgroundColor: THEME.colors.bgGrey,
    paddingLeft: THEME.spacing(),
    color: THEME.colors.grey,
    textTransform: "uppercase"
  },
  select: {
    width: 24,
    textAlign: "center"
  },
  type: {
    width: 80,
    display: "flex",
    alignItems: "center",
    paddingRight: THEME.spacing(0.5)
  },
  icOrder: { marginLeft: THEME.spacing(0.25) },
  title: {
    flex: 2,
    display: "flex",
    alignItems: "center",
    paddingRight: THEME.spacing(0.5)
  },
  date: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    paddingRight: THEME.spacing(0.5)
  },
  applicants: {
    width: 90,
    textAlign: "center"
  },
  passed: {
    width: 64,
    textAlign: "center"
  },
  hired: {
    width: 64,
    textAlign: "center"
  },
  actions: {
    textAlign: "center",
    width: 60
  }
};

export default styles;

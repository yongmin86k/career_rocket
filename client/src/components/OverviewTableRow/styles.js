import THEME from "../../theme";

const styles = {
  container: lastChild => ({
    paddingTop: THEME.spacing(0.75),
    paddingBottom: THEME.spacing(0.75),
    paddingLeft: THEME.spacing(),
    minHeight: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: lastChild ? "none" : `1px solid ${THEME.colors.lightGrey}`
  }),
  select: {
    width: 24,
    display: "flex",
    justifyContent: "center"
  },
  checkBox: {
    width: 12,
    height: 12,
    border: `1px solid ${THEME.colors.grey}`,
    borderRadius: 2
  },
  type: {
    width: 80,
    display: "flex",
    alignItems: "center",
    paddingRight: THEME.spacing(0.5)
  },
  prearranged: {
    color: THEME.colors.grey
  },
  overdated: {
    color: THEME.colors.red
  },
  inProcess: {
    color: THEME.colors.blue
  },
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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 60
  },
  graphBG: {
    width: 52,
    height: 4,
    borderRadius: 2,
    backgroundColor: THEME.colors.lightGrey,
    margin: "0 auto",
    marginBottom: 3
  },
  graphFilled: (isFull, width) => ({
    width: `${width * 100}%`,
    height: "100%",
    borderRadius: 2,
    backgroundColor: isFull
      ? THEME.color.legends.mainBlue
      : THEME.colors.legends.lightBlue
  }),
  graphFilledYellow: width => ({
    width: `${width * 100}%`,
    height: "100%",
    borderRadius: 2,
    backgroundColor: THEME.colors.legends.yellow
  }),
  label: isFull => ({
    color: isFull ? THEME.colors.black : THEME.colors.grey
  })
};

export default styles;

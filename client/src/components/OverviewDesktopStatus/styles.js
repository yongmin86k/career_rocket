import THEME from "../../theme";

const styles = {
  container: {
    position: "relative",
    ...THEME.box,
    ...THEME.typography.copyRight,
    fontWeight: THEME.typography.weight.medium,
    color: THEME.colors.grey,
    paddingLeft: THEME.spacing(0.75),
    paddingRight: THEME.spacing(),
    paddingTop: THEME.spacing(1.875),
    paddingBottom: THEME.spacing()
  },
  chartContainer: {
    position: "relative",
    paddingLeft: THEME.spacing(3),
    paddingTop: 6,
    paddingBottom: 26,
    marginBottom: THEME.spacing(),
    height: 188,
    display: "flex",
    flexDirection: "column-reverse",
    justifyContent: "space-between"
  },
  chartLine: {
    position: "relative",
    width: "100%",
    height: 1,
    backgroundColor: THEME.colors.lightGrey
  },
  legendNum: {
    position: "absolute",
    top: 0,
    left: -THEME.spacing(3),
    transform: "translateY(-50%)",
    width: 32,
    textAlign: "right"
  },
  cartContents: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    paddingLeft: THEME.spacing(3),
    paddingTop: 6,
    paddingBottom: 26,
    display: "flex",
    justifyContent: "space-around"
  },
  legendInfo: {
    paddingLeft: THEME.spacing(0.25),
    display: "flex",
    justifyContent: "space-between"
  },
  legendItem: {
    display: "flex",
    alignItems: "center"
  },
  legendColor: {
    width: 10,
    height: 10,
    borderRadius: 2,
    marginRight: THEME.spacing(0.25)
  },
  hired: {
    backgroundColor: THEME.colors.legends.mainBlue
  },
  inProgress: {
    backgroundColor: THEME.colors.legends.lightBlue
  },
  withdraw: {
    backgroundColor: THEME.colors.legends.grey
  },
  layoff: {
    backgroundColor: THEME.colors.legends.yellow
  }
};

export default styles;

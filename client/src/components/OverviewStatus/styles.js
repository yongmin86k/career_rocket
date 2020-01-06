import THEME from "../../theme";

const styles = {
  box: ({ width, height }) => ({
    ...THEME.box,
    margin: "0px auto",
    width: width - 40
  }),
  contents: {
    padding: 16,
    paddingTop: 14,
    paddingBottom: 0,
    marginBottom: 24,
    display: "flex",
    justifyContent: "space-between"
  },
  label: {
    ...THEME.typography.copyRight,
    fontWeight: THEME.typography.weight.medium,
    color: THEME.colors.grey
  },
  contentText: {
    fontSize: 24,
    lineHeight: "19px"
  },
  dateYear: {
    fontSize: 16
  },
  totalNumber: {
    color: THEME.colors.blue
  },
  graph: {
    height: 46,
    marginBottom: THEME.spacing(0.75)
  },
  graphBar: {
    padding: 16,
    paddingTop: 0,
    paddingBottom: 0,
    height: 25
  },
  barWrapper: {
    width: "100%",
    height: "100%",
    display: "flex",
    position: "relative"
  },
  barOutline: {
    width: "100%",
    height: "100%",
    border: `solid 1px ${THEME.colors.lightGrey}`,
    position: "absolute"
  },
  barObject: width => ({
    position: "relative",
    width: `${width}%`,
    height: "100%"
  }),
  barObject_0: {
    backgroundColor: THEME.colors.legends.yellow
  },
  barObject_1: {
    backgroundColor: THEME.colors.legends.grey
  },
  barObject_2: {
    backgroundColor: THEME.colors.legends.lightBlue
  },
  barObject_3: {
    backgroundColor: THEME.colors.legends.mainBlue
  },
  barMarkingWrapper: {
    marginTop: 1,
    height: 4,
    width: "100%",
    display: "flex",
    justifyContent: "space-between"
  },
  barMarking: {
    position: "relative",
    width: 1,
    height: "100%",
    backgroundColor: THEME.colors.lightGrey
  },
  barMarkingLegend: {
    position: "absolute",
    ...THEME.typography.copyRight,
    fontWeight: THEME.typography.weight.medium,
    color: THEME.colors.grey,
    top: 4,
    left: "50%",
    transform: "translateX(-50%)"
  },
  indicesWrapper: {
    display: "flex",
    flexDirection: "column-reverse",
    padding: 16,
    paddingTop: 0,
    paddingBottom: 0
  },
  indexItem: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: 40,
    ...THEME.typography.copyRight,
    borderBottom: `solid 1px ${THEME.colors.lightGrey}`
  },
  indexLastItem: {
    borderBottomWidth: 0
  },
  indexContent: {
    display: "flex",
    alignItems: "center",
    width: 128,
    marginRight: THEME.spacing(0.5),
    fontWeight: THEME.typography.weight.medium,
    color: THEME.colors.grey
  },
  indexMark: {
    width: 10,
    height: 10,
    borderRadius: 2,
    marginRight: THEME.spacing(0.25)
  },
  indexMark_0: {
    backgroundColor: THEME.colors.legends.yellow
  },
  indexMark_1: {
    backgroundColor: THEME.colors.legends.grey
  },
  indexMark_2: {
    backgroundColor: THEME.colors.legends.lightBlue
  },
  indexMark_3: {
    backgroundColor: THEME.colors.legends.mainBlue
  },
  indexLabel: {
    flex: 1
  },
  percent: {
    fontSize: 8
  }
};

export default styles;

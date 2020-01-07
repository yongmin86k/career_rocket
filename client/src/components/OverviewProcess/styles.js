import THEME from "../../theme";

const styles = {
  box: ({ width, height }) => ({
    position: "relative",
    ...THEME.box,
    width: width - 40,
    margin: "0 auto",
    marginBottom: 2
  }),
  pieWrapper: {
    position: "relative",

    paddingTop: 8,
    paddingLeft: 62,
    paddingRight: 62
  },
  pieLegend: {
    display: "block",
    width: "100%",
    height: "auto"
  },
  totalWrapper: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center"
  },
  labelText: {
    ...THEME.typography.copyRight,
    fontWeight: THEME.typography.weight.medium
  },
  totalText: {
    fontSize: 24,
    color: THEME.colors.blue,
    lineHeight: "20px"
  },
  indicesWrapper: {
    display: "flex",
    flexDirection: "column",
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
    width: "48%",
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
    backgroundColor: THEME.colors.legends.mainBlue
  },
  indexMark_1: {
    backgroundColor: THEME.colors.legends.lightBlue
  },
  indexMark_2: {
    backgroundColor: THEME.colors.legends.columbiaBlue
  },
  indexMark_3: {
    backgroundColor: THEME.colors.legends.echoBlue
  },
  indexMark_4: {
    backgroundColor: THEME.colors.legends.grey
  },
  indexLabel: {
    flex: 1
  },
  percent: {
    fontSize: 8
  }
};

export default styles;

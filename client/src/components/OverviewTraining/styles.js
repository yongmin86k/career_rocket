import THEME from "../../theme";

const styles = {
  box: ({ width, height }) => ({
    position: "relative",
    ...THEME.box,
    width: width - 40,
    margin: "0 auto",
    marginBottom: THEME.spacing(0.625),
    paddingTop: 10,
    paddingBottom: 14
  }),
  boxHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: THEME.spacing(0.25),
    paddingLeft: THEME.spacing(0.75),
    paddingRight: THEME.spacing(0.625)
  },
  labelStatus: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 84,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderStyle: "solid",
    ...THEME.typography.copyRight,
    fontWeight: THEME.typography.weight.medium
  },
  labelColorGrey: {
    color: THEME.colors.grey,
    borderColor: THEME.colors.grey
  },
  labelColorRed: {
    color: THEME.colors.red,
    borderColor: THEME.colors.red
  },
  labelColorBlue: {
    color: THEME.colors.blue,
    borderColor: THEME.colors.blue
  },
  trainingMeta: {
    paddingRight: THEME.spacing(),
    paddingLeft: THEME.spacing(),
    marginBottom: THEME.spacing()
  },
  title: {
    ...THEME.typography.default,
    fontWeight: THEME.typography.weight.medium,
    marginBottom: THEME.spacing(0.125)
  },
  date: {
    ...THEME.typography.copyRight,
    fontWeight: THEME.typography.weight.medium
  },
  trainingInfo: {
    paddingRight: THEME.spacing(0.875),
    paddingLeft: THEME.spacing(0.875),
    display: "flex",
    justifyContent: "space-between"
  },
  trainingInfoWrapper: {
    flex: 1,
    display: "flex",
    alignItems: "center"
  },
  trainingIcon: {
    width: 32,
    height: 32,
    backgroundColor: THEME.colors.bgGrey,
    borderRadius: 4,
    marginRight: 6
  },
  trainingLabel: {
    fontSize: 8,
    fontWeight: THEME.typography.weight.medium,
    color: THEME.colors.grey,
    textTransform: "uppercase"
  },
  trainingText: {
    ...THEME.typography.body
  }
};

export default styles;

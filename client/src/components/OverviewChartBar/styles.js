import THEME from "../../theme";

const styles = {
  bar: {
    display: "flex",
    flexDirection: "column-reverse",
    position: "relative",
    width: 14,
    height: "100%"
  },
  barElement: (type, height) => ({
    position: "relative",
    height: `${height}%`,
    cursor: "pointer",
    backgroundColor:
      type === "LAYOFF"
        ? THEME.colors.legends.yellow
        : type === "WITHDRAW"
        ? THEME.colors.legends.grey
        : type === "IN_PROGRESS"
        ? THEME.colors.legends.lightBlue
        : THEME.colors.legends.mainBlue
  }),
  month: {
    position: "absolute",
    bottom: -20,
    left: "50%",
    transform: "translateX(-50%)",
    textTransform: "uppercase"
  },
  info: {
    position: "absolute",
    left: "50%",
    top: 0,
    transform: "translate(-50%, -50%)",
    visibility: "hidden",
    transition: THEME.transition,
    opacity: 0,
    padding: "2px 4px",
    border: `solid 1px ${THEME.colors.lightGrey}`,
    borderRadius: 2,
    backgroundColor: "white",
    zIndex: 1
  },
  infoHover: {
    visibility: "visible",
    opacity: 1
  }
};

export default styles;

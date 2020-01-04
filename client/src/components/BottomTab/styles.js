import THEME from "../../theme";

const styles = {
  container: {
    position: "fixed",
    display: "grid",
    alignItems: "center",
    gridTemplateColumns: "repeat(5, minmax(56px, 1fr))",
    gridColumnGap: 6,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: THEME.colors.bottomTabBlue,
    width: "100vw",
    height: 84,
    left: 0,
    bottom: 0,
    boxShadow: "0 -2px 12px 0 rgba(80, 117, 221, 0.24)"
  }
};

export default styles;

import THEME from "../../theme";

const styles = {
  modalContainer: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.8)",
    backdropFilter: "blur(2px)",
    overflow: "hidden",
    opacity: 1,
    visibility: "visible",
    transition: THEME.transition,
    zIndex: 999
  },
  hide: {
    zIndex: -1,
    opacity: 0,
    visibility: "hidden"
  },
  label: {
    marginTop: THEME.spacing(0.25),
    ...THEME.typography.caption,
    color: "white"
  },
  ldsSpinner: {
    color: "white",
    display: "inlineBlock",
    position: "relative",
    width: 80,
    height: 80
  },
  child: {
    transformOrigin: "40px 40px",
    opacity: 0
  },
  pseudo: {
    display: "block",
    position: "absolute",
    top: 3,
    left: 37,
    width: 6,
    height: 18,
    borderRadius: "20%",
    background: "white"
  },

  nthChild_0: {
    transform: "rotate(0deg)",
    animationDelay: "-1.1s"
  },
  nthChild_1: {
    transform: "rotate(30deg)",
    animationDelay: "-1s"
  },
  nthChild_2: {
    transform: "rotate(60deg)",
    animationDelay: "-0.9s"
  },
  nthChild_3: {
    transform: "rotate(90deg)",
    animationDelay: "-0.8s"
  },
  nthChild_4: {
    transform: "rotate(120deg)",
    animationDelay: "-0.7s"
  },
  nthChild_5: {
    transform: "rotate(150deg)",
    animationDelay: "-0.6s"
  },
  nthChild_6: {
    transform: "rotate(180deg)",
    animationDelay: "-0.5s"
  },
  nthChild_7: {
    transform: "rotate(210deg)",
    animationDelay: "-0.4s"
  },
  nthChild_8: {
    transform: "rotate(240deg)",
    animationDelay: "-0.3s"
  },
  nthChild_9: {
    transform: "rotate(270deg)",
    animationDelay: "-0.2s"
  },
  nthChild_10: {
    transform: "rotate(300deg)",
    animationDelay: "-0.1s"
  },
  nthChild_11: {
    transform: "rotate(330deg)",
    animationDelay: "0s"
  }
};

export default styles;

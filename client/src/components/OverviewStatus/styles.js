import THEME from "../../theme";

const styles = {
  box: ({ width, height }) => ({
    ...THEME.box,
    margin: "0px auto",
    width: width - 40
  })
};

export default styles;

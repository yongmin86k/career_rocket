const styles = {
  colors: {
    red: "rgba(255, 1, 0, 1)",
    blue: "rgba(80, 117, 221, 1)",
    darkBlue: "rgba(19, 37, 70, 1)",
    bottomTabBlue: "rgba(48, 70, 132, 1)",
    hoverBlue: "rgba(39, 57, 108, 1)",
    solitudeBlue: "rgba(242, 243, 247, 1)",
    black: "rgba(53, 53, 53, 1)",
    grey: "rgba(137, 139, 141, 1)",
    lightGrey: "rgba(214, 214, 214, 1)",
    bgGrey: "rgba(245, 245, 245, 1)",
    legends: {
      yellow: "rgba(255, 201, 71, 1)",
      grey: "rgba(214, 214, 214, 1)",
      lightBlue: "rgba(136, 173, 240, 1)",
      columbiaBlue: "rgba(159, 224, 255, 1)",
      echoBlue: "rgba(161, 173, 209, 1)",
      mainBlue: "rgba(80, 117, 221, 1)"
    }
  },

  dimmer: {
    position: "fixed",
    width: "100vw",
    height: "100vh",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.72)"
  },

  typography: {
    copyRight: {
      fontSize: 10
    },
    caption: {
      fontSize: 12
    },
    body: {
      fontSize: 14
    },
    default: {
      fontSize: 16
    },
    title: {
      fontSize: 24,
      fontWeight: 600
    },
    weight: {
      medium: "500",
      bold: "600"
    }
  },

  container: {
    padding: 18,
    paddingLeft: 16,
    paddingRight: 16
  },

  box: {
    borderRadius: 4,
    border: "solid 1px #d6d6d6",
    backgroundColor: "white"
  },

  shadow: {
    borderRadius: 8,
    boxShadow: "0 2px 12px 0 rgba(80, 117, 221, 0.24)",
    backgroundColor: "white"
  },

  transition: "all 400ms ease-in-out",

  spacing: (int = 1) => {
    return int * 16;
  }
};

export default styles;

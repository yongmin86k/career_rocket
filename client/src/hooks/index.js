import { useEffect, useState } from "react";

export const useMediaQuery = () => {
  const screenWidth = window.screen.width;
  const device =
    screenWidth < 992 ? "mobile" : screenWidth < 1200 ? "tablet" : "desktop";

  const [isDevice, setDevice] = useState(device);

  const checkDevice = () => {
    const screenWidth = window.screen.width;
    setDevice(
      screenWidth < 992 ? "mobile" : screenWidth < 1200 ? "tablet" : "desktop"
    );
  };

  useEffect(() => {
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  });

  return isDevice;
};

export const useWindowDimensions = () => {
  const {
    screen: { width, height }
  } = window;

  const [isDimension, setDimension] = useState({ width, height });

  const resizeScreen = () => {
    const {
      screen: { width, height }
    } = window;

    setDimension({ width, height });
  };

  useEffect(() => {
    window.addEventListener("resize", resizeScreen);

    return () => window.removeEventListener("resize", resizeScreen);
  });

  return isDimension;
};

export const useRefDimensions = ref => {
  const [isDimension, setDimension] = useState(null);

  if (ref.current && !isDimension) {
    const {
      current: {
        offsetWidth,
        offsetHeight,
        style: { paddingRight, paddingLeft, paddingTop, paddingBottom }
      }
    } = ref;

    const pRight = isNaN(parseFloat(paddingRight))
      ? 0
      : parseFloat(paddingRight);
    const pLeft = isNaN(parseFloat(paddingLeft)) ? 0 : parseFloat(paddingLeft);
    const pTop = isNaN(parseFloat(paddingTop)) ? 0 : parseFloat(paddingTop);
    const pBottom = isNaN(parseFloat(paddingBottom))
      ? 0
      : parseFloat(paddingBottom);

    setDimension({
      width: offsetWidth,
      height: offsetHeight,
      innerWidth: offsetWidth - pRight - pLeft,
      innerHeight: offsetHeight - pTop - pBottom
    });
  }

  const resizeScreen = () => {
    const {
      current: {
        offsetWidth,
        offsetHeight,
        style: { paddingRight, paddingLeft, paddingTop, paddingBottom }
      }
    } = ref;

    const pRight = isNaN(parseFloat(paddingRight))
      ? 0
      : parseFloat(paddingRight);
    const pLeft = isNaN(parseFloat(paddingLeft)) ? 0 : parseFloat(paddingLeft);
    const pTop = isNaN(parseFloat(paddingTop)) ? 0 : parseFloat(paddingTop);
    const pBottom = isNaN(parseFloat(paddingBottom))
      ? 0
      : parseFloat(paddingBottom);

    setDimension({
      width: offsetWidth,
      height: offsetHeight,
      innerWidth: offsetWidth - pRight - pLeft,
      innerHeight: offsetHeight - pTop - pBottom
    });
  };

  useEffect(() => {
    window.addEventListener("resize", resizeScreen);

    return () => window.removeEventListener("resize", resizeScreen);
  });

  return isDimension;
};

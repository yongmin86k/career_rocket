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

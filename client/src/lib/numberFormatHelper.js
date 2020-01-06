export const legendFormatHelper = number => {
  const nZero = number.toString().length - 1;
  let nNumber = "1";

  for (let i = 0; i < nZero; i++) {
    nNumber += "0";
  }

  nNumber = parseInt(nNumber);

  const maxNum = Math.ceil(number / nNumber) * nNumber;

  const legend = [];

  for (let n = 0; n < 6; n++) {
    const milestone = maxNum / 5;
    legend.push(milestone * n);
  }

  return legend;
};

export const thousandFormatHelper = number => {
  if (number > 1000) {
    const nZero = number.toString().length - 1;

    let nNumber = "1";

    for (let i = 0; i < nZero; i++) {
      nNumber += "0";
    }

    nNumber = parseInt(nNumber);

    return (number / nNumber).toFixed(1) + "k";
  }

  return number;
};

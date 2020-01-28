import moment from "moment";

export const trainingDataFormat = data => {
  const TYPES = {
    inPro: [],
    overDate: [],
    preArr: []
  };

  data.sort((a, b) => {
    const dateA = moment(a.dateStart);
    const dateB = moment(b.dateStart);

    return dateB - dateA;
  });

  data.forEach(item => {
    if (moment().isBefore(item.dateStart, "day")) {
      TYPES.preArr.push(item);
    } else if (moment().isAfter(item.dateEnd, "day")) {
      TYPES.overDate.push(item);
    } else {
      TYPES.inPro.push(item);
    }
  });

  return TYPES;
};

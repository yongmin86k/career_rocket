import moment from "moment";

export const clientStatusDataFormat = data => {
  const studentStates = data.students.map(info => info.studentState);

  const months = [];

  for (let i = 0; i < 4; i++) {
    const month = moment()
      .subtract(i, "months")
      .format("YYYYMM");

    months.push(parseInt(month));
  }

  const results = {};

  months.forEach(month => {
    const dataByMonth = studentStates.reduce((acc, cur) => {
      const filteredData = cur
        .filter(state => {
          return month >= parseInt(moment(state.createdAt).format("YYYYMM"));
        })
        .sort((a, b) => {
          const dateA = moment(a.createdAt);
          const dateB = moment(b.createdAt);

          return dateB - dateA;
        });

      if (filteredData[0]) {
        return [...acc, filteredData[0]];
      }
      return acc;
    }, []);

    results[month] = dataByMonth;
  });

  return results;
};

export const clientProcessDataFormat = data => {
  const consultingProcess = data.students.map(
    info =>
      info.consulting.sort((a, b) => {
        const dateA = moment(a.createdAt);
        const dateB = moment(b.createdAt);

        return dateB - dateA;
      })[0]
  );

  return consultingProcess;
};

const getAverageRating = (rates) => {
  let totalValues = 0;
  let total = 0;

  for (let i = 0; i < rates.length; i++) {
    totalValues +=
      parseInt(Object.keys(rates[i])[0]) * Object.values(rates[i])[0];
    total += Object.values(rates[i])[0];
  }
  let average = totalValues / total;
  let rating = Math.round(average * 10) / 10;
  return rating;
};
const getStarType = (average) => {
  let starType;
  if (average >= 0 && average < 1) {
    starType = 1;
  } else if (average >= 1 && average < 2) {
    starType = 2;
  } else if (average >= 2 && average < 3) {
    starType = 3;
  } else if (average >= 3 && average < 4) {
    starType = 4;
  } else {
    starType = 5;
  }
  return starType;
};

export { getAverageRating, getStarType };

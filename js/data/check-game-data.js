// check-game-data.js

const checkGameData = (arrResults, notes) => {
  let points = 0;

  if (notes === -1) {
    return -1;
  }

  points += arrResults.reduce((res, elem) => res + answerPoints(elem), 0);

  return points;
};

const answerPoints = (answer) => {
  let points = 0;
  const fastAnswerTime = 30;
  const point = {
    'fast': 2,
    'middle': 1,
    'fail': -2
  };
  if (answer[0]) {
    points += (answer[1] < fastAnswerTime) ? points += point.fast : points += point.middle;
  } else {
    points += point.fail;
  }
  return points;
};

export default checkGameData;

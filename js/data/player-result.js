// player-result.js

const playerResult = (otherPlayerStat, playerRes) => {
  const {points, notes, time} = playerRes;

  if (time === 0) {
    return `Время вышло! Вы не успели отгадать все мелодии`;
  }

  if (notes === -1) {
    return `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  }

  const stats = [...otherPlayerStat];
  stats.push(points);
  stats.sort((a, b) => b - a);

  const quantityPlayers = stats.length;
  const place = stats.indexOf(points) + 1;
  const percent = ((quantityPlayers - place) / quantityPlayers) * 100;

  return `Вы заняли ${place} место из ${quantityPlayers} игроков. Это лучше, чем у ${percent}% игроков`;
};

export default playerResult;

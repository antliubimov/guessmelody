// fail-tries.js

import {getElementFromTemplate, replayGame} from "./utils";

// <!-- Результат игры: проигрыш, закончились попытки -->
const failTriesTemplate = `<section class="result">
    <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
    <h2 class="result__title">Какая жалость!</h2>
    <p class="result__total result__total--fail">У вас закончились все попытки. Ничего, повезёт в следующий раз!</p>
    <button class="result__replay" type="button">Попробовать ещё раз</button>
  </section>`;

export default () => {
  const failTries = getElementFromTemplate(failTriesTemplate);
  replayGame(failTries, `.result__replay`);

  return failTries;
};

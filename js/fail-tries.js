// fail-tries.js

import getElementFromTemplate from "./get-element-from-template";
import replayGame from "./replay-game";

// <!-- Результат игры: проигрыш, закончились попытки -->
const failTriesTemplate = `<section class="result">
    <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
    <h2 class="result__title">Какая жалость!</h2>
    <p class="result__total result__total--fail">У вас закончились все попытки. Ничего, повезёт в следующий раз!</p>
    <button class="result__replay" type="button">Попробовать ещё раз</button>
  </section>`;

const failTries = getElementFromTemplate(failTriesTemplate);
replayGame(failTries, `.result__replay`);

export default failTries;

// fail-time.js

import getElementFromTemplate from "./get-element-from-template";
import replayGame from "./replay-game";

// <!-- Результат игры: проигрыш, время вышло -->
const failTimeTemplate = `<section class="result">
    <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
    <h2 class="result__title">Увы и ах!</h2>
    <p class="result__total result__total--fail">Время вышло! Вы не успели отгадать все мелодии</p>
    <button class="result__replay" type="button">Попробовать ещё раз</button>
  </section>`;

const failTime = getElementFromTemplate(failTimeTemplate);
replayGame(failTime, `.result__replay`);

export default failTime;

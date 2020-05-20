// result-artist.js

import getElementFromTemplate from "./getElementFromTemplate";

// <!-- Результат игры на выбор исполнителя -->
const resultArtistTemplate = `<section class="result result--artist">
  <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
  <h2 class="result__title">Вы отгадали 4 мелодии</h2>
<p class="result__text">Это лучше чем у 80% игроков</p>
<div class="result__answer">
  <div class="artist">
  <p class="artist__text">Самый<br>быстрый ответ</p>
<div class="artist__name">
  <img class="artist__picture" src="http://placehold.it/134x134" alt="Пелагея">
  Пелагея
  </div>
  <span class="artist__time">3 секунды</span>
</div>

<div class="artist">
  <p class="artist__text">Самый<br>долгий ответ</p>
<div class="artist__name">
  <img class="artist__picture" src="http://placehold.it/134x134" alt="Пелагея">
  Не Пелагея
</div>
<span class="artist__time">10 секунд</span>
</div>
</div>
<p class="result__total">Вы настоящий меломан!</p>
<button class="result__replay" type="button">Сыграть ещё раз</button>
</section>`;

const resultArtist = getElementFromTemplate(resultArtistTemplate);

export default resultArtist;

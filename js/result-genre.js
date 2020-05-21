// result-genre.js

import getElementFromTemplate from "./get-element-from-template";

// <!-- Результат игры на выбор жанра -->
const resultGenreTemplate = `<section class="result result--genre">
  <h2 class="result__title">Вы набрали 20 баллов</h2>
<p class="result__text">Это лучше чем у 50% игроков</p>
<div class="result__correct">
  <div class="correct"></div>
  <div class="correct"></div>
  <div class="correct"></div>
  <div class="correct"></div>
  <div class="correct"></div>
  <div class="correct"></div>
  <div class="correct"></div>
  <div class="correct"></div>
  <div class="correct"></div>
  <div class="correct"></div>
  </div>
  <p class="result__total">10 правильных ответов</p>
<div class="result__wrong">
  <div class="wrong"></div>
  <div class="wrong"></div>
  <div class="wrong"></div>
  </div>
  <p class="result__total">3 ошибки</p>
<p class="result__genre">Лучше всего вы разбираетесь в Инди-роке</p>
<button class="result__replay" type="button">Попробовать ещё раз</button>
</section>`;

const resultGenre = getElementFromTemplate(resultGenreTemplate);

export default resultGenre;

// result-list.js

import getElementFromTemplate from "./get-element-from-template";

// <!-- Результат игры на выбор исполнителя. Список -->
const resultListTemplate = `<section class="result result--list">
  <h2 class="result__title">Вы набрали 20 баллов</h2>
<p class="result__text">Мгновенный ответ — 2</p>
<p class="result__text">Музкомбо — 1</p>
<ol class="result__list">
  <li class="result__item result__item--correct">Gorillaz – Clint Eastwood</li>
<li class="result__item">Сплин – Моё сердце остановилось</li>
<li class="result__item">Anacondaz – Семь миллиардов</li>
<li class="result__item result__item--correct">L'One – Якутяночка<span class="result__extra">+5 баллов</span></li>
<li class="result__item">Nirvana – Lithium</li>
<li class="result__item">Nickelback – Lullaby</li>
<li class="result__item result__item--correct">Eminem & Linkin Park–Gravity</li>
<li class="result__item">Gorillaz – Clint Eastwood</li>
<li class="result__item">Сплин – Моё сердце остановилось</li>
<li class="result__item">Anacondaz – Семь миллиардов</li>
<li class="result__item">L'One – Якутяночка</li>
<li class="result__item result__item--correct">Nirvana – Lithium</li>
<li class="result__item">Nickelback – Lullaby</li>
<li class="result__item">Eminem & Linkin Park–Gravity</li>
</ol>
<p class="result__total">Вы настоящий меломан!</p>
<button class="result__replay" type="button">Попробовать ещё раз</button>
</section>`;

const resultList = getElementFromTemplate(resultListTemplate);

export default resultList;

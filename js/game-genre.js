// game-genre.js

import getElementFromTemplate from "./get-element-from-template";
import changeScreen from "./change-screen";
import header from "./header";
import {games} from "./data/data";
import trackTemplate from "./track";
import gameArtist from "./game-artist";
import replayGame from "./replay-game";

const answers = games[`game-genre`].answers.map((answer) => trackTemplate(answer)).join(``);

// <!-- Игра на выбор жанра -->
const gameGenreTemplate = `<section class="game game--genre">
    ${header.innerHTML}
    <section class="game__screen">
      <h2 class="game__title">${games[`game-genre`].description}</h2>
      <form class="game__tracks">
        ${answers}

<!--        <div class="track">-->
<!--          <button class="track__button track__button&#45;&#45;pause" type="button"></button>-->
<!--          <div class="track__status">-->
<!--            <audio></audio>-->
<!--          </div>-->
<!--          <div class="game__answer">-->
<!--            <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-3">-->
<!--            <label class="game__check" for="answer-3">Отметить</label>-->
<!--          </div>-->
<!--        </div>-->

        <button class="game__submit button" type="submit">Ответить</button>
      </form>
    </section>
  </section>`;

const gameGenre = getElementFromTemplate(gameGenreTemplate);
const gameSubmit = gameGenre.querySelector(`.game__submit`);
gameSubmit.setAttribute(`disabled`, `true`);
const gameInputs = gameGenre.querySelectorAll(`.game__input`);
const gameChecks = gameGenre.querySelectorAll(`.game__check`);

const validateChecked = () => {
  let disabled = true;
  for (let input of gameInputs) {
    if (input.checked) {
      disabled = false;
      break;
    }
  }
  if (disabled) {
    gameSubmit.setAttribute(`disabled`, true);
  } else {
    gameSubmit.removeAttribute(`disabled`);
  }
};

const triggerInput = (e) => {
  const inp = document.querySelector(`#${e.target.attributes.for[`value`]}`);
  inp.addEventListener(`change`, validateChecked);
};

[...gameChecks].forEach((gameCheck) => gameCheck.addEventListener(`click`, triggerInput));

gameSubmit.addEventListener(`click`, function () {
  changeScreen(gameArtist);
});

// replayGame(gameGenre, `.game__back`);

export default gameGenre;

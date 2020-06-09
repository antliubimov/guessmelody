// game-genre-template.js

import header from "./header";

const trackTemplate = (track, idx) => `<div class="track">
          <button class="track__button track__button--play" type="button"></button>
          <div class="track__status">
            <audio src=${track.src}></audio>
          </div>
          <div class="game__answer">
            <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-${idx + 1}" id="answer-${idx + 1}">
            <label class="game__check" for="answer-${idx + 1}">Отметить</label>
          </div>
        </div>`;

export default (state, options, answer) => ` <section class="game game--genre">
    ${header(state)}
    <section class="game__screen">
      <h2 class="game__title">Выберите ${answer.genre} треки</h2>
      <form class="game__tracks">
        ${options.map((option, idx) => trackTemplate(option, idx))}
        <button class="game__submit button" type="submit">Ответить</button>
      </form>
    </section>
  </section>`;

//  track__button--pause

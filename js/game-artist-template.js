// get-game-get-artist.js

import header from "./header";

const artistTemplate = (artist, idx) => `<div class="artist">
    <input class="artist__input visually-hidden" type="radio" name="answer" value="answer-${idx + 1}" id="answer-${idx + 1}">
    <label class="artist__name" for="answer-${idx + 1}">
    <img class="artist__picture" src=${artist.image}" alt="${artist.artist}">
    ${artist.name}
    </label>
    </div>`;

export default (state, options, answer) => `<section class="game game--artist">
    ${header(state.time)}
    <section class="game__screen">
      <h2 class="game__title">Кто исполняет эту песню?</h2>
      <div class="game__track">
        <button class="track__button track__button--play" type="button"></button>
        <audio src=${answer.src}></audio>
      </div>
      <form class="game__artist">
        ${options.map((artist, idx) => artistTemplate(artist, idx)).join(``)}
      </form>
    </section>
  </section>`;

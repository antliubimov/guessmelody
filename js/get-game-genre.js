// get-game-genre.js

import getHeader from "./get-header";
import {games, initialState} from "./data/data";
import getTrack from "./get-track";

const answers = games[`game-genre`].answers.map((answer) => getTrack(answer)).join(``);

const gameGenreTemplate = `<section class="game game--genre">
    ${getHeader(initialState)}
    <section class="game__screen">
      <h2 class="game__title">${games[`game-genre`].description}</h2>
      <form class="game__tracks">
        ${answers}

<!--       track__button&--pause" -->

        <button class="game__submit button" type="submit">Ответить</button>
      </form>
    </section>
  </section>`;

export default gameGenreTemplate;
